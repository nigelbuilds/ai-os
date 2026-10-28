const $=s=>document.querySelector(s);
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
function md(src){const out=[];let code=false,list=false;
 const inl=t=>esc(t).replace(/`([^`]+)`/g,'<code>$1</code>').replace(/\*\*([^*]+)\*\*/g,'<b>$1</b>').replace(/\*([^*]+)\*/g,'<i>$1</i>').replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank">$1</a>');
 for(const l of src.split('\n')){
  if(l.startsWith('```')){if(list){out.push('</ul>');list=false}out.push(code?'</pre>':'<pre>');code=!code;continue}
  if(code){out.push(esc(l));continue}
  const h=l.match(/^(#{1,6})\s+(.*)/),li=l.match(/^\s*(?:[-*]|\d+\.)\s+(.*)/);
  if(li){if(!list){out.push('<ul>');list=true}out.push('<li>'+inl(li[1])+'</li>');continue}
  if(list){out.push('</ul>');list=false}
  if(h)out.push(`<h${h[1].length}>${inl(h[2])}</h${h[1].length}>`);else if(l.trim())out.push('<p>'+inl(l)+'</p>');
 }return out.join('\n')}
async function show(s,el){document.querySelectorAll('.card.active').forEach(c=>c.classList.remove('active'));el&&el.classList.add('active');
 $('#viewhead').textContent='~/.agent/'+s.path;const r=await fetch('/api/skill?path='+encodeURIComponent(s.path));
 const t=await r.text();$('#view').innerHTML=r.ok?md(t):'<p>'+esc(t)+'</p>'}
function card(s,label){const d=document.createElement('div');d.className='card';
 d.innerHTML=esc(label||s.title||s.name)+(s.status?`<span class="tag ${s.status==='full-brief'?'full':''}">${esc(s.status)}</span>`:'');
 d.onclick=()=>show(s,d);return d}
const short=n=>n.includes('/')?n.split('/').pop():n;
(async()=>{const cfg=await (await fetch('/api/skills')).json();const sk=cfg.skills||[];
 $('#meta').textContent=`${sk.length} skills · router: ${cfg.default_router||'ceo'} · ${cfg.layout||''}`;
 const org=$('#org'),used=new Set();const ceo=sk.find(s=>s.name==='ceo');
 if(ceo){const c=document.createElement('div');c.className='ceo';c.appendChild(card(ceo,'👑 '+(ceo.title||'CEO')));org.appendChild(c);used.add('ceo');used.add('orchestrator')}
 const execs=sk.filter(s=>s.reports_to==='ceo'&&s.agents);const grid=document.createElement('div');grid.className='execs';
 for(const e of execs){used.add(e.name);const box=document.createElement('div');box.className='exec';
  box.appendChild(card(e,e.name.toUpperCase()+' — '+(e.title||'')));const ag=document.createElement('div');ag.className='agents';
  for(const s of sk.filter(s=>s.reports_to===e.name)){used.add(s.name);ag.appendChild(card(s,short(s.name)))}
  box.appendChild(ag);grid.appendChild(box)}
 org.appendChild(grid);const rest=sk.filter(s=>!used.has(s.name));
 if(rest.length){const o=document.createElement('div');o.className='other';o.innerHTML='<h3>Other skills</h3>';rest.forEach(s=>o.appendChild(card(s,s.name)));org.appendChild(o)}
 if(ceo)show(ceo,document.querySelector('.ceo .card'));})();
$('#copy').onclick=async()=>{await navigator.clipboard.writeText($('#prompt').value);$('#copy').textContent='Copied ✓';setTimeout(()=>$('#copy').textContent='Copy prompt',1500)};

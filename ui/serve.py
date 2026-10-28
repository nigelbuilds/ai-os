#!/usr/bin/env python3
"""Local AI OS dashboard. Read-only over ~/.agent."""
import http.server, json, os, sys, threading, webbrowser, urllib.parse
HOME = os.path.expanduser("~")
AGENT = os.path.realpath(os.path.join(HOME, ".agent"))
STATIC = os.path.join(os.path.dirname(os.path.abspath(__file__)), "static")
PORT = 8765
class H(http.server.SimpleHTTPRequestHandler):
    def __init__(s, *a, **k): super().__init__(*a, directory=STATIC, **k)
    def send_data(s, code, body, ctype):
        b = body.encode() if isinstance(body, str) else body
        s.send_response(code); s.send_header("Content-Type", ctype)
        s.send_header("Content-Length", str(len(b))); s.send_header("Cache-Control", "no-store"); s.end_headers(); s.wfile.write(b)
    def do_GET(s):
        u = urllib.parse.urlparse(s.path)
        if u.path == "/api/skills":
            try:
                with open(os.path.join(AGENT, "config", "skills.json")) as f: return s.send_data(200, f.read(), "application/json")
            except Exception as e: return s.send_data(500, json.dumps({"error": str(e)}), "application/json")
        if u.path == "/api/skill":
            rel = urllib.parse.parse_qs(u.query).get("path", [""])[0]
            p = os.path.realpath(os.path.join(AGENT, rel))
            if not p.startswith(AGENT + os.sep) or not os.path.isfile(p):
                return s.send_data(404, "Not found or outside ~/.agent", "text/plain; charset=utf-8")
            with open(p, encoding="utf-8", errors="replace") as f: return s.send_data(200, f.read(), "text/plain; charset=utf-8")
        return super().do_GET()
    def log_message(s, *a): pass
if __name__ == "__main__":
    url = f"http://127.0.0.1:{PORT}"
    try: srv = http.server.ThreadingHTTPServer(("127.0.0.1", PORT), H)
    except OSError:
        print("Already running:", url)
        if "--no-browser" not in sys.argv: webbrowser.open(url)
        sys.exit(0)
    print("AI OS Dashboard:", url, "(Ctrl+C to stop)")
    if "--no-browser" not in sys.argv: threading.Timer(0.6, lambda: webbrowser.open(url)).start()
    try: srv.serve_forever()
    except KeyboardInterrupt: pass

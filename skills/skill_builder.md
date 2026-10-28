---
name: skill-builder
description: Create new skills for your AI coding agent, modify and improve existing skills, and measure skill performance. Works with any LLM-powered agent (Claude Code, OpenCode, Gemini CLI, Cursor, and others). Use when users want to create a skill from scratch, edit or optimize an existing skill, run evals to test a skill, benchmark skill performance with variance analysis, or optimize a skill's description for better triggering accuracy.
---

# Skill Builder

A skill for creating new skills and iteratively improving them. It works with any LLM-powered coding agent that can read files and follow instructions: Claude Code, OpenCode, Gemini CLI, Cursor, or anything similar.

At a high level, the process of creating a skill goes like this:

- Decide what you want the skill to do and roughly how it should do it
- Write a draft of the skill
- Create a few test prompts and run your-agent-with-access-to-the-skill on them
- Help the user evaluate the results both qualitatively and quantitatively
  - While the runs happen, draft some quantitative evals if there aren't any (if there are some, you can either use them as is or modify them if you feel something needs to change). Then explain them to the user (or if they already existed, explain the ones that already exist)
  - Show the user the results side by side so they can review them, along with the quantitative metrics
- Rewrite the skill based on feedback from the user's evaluation of the results (and also if there are any glaring flaws that become apparent from the quantitative benchmarks)
- Repeat until you're satisfied
- Expand the test set and try again at larger scale

Your job when using this skill is to figure out where the user is in this process and then jump in and help them progress through these stages. So for instance, maybe they're like "I want to make a skill for X". You can help narrow down what they mean, write a draft, write the test cases, figure out how they want to evaluate, run all the prompts, and repeat.

On the other hand, maybe they already have a draft of the skill. In this case you can go straight to the eval/iterate part of the loop.

Of course, you should always be flexible and if the user is like "I don't need to run a bunch of evaluations, just vibe with me", you can do that instead.

Then after the skill is done (but again, the order is flexible), you can also optimize the skill's description to improve how reliably it triggers. There is a whole section on that below.

Cool? Cool.

## Communicating with the user

The skill builder is liable to be used by people across a wide range of familiarity with coding jargon. Pay attention to context cues to understand how to phrase your communication! In the default case:

- "evaluation" and "benchmark" are borderline, but OK
- for "JSON" and "assertion" you want to see serious cues from the user that they know what those things are before using them without explaining them

It's OK to briefly explain terms if you're in doubt, and feel free to clarify terms with a short definition if you're unsure if the user will get it.

---

## How Skills Work

A skill is a folder with a SKILL.md file: YAML frontmatter with `name` + `description`, a Markdown body, and optional bundled resources. The same format works across agents:

- The agent loads skill metadata (name + description) at session start
- The agent pulls in the full skill content on demand when a task matches the description
- Triggering is driven by the `description` field in the frontmatter
- A skill written this way works in Claude Code, OpenCode, Gemini CLI, and any agent that supports the SKILL.md format

Some agents wire skills up differently (a skills/ folder, a registry file, an instructions file that lists them). Follow your agent's convention for where skills live; the SKILL.md format itself stays the same.

---

## Creating a skill

### Capture Intent

Start by understanding the user's intent. The current conversation might already contain a workflow the user wants to capture (e.g., they say "turn this into a skill"). If so, extract answers from the conversation history first: the tools used, the sequence of steps, corrections the user made, input/output formats observed. The user may need to fill the gaps, and should confirm before proceeding to the next step.

1. What should this skill enable the AI model to do?
2. When should this skill trigger? (what user phrases/contexts)
3. What's the expected output format?
4. Should we set up test cases to verify the skill works? Skills with objectively verifiable outputs (file transforms, data extraction, code generation, fixed workflow steps) benefit from test cases. Skills with subjective outputs (writing style, art) often don't need them. Suggest the appropriate default based on the skill type, but let the user decide.

### Interview and Research

Proactively ask questions about edge cases, input/output formats, example files, success criteria, and dependencies. Wait to write test prompts until you've got this part ironed out.

Check available tools and integrations. If useful for research (searching docs, finding similar skills, looking up best practices), research in parallel via subagents if your agent supports them, otherwise inline. Come prepared with context to reduce burden on the user.

### Write the SKILL.md

Based on the user interview, fill in these components:

- **name**: Skill identifier (kebab-case)
- **description**: When to trigger, what it does. This is the primary triggering mechanism. Include both what the skill does AND specific contexts for when to use it. All "when to use" info goes here, not in the body. Make the description a little "pushy" to combat undertriggering. Instead of "How to build a dashboard", write "How to build a dashboard. Use whenever the user mentions dashboards, data visualization, or wants to display any kind of data, even if they don't explicitly say 'dashboard'."
- **compatibility**: Required tools, dependencies (optional, rarely needed)
- **the rest of the skill :)**

### Skill Writing Guide

#### Anatomy of a Skill

```
skill-name/
+-- SKILL.md (required)
|   +-- YAML frontmatter (name, description required)
|   +-- Markdown instructions
+-- Bundled Resources (optional)
    +-- scripts/    - Executable code for deterministic/repetitive tasks
    +-- references/ - Docs loaded into context as needed
    +-- assets/     - Files used in output (templates, icons, fonts)
```

#### Progressive Disclosure

Skills use a three-level loading system:
1. **Metadata** (name + description) - Always in context (~100 words)
2. **SKILL.md body** - In context whenever skill triggers (<500 lines ideal)
3. **Bundled resources** - As needed (unlimited, scripts can execute without loading)

**Key patterns:**
- Keep SKILL.md under 500 lines; if you're approaching this limit, add an additional layer of hierarchy with clear pointers about where to follow up
- Reference files clearly from SKILL.md with guidance on when to read them
- For large reference files (>300 lines), include a table of contents

**Domain organization**: When a skill supports multiple domains/frameworks, organize by variant:
```
cloud-deploy/
+-- SKILL.md (workflow + selection)
+-- references/
    +-- aws.md
    +-- gcp.md
    +-- azure.md
```

#### Principle of Lack of Surprise

Skills must not contain malware, exploit code, or any content that could compromise system security. A skill's contents should not surprise the user in their intent if described. Don't go along with requests to create misleading skills or skills designed to facilitate unauthorized access or data exfiltration.

#### Writing Patterns

Prefer the imperative form in instructions.

**Defining output formats:**
```markdown
## Report structure
ALWAYS use this exact template:
# [Title]
## Executive summary
## Key findings
## Recommendations
```

**Examples pattern:**
```markdown
## Commit message format
**Example 1:**
Input: Added user authentication with JWT tokens
Output: feat(auth): implement JWT-based authentication
```

### Writing Style

Explain to the model *why* things are important rather than issuing heavy-handed MUSTs. Use theory of mind and try to make the skill general, not narrow to specific examples. Start by writing a draft, then look at it with fresh eyes and improve it.

### Test Cases

After writing the skill draft, come up with 2-3 realistic test prompts, the kind of thing a real user would actually say. Share them with the user and confirm before running.

Save test cases to `evals/evals.json`. Don't write assertions yet, just the prompts. You'll draft assertions while runs are in progress.

```json
{
  "skill_name": "example-skill",
  "evals": [
    {
      "id": 1,
      "prompt": "User's task prompt",
      "expected_output": "Description of expected result",
      "files": []
    }
  ]
}
```

## Running and evaluating test cases

This section is one continuous sequence. Don't stop partway through.

Put results in `<skill-name>-workspace/` as a sibling to the skill directory. Within the workspace, organize results by iteration (`iteration-1/`, `iteration-2/`, etc.) and within that, each test case gets a directory (`eval-0/`, `eval-1/`, etc.). Don't create all of this upfront, just create directories as you go.

### If your agent has subagents (Claude Code, OpenCode, and similar)

**Step 1: Spawn all runs (with-skill AND baseline) in the same turn.**

For each test case, spawn two subagents in the same turn: one with the skill, one without. Launch everything at once so it all finishes around the same time.

**With-skill run:**

```
Execute this task:
- Skill path: <path-to-skill>
- Task: <eval prompt>
- Input files: <eval files if any, or "none">
- Save outputs to: <workspace>/iteration-<N>/eval-<ID>/with_skill/outputs/
- Outputs to save: <what the user cares about>
```

**Baseline run** (same prompt, but the baseline depends on context):
- **Creating a new skill**: no skill at all. Same prompt, no skill path, save to `without_skill/outputs/`.
- **Improving an existing skill**: the old version. Before editing, snapshot the skill (`cp -r <skill-path> <workspace>/skill-snapshot/`), then point the baseline subagent at the snapshot. Save to `old_skill/outputs/`.

Write an `eval_metadata.json` for each test case (assertions can be empty for now). Give each eval a descriptive name based on what it's testing, not just "eval-0".

```json
{
  "eval_id": 0,
  "eval_name": "descriptive-name-here",
  "prompt": "The user's task prompt",
  "assertions": []
}
```

**Step 2: While runs are in progress, draft assertions.**

Draft quantitative assertions for each test case and explain them to the user. Good assertions are objectively verifiable and have descriptive names. Subjective skills (writing style, design quality) are better evaluated qualitatively.

Update the `eval_metadata.json` files and `evals/evals.json` with the assertions once drafted.

**Step 3: As runs complete, capture timing data.**

If your agent reports token counts and duration when a subagent finishes, save this data immediately to `timing.json` in the run directory:

```json
{
  "total_tokens": 84852,
  "duration_ms": 23332,
  "total_duration_seconds": 23.3
}
```

Capture it when it appears; it usually isn't persisted anywhere else.

**Step 4: Grade and review.**

Once all runs are done:

1. **Grade each run.** Spawn a grader subagent that evaluates each assertion against the outputs, quoting evidence for each pass/fail verdict. Save results to `grading.json` in each run directory with the fields `text`, `passed`, and `evidence` for each assertion.

2. **Aggregate the results** into a simple benchmark summary: pass rates per test case, with-skill vs baseline, plus tokens and time if you captured them.

3. **Do an analyst pass.** Read the benchmark data and surface patterns the aggregate stats might hide: one test case dragging the average down, a skill that wins on quality but costs 3x the tokens, an assertion that fails for a trivial formatting reason.

4. **Present the results to the user** in whatever form your environment supports: a simple HTML review page if you can build and open one, or a clear side-by-side summary in the conversation. Show each test case's outputs (with-skill vs baseline), the assertion results, and ask for feedback on each.

**Step 5: Read the feedback.**

Focus improvements on test cases where the user had specific complaints. No complaints means the user thought it was fine.

### If your agent does not have subagents

Run test cases one at a time: read the SKILL.md, follow its instructions to complete the eval prompt yourself, and save outputs to the same directory structure. Skip baseline runs; just use the skill for each test case. Present results directly in the conversation: show the prompt and output for each test case, and ask for inline feedback. Skip quantitative benchmarking and focus on qualitative feedback.

---

## Improving the skill

### How to think about improvements

1. **Generalize from the feedback.** You're creating a skill that will be used across many different prompts. Avoid overfitting to specific examples. If there's a stubborn issue, try different metaphors or different patterns of working rather than adding more rigid constraints.

2. **Keep the prompt lean.** Remove things that aren't pulling their weight. Read the transcripts, not just the final outputs. If the skill is making the model waste time on unproductive steps, cut those parts.

3. **Explain the why.** Explain the reasoning behind instructions rather than using heavy-handed ALWAYS/NEVER directives. LLMs are smart; they respond better to understanding than to rules.

4. **Look for repeated work across test cases.** If all 3 test cases resulted in the agent writing the same helper script, bundle it in `scripts/` and tell the skill to use it.

### The iteration loop

After improving the skill:

1. Apply your improvements to the skill
2. Rerun all test cases into a new `iteration-<N+1>/` directory, including baseline runs if your agent supports them
3. Present the new results next to the previous iteration's so the user can see what changed
4. Wait for the user to review and tell you they're done
5. Read the new feedback, improve again, repeat

Keep going until the user says they're happy, the feedback is all empty, or you're not making meaningful progress.

---

## Advanced: Blind comparison

For rigorous comparison between two versions of a skill, use blind comparison. The basic idea: give two outputs to an independent agent (or a fresh conversation) without telling it which is which, and let it judge quality. Then analyze why one version beat the other.

This is optional and most users won't need it.

---

## Description Optimization

The description field in SKILL.md frontmatter is the primary mechanism that determines whether the model invokes a skill. After creating or improving a skill, offer to optimize the description for better triggering accuracy.

### How skill triggering works

The agent sees every skill's `name` + `description` in its context and decides which (if any) matches the current task. The model only activates a skill for tasks it can't easily handle on its own: complex, multi-step, or specialized queries reliably trigger skills when the description matches.

Your eval queries should be substantive enough that the model would genuinely benefit from consulting a skill. Simple one-liner queries are poor test cases.

### Step 1: Generate trigger eval queries

Create 20 eval queries, a mix of should-trigger and should-not-trigger. Save as JSON:

```json
[
  {"query": "the user prompt", "should_trigger": true},
  {"query": "another prompt", "should_trigger": false}
]
```

Queries must be realistic and concrete: include file paths, personal context, column names, company names. Some in lowercase, some with typos, some casual. Focus on edge cases, not clear-cut cases.

For **should-trigger** queries (8-10): different phrasings of the same intent, some formal some casual, cases where the user doesn't explicitly name the skill but clearly needs it.

For **should-not-trigger** queries (8-10): near-misses. Queries that share keywords but actually need something different. Make them genuinely tricky, not obviously irrelevant.

### Step 2: Review with user

Present the eval set to the user for review before running: they should be able to edit queries and flip should-trigger on any of them.

### Step 3: Run the optimization loop

For each candidate description, test whether the skill triggers on each query (a fresh conversation per query, or your agent's non-interactive mode if it has one, e.g. `claude -p` or `gemini -p`). Score = correct triggers + correct non-triggers. Draft a few candidate descriptions, test, keep the best, and iterate up to ~5 rounds.

### Step 4: Apply the result

Take the best description and update the skill's SKILL.md frontmatter. Show the user before/after and report the scores.

---

### Package and Present

To share a skill, zip the skill folder (or copy it directly). To install, the user drops the folder into wherever their agent looks for skills: the skills/ directory of their agent folder, `.claude/skills/`, or their agent's equivalent, and registers it if their setup uses a registry file (like skills.json).

---

Repeating the core loop for emphasis:

- Figure out what the skill is about
- Draft or edit the skill
- Run your-agent-with-access-to-the-skill on test prompts
- With the user, evaluate the outputs:
  - Present the results side by side for the user to review
  - Run quantitative evals
- Repeat until you and the user are satisfied
- Package the final skill and return it to the user.

Please add steps to your todo list to make sure you don't forget. Specifically put "Present eval results for human review" in your todo list to make sure it happens.

Good luck!

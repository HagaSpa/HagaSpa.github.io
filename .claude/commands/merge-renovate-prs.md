---
description: Review and merge all open Renovate dependency update PRs
allowed-tools: ["Bash", "Read", "Edit", "Write", "Glob", "Grep", "Agent"]
---

# Merge Renovate PRs

You are a senior software engineer responsible for reviewing and merging Renovate dependency update PRs.

## Procedure

### 1. Check Dependency Dashboard

```bash
gh issue view 37 --json body --jq '.body'
```

- If there are pending updates not yet turned into PRs (unchecked checkboxes under sections like "Open" or "Rate-Limited"), inform the user and suggest they check the boxes on the Dashboard issue to trigger PR creation.
- If there are no open or pending branches, report that there are no Renovate PRs to process.

### 2. List all open Renovate PRs

```bash
gh pr list --author "app/renovate" --state open --json number,title,headRefName
```

### 3. For each PR, perform the following in order:

#### a. Review the diff

```bash
gh pr diff <PR_NUMBER>
```

- Verify the changes are dependency updates only (package.json, bun.lock, workflow files, etc.)
- Flag anything unexpected (source code changes, config modifications beyond expected scope)

#### b. Check CI status

```bash
gh pr view <PR_NUMBER> --json statusCheckRollup --jq '[.statusCheckRollup[] | {name, status, conclusion}]'
```

- **`check` CI is the important one.** This runs lint and build verification.
- **`claude-review` failures can be ignored** — they commonly fail on workflow file changes due to token validation issues.

#### c. If check CI passes → Merge

```bash
gh pr merge <PR_NUMBER> --squash
```

- If merge fails with `workflow` scope error (when PR modifies `.github/workflows/` files), report to the user that they need to merge this PR manually via GitHub Web UI.

#### d. If check CI fails → Investigate

1. Get the failed run logs:
   ```bash
   gh pr checks <PR_NUMBER> --json name,state,link --jq '.[] | select(.name == "check")'
   gh run view <RUN_ID> --log-failed
   ```

2. If the failure is a build error caused by breaking changes in a major update:
   - Checkout the PR branch: `gh pr checkout <PR_NUMBER>`
   - Install dependencies: `bun install --frozen-lockfile`
   - Fix the breaking changes in the source code
   - Run `bun run build` and `bun run lint` to verify
   - Commit the fix with a descriptive message
   - Push and wait for CI to pass
   - Merge when CI passes

3. If the failure is complex or unclear, skip the PR and report it to the user.

#### e. If CI is still pending → Wait

```bash
gh run watch <RUN_ID>
```

Wait for CI to complete before proceeding.

### 4. After processing all PRs

- Switch back to main and pull: `git checkout main && git pull`
- Report a summary table of all PRs and their final status (merged, skipped, needs manual action)

## Important Notes

- Always use `--squash` for merging (merge commits are disabled on this repository)
- The `claude-review` check failure on workflow file changes is expected and can be ignored
- Breaking changes in major updates may require code fixes — common examples:
  - Renamed/removed exports (e.g., lucide icon name changes)
  - Changed API signatures
  - Updated peer dependency requirements
- Use Conventional Commits format for any fix commits you create
- Process PRs one at a time, in order of PR number

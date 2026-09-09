# Publish This Project with Git and GitHub

Use this runbook to publish a local project to GitHub safely. Replace placeholders such as `<repository-name>` and `Your Name`; never put passwords, tokens, or personal account details in commands or files.

## Quick path

Run these commands from the project root. Skip initialization and repository creation when the project already has a Git repository or a GitHub remote.

```bash
# 1. Initialize the local repository (new projects only).
git init -b main

# 2. Set the author identity for this repository only.
git config --local user.name "Your Name"
git config --local user.email "you@example.com"

# 3. Review files, then create the first commit.
git status
git add .
git commit -m "chore: initialize project repository"

# 4. Authenticate GitHub CLI interactively, then confirm access.
gh auth login
gh auth status

# 5. Create and publish one repository. Choose exactly one visibility flag.
gh repo create <repository-name> --source=. --remote=origin --push --public
# gh repo create <repository-name> --source=. --remote=origin --push --private
```

## Protect desktop metadata

Before `git add .`, keep local file-manager metadata out of version control in `.gitignore`:

```gitignore
# Desktop metadata
.directory
.DS_Store
Thumbs.db
```

Check the staged files before committing:

```bash
git status
```

## Author identity scope

`--local` writes the identity to this repository's `.git/config`. It is the recommended setting for a shared or project-specific workstation because it does not change other repositories.

Only use `--global` when you intentionally want the same identity in every repository on this computer:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Do not run the global commands if repository-local identity is sufficient.

## Verify publication

After the GitHub CLI command completes, verify that `origin` points to GitHub and that `main` tracks `origin/main`:

```bash
git remote -v
git branch -vv
git status
git ls-remote --heads origin main
```

If the repository was created without `--push`, publish the branch explicitly:

```bash
git push -u origin main
```

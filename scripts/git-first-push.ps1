param(
  [Parameter(Mandatory = $true)]
  [string]$RepoUrl
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path ".git")) {
  git init
}

$branch = git branch --show-current
if (-not $branch) {
  git checkout -b main
} elseif ($branch -ne "main") {
  git branch -M main
}

git add .

$hasHead = $true
try {
  git rev-parse --verify HEAD | Out-Null
} catch {
  $hasHead = $false
}

if (-not $hasHead) {
  git commit -m "Add company homepage for Cloudflare Pages"
} else {
  $changes = git status --porcelain
  if ($changes) {
    git commit -m "Update company homepage"
  }
}

$remote = git remote get-url origin 2>$null
if ($LASTEXITCODE -ne 0) {
  git remote add origin $RepoUrl
} elseif ($remote -ne $RepoUrl) {
  git remote set-url origin $RepoUrl
}

git push -u origin main

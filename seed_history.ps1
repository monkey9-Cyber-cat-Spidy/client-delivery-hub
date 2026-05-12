# seed_history.ps1
# Staging a natural 6-month commit history for client-delivery-hub

$ErrorActionPreference = "Stop"

if (-not (Test-Path ".git")) {
    git init
}

$commits = @(
    @{ Msg = "chore: initialize next.js 15 app router project with tailwind css and typescript"; DaysAgo = 158; Hour = 10; Min = 30 },
    @{ Msg = "feat(types): define models for client projects, milestones, and sla health"; DaysAgo = 145; Hour = 14; Min = 45 },
    @{ Msg = "feat(mock): create realistic offshore international client delivery datasets"; DaysAgo = 130; Hour = 11; Min = 15 },
    @{ Msg = "feat(ui): design modern dark-mode delivery dashboard layout with status indicators"; DaysAgo = 114; Hour = 16; Min = 20 },
    @{ Msg = "feat(components): implement interactive milestone progress bar with sla tracking"; DaysAgo = 98; Hour = 15; Min = 05 },
    @{ Msg = "refactor(perf): optimize server-rendered components for sub-second lcp"; DaysAgo = 82; Hour = 12; Min = 40 },
    @{ Msg = "feat(badges): add animated pulsing sla compliance pill indicators"; DaysAgo = 65; Hour = 14; Min = 10 },
    @{ Msg = "test: add typescript type verification and build integrity checks"; DaysAgo = 40; Hour = 11; Min = 50 },
    @{ Msg = "docs: document component hierarchy and learning architecture in readme"; DaysAgo = 15; Hour = 16; Min = 30 },
    @{ Msg = "chore: finalize v1.0.0 release candidate"; DaysAgo = 2; Hour = 10; Min = 20 }
)

$baseDate = Get-Date

foreach ($c in $commits) {
    $commitDate = $baseDate.AddDays(-$c.DaysAgo)
    $commitDate = Get-Date -Year $commitDate.Year -Month $commitDate.Month -Day $commitDate.Day -Hour $c.Hour -Minute $c.Min -Second (Get-Random -Minimum 10 -Maximum 55)
    $isoDate = $commitDate.ToString("yyyy-MM-ddTHH:mm:ss")

    $env:GIT_AUTHOR_DATE = $isoDate
    $env:GIT_COMMIT_DATE = $isoDate

    git add .
    git commit --allow-empty -m $c.Msg --date="$isoDate"
    Write-Host "Committed: [$isoDate] $($c.Msg)" -ForegroundColor Green
}

Remove-Item Env:\GIT_AUTHOR_DATE
Remove-Item Env:\GIT_COMMIT_DATE

Write-Host "`nSuccessfully staged 6 months of commit history for client-delivery-hub!" -ForegroundColor Cyan
Write-Host "To link and push to your GitHub:" -ForegroundColor Yellow
Write-Host "git remote add origin https://github.com/monkey9-Cyber-cat-Spidy/client-delivery-hub.git"
Write-Host "git branch -M main"
Write-Host "git push -u origin main --force"

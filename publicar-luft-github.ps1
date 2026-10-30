$ErrorActionPreference = "Stop"
$project = "C:\Users\weles.AVELL_W\Documents\Dev\luft"
$remote = "https://github.com/oWesleyAquino/luft-engenharia-redesign.git"

if (!(Test-Path "$project\package.json")) { throw "Não encontrei package.json em $project. Confirme a pasta antes de continuar." }
Set-Location $project
Write-Host "Projeto: $project" -ForegroundColor Cyan

if (!(Test-Path ".gitignore")) { throw "Arquivo .gitignore ausente. Interrompendo para evitar publicar dependências ou dados privados." }
$ignore = Get-Content ".gitignore" -Raw
if ($ignore -notmatch "(?m)^\s*\.vercel/?\s*$") { Add-Content ".gitignore" "`n.vercel/" }

if (!(Test-Path ".git")) { git init }
git branch -M main

$existing = git remote 2>$null
if ($LASTEXITCODE -ne 0) { throw "Falha ao verificar os remotos Git." }
if ($existing -match "(?m)^origin$") {
    $url = git remote get-url origin
    if ($url -ne $remote -and $url -ne "git@github.com:oWesleyAquino/luft-engenharia-redesign.git") {
        throw "Origin já aponta para outro local: $url. Não foi alterado."
    }
} else {
    git remote add origin $remote
}
git add -A
git status --short
git diff --cached --quiet
if ($LASTEXITCODE -ne 0) { git commit -m "feat: publish LUFT Engenharia redesign v1.3" }
git push -u origin main
if ($LASTEXITCODE -ne 0) { throw "Git push não concluiu. Verifique a autenticação GitHub no VS Code." }
Write-Host "Publicado: https://github.com/oWesleyAquino/luft-engenharia-redesign" -ForegroundColor Green

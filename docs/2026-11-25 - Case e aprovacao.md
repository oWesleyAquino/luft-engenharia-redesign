---
tipo: case-e-checklist
data: 2026-11-25
status: aguardando-aprovacao-individual
---
# LUFT Engenharia — case e preparação de publicação

## Contexto e contribuição
Engenharia explicada com precisão e contraste.

Diagrama relaciona valor bruto, percentual considerado e economia; barra deriva do cálculo; leitura dos resultados permanece ao lado dos parâmetros em desktop.

## Limites do case
Simulação simplificada, sem garantia de retorno. Fórmulas e ressalvas existentes preservadas.

Não atribuir métricas de conversão, cliente, depoimentos ou resultados comerciais sem fonte. Materiais anteriores e licenças do projeto permanecem referência; autorização de uso e divulgação requer revisão humana.

## Executar independentemente
Dentro deste projeto, após instalar dependências declaradas quando necessário e preparar o build:

```powershell
npm run build
npm run start -- --hostname 127.0.0.1 --port 4302
```

URL padrão: http://127.0.0.1:4302/ . Se a porta estiver ocupada pelo ambiente de aprovação, utilize outra porta pelo argumento Next.js ou pela variável `PORT` do servidor estático. Ctrl+C encerra somente este processo. Mellow: executar `npm run sync` antes do build se alterar os módulos de origem. Pets serve a cópia `dist/` após build.

## Aprovação e publicação independente
- [ ] Revisão visual desktop/mobile da versão exata.
- [ ] Conferir resultados e falhas da Fase 03 no painel; não inferir Safari a partir de WebKit.
- [ ] Conferir leitor de tela, dispositivos físicos, teclado virtual e safe areas.
- [ ] Confirmar assets, textos, contatos e identificação de demonstração.
- [ ] Aprovar esta aplicação individualmente, registrando data e revisão Git.
- [ ] Configurar projeto remoto/root directory próprio somente após autorização; não publicar o workspace inteiro.
- [ ] Validar preview protegido/autorizado, variáveis necessárias sem segredos versionados, rotas e rollback.
- [ ] Autorizar publicação separadamente. Nenhum deploy foi executado nesta rodada.

Build: `npm run build`. Destino: Next.js (SSR/rotas dinâmicas quando existentes).

## Evidências
[[Dev/Referências/2026-11-25 - Fase 03 QA final e aprovacao individual]] e painel http://127.0.0.1:4400/ . Capturas/vídeos das Fases 01 e 02 foram preservados; Fase 03 tem resultados novos por motor. Esse link Obsidian depende do cofre; em repositório isolado, este documento conserva comandos, limites e checklist.

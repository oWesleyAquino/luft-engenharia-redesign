---
tipo: relatorio-tecnico
projeto: LUFT
status: validado-localmente
data: 2026-11-21
natureza: implementacao-e-evidencias
---
# LUFT — Redesign da experiência solar

## Escopo e evidências

**Confirmado:** aplicação independente em `Dev/luft`, Next.js App Router, React 19, TypeScript, Tailwind 4 e Lucide. Repositório `https://github.com/oWesleyAquino/luft-engenharia-redesign.git`, inicialmente limpo na branch `main`, commit de origem `a754409`. Projeto Vercel `luft-engenharia-redesign`, mesma conta da configuração local. A consulta autenticada confirmou `ssoProtection.enabled: true` e `deploymentType: preview`; produção não foi alterada por esta implementação.

Fontes locais consultadas em 2026-11-21: `AGENTS.md` da raiz e do projeto, README, código existente, documentação instalada de Server/Client Components do Next, [[04 - Conhecimento/IA e Codex/Vibe-Coding-Toolkit-Adaptado/prompts/02-projeto-existente]], prompt de planejamento, modelo briefing, checklist de validação, [[04 - Conhecimento/Estudos/Branding/Golden Circle/03 - Golden Circle - branding e UX]], [[01 - Memória/Desenvolvimento Front-end]] e [[06 - Recursos/Diretrizes/UX - Leis e Principios para Produtos Digitais]]. Aplicada revisão de componentes da skill `vercel:react-best-practices`. Este registro é uma paráfrase das decisões e evidências da sessão, sem declarar pesquisa com usuários.

**Direção proposta:** WHY — facilitar a compreensão das soluções e das etapas antes do contato; HOW — composição técnica solar, hierarquia forte, processo sequencial e movimento progressivo; WHAT — interface responsiva com seis rotas e funcionalidades preservadas. Trata-se de direção para este protótipo, não de propósito oficialmente atribuído à empresa.

## Critérios de aceite aplicados

- Preservar marca, logos, azul profundo, verde-lima, fontes Manrope/Inter configuradas, rotas e dados existentes.
- Disponibilizar conteúdo sem JavaScript, sem WebGL e com movimento reduzido.
- Não provocar overflow horizontal em 360, 390, 768, 1024 e 1440 px.
- Preservar galeria/filtros, carrossel, simulador ilustrativo, formulário que prepara WhatsApp e contato existente, sem envio de mensagens durante testes.
- Build e lint sem erros, movimento ligado ao scroll verificado e evidências locais identificadas.
- Nenhuma publicação em produção; Preview depende da proteção e validação online.

## Implementação

1. Hero com título em composição de três linhas, painel solar abstrato feito em CSS e 24 células decorativas, perspectiva e órbitas. Não representa produto ou modelo comercial real.
2. Rotação/profundidade do painel ligada à rolagem por CSS `animation-timeline: view()`, com composição estática em navegadores sem suporte e no mobile. Sem GSAP, Three.js, WebGL ou novas bibliotecas de motion.
3. Categorias de serviços escalonadas em desktop, com leitura linear em mobile; cards mais técnicos e recortes fotográficos preservados.
4. Processo em lista ordenada de quatro etapas, introdução sticky em desktop, progressão discreta por scroll e layout contínuo no mobile. Sem travar a rolagem.
5. Revelação dos benefícios refatorada para manter conteúdo visível sem JavaScript; não há dependência de observadores por card para disponibilizar os textos.
6. Menu mobile fecha por Escape e seleção de destino; sem o efeito de atualização síncrona de estado por pathname.
7. Fotos, simulador, conteúdos de apoio e avisos de imagens ilustrativas/estudo independente mantidos. Nenhuma alegação de obra executada, resultado de investimento ou integração comercial adicionada.
8. Next e eslint-config-next atualizados de 16.4.3 para 16.4.6 após auditoria real apontar correção patch. Lockfile atualizado; React e fontes preservados.

## Verificações executadas

- `npm run build`: aprovado após a atualização para Next 16.4.6; seis rotas estáticas geradas. Antes da atualização, build apresentou alerta real de vulnerabilidade conhecida; a repetição prévia compilou, mas a correção patch foi aplicada em seguida.
- `npm run lint`: aprovado com **0 erros e 5 warnings preexistentes** de imports/variável não usados nas páginas Sobre/Soluções e componentes Projects/Simulator. Imports não usados nos componentes editados foram removidos.
- `npm audit --omit=dev --json`: **0 vulnerabilidades nas dependências de produção** após a correção, contra uma moderada em Next antes. Auditoria de instalação mencionou sete moderadas no conjunto que inclui ferramentas de desenvolvimento; não foram realizadas atualizações amplas dessas ferramentas. Evidências JSON antes/depois na pasta `qa-redesign`.
- Chrome headless local, build de produção, via CDP: **133 verificações aprovadas, nenhuma reprovada**. Seis rotas em cinco larguras, 30 combinações: resposta HTTP 200, um H1, ausência de overflow horizontal e imagens de marca carregadas.
- Interações: abrir menu mobile, fechar por Escape, navegar para Sobre e fechar menu, avançar carrossel, filtrar Rural, recalcular simulador, validação nativa do formulário vazio e manutenção dos avisos demonstrativos.
- Acessibilidade/fallback: benefícios visíveis com JavaScript desativado e com `prefers-reduced-motion`; painel sem animação na preferência reduzida. Scroll nativo alterou a matriz de transformação do painel no desktop. Navegação principal e semântica existentes preservadas.
- Nenhuma exceção JavaScript registrada. Uma carga de script foi interrompida durante o cenário de JavaScript desativado; consta no registro bruto e não é ocultada como ausência universal de falhas de rede.
- **15 capturas completas**: Home nas cinco larguras; outras cinco rotas em 390 e 1440. Inspeção visual direta executada nas capturas Home 390 e 1440. Não se declara inspeção visual humana de todas as capturas.
- `git diff --check`: sem erros de whitespace; Git apenas informa conversão normal LF/CRLF em alguns arquivos.

A primeira rodada de QA identificou que `overflow: hidden` no hero impedia a timeline de responder ao scroll da janela; corrigido para `overflow: clip` e rodada completa repetida com sucesso. Uma tentativa inicial do script também precisou aguardar o commit do React antes de clicar em um link do menu; isso foi corrigido no verificador.

## Evidências locais

- [[Dev/luft/qa-redesign/evidencias/home-390.png|Home celular completa]]
- [[Dev/luft/qa-redesign/evidencias/home-1440.png|Home desktop completa]]
- [[Dev/luft/qa-redesign/evidencias/sobre-390.png|Sobre celular]] · [[Dev/luft/qa-redesign/evidencias/sobre-1440.png|Sobre desktop]]
- [[Dev/luft/qa-redesign/evidencias/solucoes-390.png|Soluções celular]] · [[Dev/luft/qa-redesign/evidencias/solucoes-1440.png|Soluções desktop]]
- [[Dev/luft/qa-redesign/evidencias/projetos-390.png|Projetos celular]] · [[Dev/luft/qa-redesign/evidencias/projetos-1440.png|Projetos desktop]]
- [[Dev/luft/qa-redesign/evidencias/simulador-390.png|Simulador celular]] · [[Dev/luft/qa-redesign/evidencias/simulador-1440.png|Simulador desktop]]
- [[Dev/luft/qa-redesign/evidencias/contato-390.png|Contato celular]] · [[Dev/luft/qa-redesign/evidencias/contato-1440.png|Contato desktop]]
- Resultados estruturados: `qa-redesign/evidencias/resultados.json`; verificador reproduzível `qa-redesign/validar.cjs`. Executar com o servidor de produção local na porta 3214.
- Capturas e perfis Chrome mantidos apenas no workspace e ignorados pelo Git; nenhum perfil de browser/cache npm deve ser enviado ao remoto.

## Limites e pendências

- Métricas de `PerformanceObserver` coletadas em ambiente local e janela curta de observação, sem throttling. Não são Lighthouse nem Core Web Vitals de campo; INP e fluidez em iPhone físico não medidos. Os valores brutos estão no JSON; não são promessa de desempenho online.
- Comparação funcional feita contra as rotas e código de origem; não foi gerada captura anterior ao redesign. Não se afirma teste de regressão pixel a pixel.
- Imagens externas ilustrativas mantêm as pendências de licença e disponibilidade descritas no README. Nenhuma mídia da referência Café Pilão foi incorporada.
- Preview HTTPS e validação online serão registrados pela coordenação após integração da branch; este relatório não trata a URL de produção existente como Preview.
- Auditoria completa WCAG, integrações externas com envio real, Safari/iPhone físico e testes de usuário continuam pendentes. Nenhuma mensagem foi enviada.
- Durante npm install houve warning de limpeza EPERM em binário SWC antigo bloqueado no Windows; instalação concluiu, build novo passou e a pasta residual ignorada não foi excluída manualmente.

## Arquivos e integração

Principais arquivos: `src/components/HomeSections.tsx`, `src/components/Site.tsx`, `src/app/globals.css`, `package.json`, `package-lock.json`, `.gitignore`, `qa-redesign/validar.cjs` e evidências JSON. A branch é `redesign/experiencia-solar-2026-11-21`.

Reversão: comparar com commit de origem `a754409`; preservar alterações posteriores e reverter o commit específico em uma branch própria. Não utilizar reset destrutivo nem force push.

Promoção futura: revisar Preview autenticado no iPhone, confirmar direitos das imagens/conteúdo e aceite visual, revisar pendências de ferramentas de desenvolvimento e somente então solicitar autorização específica para promoção. Nenhum comando de produção faz parte desta entrega.

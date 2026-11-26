# Fontes locais — 2026-11-25

Mesmas famílias utilizadas anteriormente, sem dependência de rede durante o build.

- Manrope Latin 400/500/600/700/800: copiados da instalação existente `Dev/atrio/node_modules/@fontsource/manrope/files/` (package 5.3.0). Licença original preservada em `LICENSE-Manrope.txt`.
- Inter Latin variável 100–900: copiada da instalação existente `Dev/fluxora/node_modules/@fontsource-variable/inter/files/` (package 5.3.0). Licença original preservada em `LICENSE-Inter.txt`.
- Importação local pelo Codex em 25/11/2026; sem download, alteração de desenho das fontes ou instalação de dependências.
- O subconjunto Latin contém os caracteres portugueses usados nas páginas. Outros idiomas/subconjuntos não foram adicionados.

Uso via next/font/local em src/app/layout.tsx. Manrope 400 não recebe interpolação falsa de peso variável; cada peso listado tem arquivo próprio. Inter mantém arquivo variável. Revalidar mídia/fontes em qualquer publicação futura.

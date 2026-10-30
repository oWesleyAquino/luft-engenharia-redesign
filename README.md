# LUFT Engenharia — Redesign UX/UI & Front-end

**Estudo independente de redesign de site institucional** para a LUFT Engenharia e Energia Solar, com foco em arquitetura da informação, comunicação clara sobre energia fotovoltaica, identidade visual contemporânea e interações responsivas.

**[Acessar demonstração funcional](https://luft-engenharia-redesign.vercel.app/)** · [Site original da LUFT](https://luftengenharia.com.br/)

> **Projeto conceitual de portfólio.** Esta demonstração não é o site oficial da LUFT Engenharia e não implica contratação, aprovação, parceria ou endosso da empresa.

## Contexto e objetivo

A proposta reorganiza a experiência de um site de engenharia elétrica e soluções fotovoltaicas, tornando mais claras as aplicações e os benefícios da energia solar. O design preserva o logotipo original e experimenta uma nova linguagem digital em azul profundo, verde-lima, superfícies claras e fotografia editorial.

O objetivo é demonstrar um processo de **análise → UX/UI → arquitetura → desenvolvimento Front-end → validação → publicação**, sem afirmar resultados comerciais ou testes com usuários não realizados.

## Decisões de UX/UI

| Área | Abordagem |
| --- | --- |
| Comunicação | Benefícios e aplicações da energia solar, evitando promessas genéricas |
| Identidade | Logo preservado, paleta reinterpretada e tipografia contemporânea |
| Hero | Fotografia imersiva, CTA claro e navbar flutuante |
| Arquitetura | Seis páginas com navegação consistente |
| Projetos | Galeria demonstrativa com filtros e interação |
| Interações | Carrossel animado, estados de hover/foco, accordion e animações suaves |
| Acessibilidade | Semântica, foco visível, navegação por teclado e preferência por movimento reduzido |
| Conversão | Contato e WhatsApp fixo; simulador didático |

## Funcionalidades

- Home com Hero imersivo, seções de benefícios e soluções.
- Páginas Sobre, Soluções, Projetos, Simulador e Contato.
- Galeria de aplicações com filtros e carrossel com transições.
- Simulador ilustrativo de geração/economia e retorno, com premissas simplificadas.
- FAQ expansível, formulário demonstrativo e contato por WhatsApp.
- Layout responsivo para desktop e mobile.

## Tecnologias

- Next.js 16 (App Router)
- React 19, TypeScript
- Tailwind CSS 4 e CSS personalizado
- Lucide React
- Git/GitHub e Vercel

## Rotas

| Rota | Função |
| --- | --- |
| `/` | Home, benefícios, soluções e destaques |
| `/sobre` | Apresentação institucional |
| `/solucoes` | Soluções solares e engenharia elétrica |
| `/projetos` | Galeria e aplicações demonstrativas |
| `/simulador` | Estimativa didática |
| `/contato` | Informações e ações de contato |

## Execução local

Pré-requisito: Node.js compatível com Next.js 16.

```bash
git clone https://github.com/oWesleyAquino/luft-engenharia-redesign.git
cd luft-engenharia-redesign
npm install
npm run dev
```

Abra `http://localhost:3000`. Para validar o build de produção:

```bash
npm run build
```

## Limitações e transparência

- Este é um **protótipo funcional**, não um sistema comercial operado pela empresa.
- Os dados institucionais partem de conteúdo público e devem ser confirmados com a LUFT antes de uso oficial.
- As imagens externas de apoio são ilustrativas; não representam necessariamente instalações da LUFT. Direitos e disponibilidade precisam de validação.
- A galeria inclui aplicações demonstrativas, não um inventário comprovado de obras.
- O simulador usa premissas simplificadas e não constitui orçamento, previsão garantida de economia ou avaliação financeira definitiva.
- O formulário prepara contato via WhatsApp; não armazena informações em um backend.
- Ainda não há relatório publicado de Lighthouse, testes automatizados ou medições de conversão. Não se presumem esses resultados.

## Evoluções possíveis

- Substituir imagens externas por fotografias licenciadas e otimizadas.
- Integrar casos reais e dados de projetos autorizados.
- Realizar auditorias automatizadas e testes manuais de acessibilidade/performance.
- Adicionar capturas reais de desktop e mobile ao repositório.
- Integrar CRM/formulário em uma eventual versão de produção.

## Créditos

**UX/UI, conceito e desenvolvimento Front-end:** Wesley Aquino — [perfil GitHub](https://github.com/oWesleyAquino).

LUFT Engenharia, nome, logotipo e eventuais materiais institucionais pertencem aos respectivos titulares. Trata-se de estudo independente, sem vínculo comercial declarado.

---

**[Visualizar o redesign online](https://luft-engenharia-redesign.vercel.app/)**

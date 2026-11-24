# Eidos — Pixel Infinite

**Eidos** é a divisão de design e desenvolvimento web da **Pixel Infinite**, dedicada a sites autorais, experiências digitais e interfaces criativas.

**Damos forma ao imaginado.** O nome vem do grego εἶδος (forma, aspecto, ideia).

- **Site oficial:** https://eidos.pixelinfinite.com.br
- **Hospedagem:** Cloudflare Workers, Worker `eidos`
- **Branch de produção:** `main`
- **Repositório atual:** `angelpixel41/pageflow` — renomeação administrativa para `angelpixel41/eidos` ainda pendente no GitHub.
- **Endereço antigo:** `pageflow.pixelinfinite.com.br` — desativado; Worker, DNS e domínio anterior removidos em 22/11/2026.

## Site

O site é uma experiência institucional própria do Eidos: hero editorial com composição geométrica animada, quatro especialidades, conceitos demonstrativos de projetos, método de criação e contato comercial.

Bocca Odontologia e Criative Ambientes são **conceitos demonstrativos** (não contratos). **NeedTech** é produto publicado no portfólio do Eidos, com site e acompanhamento de OS integrado ao Bling: https://needtechdf.com.br.

## Desenvolvimento

Worker ES modules em `src/index.js`, sem framework de interface. Identidade da Pixel Infinite em azul, ciano, índigo e violeta.

```bash
npm install
npm run dev
npm run deploy
```

Arquivos de suporte:
- [Identidade visual](docs/branding.md)
- [Roadmap](docs/roadmap.md)
- [Migração](docs/migracao.md)

## Publicação e segurança

A infraestrutura de produção foi publicada via API da Cloudflare e associada a `eidos.pixelinfinite.com.br`. Os metadados canônicos, `robots.txt`, `sitemap.xml`, `favicon.svg` e `/health` estão no Worker.

## Contato

angel@pixelinfinite.com.br

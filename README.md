# Eidos — Pixel Infinite

**Eidos** é a divisão de desenvolvimento web da **Pixel Infinite**, especializada em sites profissionais, identidade digital e experiências web que unem design, engenharia e resultados.

A palavra grega **εἶδος (eîdos)** remete a forma, aparência e representação. Nossa proposta: **dar forma ao imaginado**.

- **Novo endereço planejado:** https://eidos.pixelinfinite.com.br (depende de configuração da Cloudflare).
- **Endereço anterior:** https://pageflow.pixelinfinite.com.br (legado, manter até concluir redirecionamento).
- **Domínio institucional:** https://pixelinfinite.com.br
- **Branch de produção:** `main`.
- **Hospedagem:** Cloudflare Workers.
- **Nome do repositório previsto:** `angelpixel41/eidos` (renomeação administrativa do GitHub ainda pendente).

## Visão

Site institucional e portfólio comercial do Eidos. Os projetos de cada cliente permanecem em repositórios independentes, sem reescrita de histórico.

## Identidade visual

A assinatura **Eidos — uma divisão Pixel Infinite** preserva parentesco com a Pixel Infinite, usando azul, ciano, índigo e violeta. Veja [diretrizes da marca](docs/branding.md).

## Desenvolvimento

Projeto em JavaScript sem framework, com página institucional provisória e Worker Cloudflare.

```sh
npm install
npm run dev
```

## Publicação

```sh
npm run deploy
```

**Atenção:** o `wrangler.jsonc` agora aponta ao Worker `eidos`. Isso cria/publica um Worker distinto do legado quando houver deploy; configurar rota, DNS e redirecionamento na Cloudflare antes de divulgar o novo subdomínio. Não remover o Worker antigo antes de validar o novo.

Veja [plano de migração](docs/migracao.md) para concluir a transição de infraestrutura e repositórios.

## Contato

angel@pixelinfinite.com.br

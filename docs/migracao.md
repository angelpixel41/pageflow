# Migração da divisão PageFlow para Eidos

## Estado da migração no GitHub

- Conteúdo de marca e código institucional renomeados para **Eidos** na branch `main`.
- `package.json` e `wrangler.jsonc` usam o slug `eidos`.
- Repositório institucional a renomear em **Settings → General → Repository name**: `angelpixel41/pageflow` → `angelpixel41/eidos`.
- Renomear os cinco repositórios de demonstrações de clientes mantendo suas respectivas branches e históricos.
- **Não criar repositórios novos** se o GitHub permitir renomear: isso preserva commits, stars, issues e redirecionamentos de URLs do GitHub.

## Infraestrutura pendente (fora do escopo desta alteração)

1. Provisionar o hostname `eidos.pixelinfinite.com.br` na Cloudflare.
2. Publicar o novo Worker `eidos` e confirmar resposta real em `/health` e `/`.
3. Confirmar `canonical`, `og:url`, `robots.txt` e `sitemap.xml` apontando para o endereço final correto.
4. Configurar **redirecionamento 301** do hostname anterior `pageflow.pixelinfinite.com.br` para o novo, incluindo caminhos de conteúdo.
5. Atualizar integrações e referências do GitHub/Cloudflare conforme a renomeação real; verificar eventuais webhooks/CI e automações que dependam de nomes fixos.
6. Atualizar divulgação, perfis sociais e propostas comerciais após validação.
7. Só descontinuar o Worker anterior depois de comprovar o redirecionamento.

## Critério de aceite

Não tratar como migração completa antes de validar novo DNS + Worker, HTTP 200 no novo endereço e redirecionamento 301 no antigo. Não modificar o domínio raiz `pixelinfinite.com.br` para essa migração.

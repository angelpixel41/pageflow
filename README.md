# Eidos — Pixel Infinite

**Eidos** é o estúdio de web design e experiências digitais da Pixel Infinite. **Damos forma ao imaginado.**

- Site institucional: https://eidos.pixelinfinite.com.br/
- Catálogo interno de conceitos (não oficial): https://eidos.pixelinfinite.com.br/preview
- Repositório canônico atual: https://github.com/angelpixel41/pageflow (renomeação administrativa para `Eidos` pendente)
- Branch principal: `main`
- Cloudflare Worker: `eidos` (um Worker roteia 18 conceitos e o site institucional)
- Deploy: Cloudflare Workers, sem GitHub Actions

## Inventário de demonstrações

Os conceitos são **propostas de design**, não representam contratação, autorização nem conteúdo verificado do estabelecimento. As rotas não recebem formulários, não coletam dados, não incluem depoimentos fictícios e usam `noindex`. Antes de utilizar comercialmente, confirmar se o negócio existe, se não tem site e se a abordagem é apropriada.

| Projeto | Subdomínio / preview | Situação |
| --- | --- | --- |
| Bocca Odontologia | https://bocca.pixelinfinite.com.br/ (Worker original) · https://eidos.pixelinfinite.com.br/preview/bocca | Abordado, aguardando |
| Criative Ambientes | https://criative.pixelinfinite.com.br/ · site anterior https://criative-ambientes.pixelinfinite.com.br/ | Abordado, sem resposta |
| ImplaMaster | https://implamaster.pixelinfinite.com.br/ | Abordagem não confirmada |
| John Auto Center | https://john-auto.pixelinfinite.com.br/ | Abordagem não confirmada |
| Divas | https://divas.pixelinfinite.com.br/ | Abordagem não confirmada |
| PH Ar Condicionado | https://ph-ar.pixelinfinite.com.br/ | Novo prospect |
| Marmoraria Montes Claros | https://marmoraria-montes-claros.pixelinfinite.com.br/ | Novo prospect |
| JL Vidros | https://jl-vidros.pixelinfinite.com.br/ | Novo prospect |
| FASTT CLEAN | https://fastt-clean.pixelinfinite.com.br/ | Novo prospect |
| Espaço Brenna Vilas Bôas | https://brenna-vilas-boas.pixelinfinite.com.br/ | Novo prospect |
| Jenni Studio | https://jenni-studio.pixelinfinite.com.br/ | Prospect pendente de validação |
| Essência da Beleza | https://essencia-beleza.pixelinfinite.com.br/ | Prospect pendente de validação |
| Jhulia Alves Rech | https://jhulia-alves.pixelinfinite.com.br/ | Prospect pendente de validação |
| Gabriela Cristina Candido | https://gabriela-candido.pixelinfinite.com.br/ | Prospect pendente de validação |
| Laicia da Costa Santos | https://laicia-costa.pixelinfinite.com.br/ | Prospect pendente de validação |
| Sara de Barros | https://sara-barros.pixelinfinite.com.br/ | Prospect pendente de validação |
| Henrique Cesar Gomes Lopes | https://henrique-lopes.pixelinfinite.com.br/ | Prospect pendente de validação |
| Fabyanne Braz Santos | https://fabyanne-braz.pixelinfinite.com.br/ | Prospect pendente de validação |

**NeedTech** é um cliente pagante com projeto independente no repositório `angelpixel41/NeedTech`; está apenas vinculado ao portfólio por https://needtechdf.com.br/. **Martins Móveis Planejados foi excluída** da prospecção (já possui site próprio).

## Código

- `src/index.js`: site institucional preexistente, preservado.
- `src/demos.js`: metadados e layouts de todas as demonstrações, por nicho.
- `src/router.js`: roteamento por hostname e `/preview/<slug>`.
- `legacy/`: cópias dos cinco READMEs dos repositórios satélites antes da consolidação.
- `AGENTS.md`: regras para Codex e colaboradores.
- `docs/monorepo.md`: guia arquitetural, migração e segurança.
- `tests/demos.test.mjs`: testes de rotas, segurança e renderização.

```sh
npm install
npm test
npm run dev
npm run deploy
```

Atenção: `npm run deploy` atualiza o Worker de produção `eidos`. Antes de publicar, executar os testes e conferir o site institucional. Para correções de DNS ou rollback, consultar a Cloudflare. As associações de Custom Domains foram configuradas diretamente na Cloudflare em 25/11/2026.

## Renomeação final do GitHub

Os conectores da sessão não têm permissão para renomear nem excluir repositórios. O repositório de origem `angelpixel41/pageflow` é **a base canônica** e pode ser renomeado para `Eidos` nas configurações sem perder histórico de commits. Depois de confirmar a renomeação e conteúdo, arquivar/excluir os cinco repositórios satélites. Não excluir `NeedTech`.

Veja [instruções para renomear e limpar os repositórios](docs/github-migration.md).

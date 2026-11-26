# AGENTS.md — Eidos (Pixel Infinite)

- Este é o monorepo canônico da divisão Eidos, branch padrão `main`. Não usar GitHub Actions.
- NeedTech é cliente pagante e permanece em repositório independente; incluir somente link no portfólio, nunca copiar código privado do produto.
- Todas as páginas de prospects são conceitos não oficiais. Exibir aviso visível em todas as páginas, bloquear indexação e nunca inventar avaliação, portfólio, foto real, parceria, endereço, certificação ou preço de um prospect.
- Adicionar novos clientes ao catálogo `src/demos.js`; indicar status comercial e verificação das fontes. A publicação pública de domínios depende de validação de identidade e revisão humana.
- `src/index.js` é o site institucional existente, preservado; `src/router.js` faz roteamento por hostname e `/preview/:slug`.
- Qualquer mudança em roteamento deve rodar `npm test` antes do deploy na Cloudflare; testar pelo menos o portal Eidos, 1 demo por nicho, acessibilidade e mobile.
- Não declarar uma demo como projeto contratado. NeedTech é a exceção que pode ser apresentada como projeto real, com site original externo.
- Não tocar nas zonas DNS ou Workers de produção não relacionados sem validação de impactos e rollback.
- Evitar deploy automático de todos os sites quando somente um prospect mudar; usar Workers Builds/controles da Cloudflare, sem GitHub Actions.

# Eidos — monorepo de sites e demonstrações

## Inventário (18 conceitos)

- **Legados:** Bocca (aguardando retorno do técnico), Criative (sem resposta), ImplaMaster, John Auto Center e Divas (abordagem não confirmada).
- **Novos leads:** PH Ar, Marmoraria Montes Claros, JL Vidros, FASTT CLEAN, Espaço Brenna Vilas Bôas, Jenni Studio de Beleza, Essência da Beleza Studio, Jhulia Alves Rech, Gabriela Cristina Candido, Laicia da Costa Santos, Sara de Barros, Henrique Cesar Gomes Lopes e Fabyanne Braz Santos.
- **Excluídos:** Martins Móveis (já tem site), Imperium e Vitorino (recusaram); **NeedTech** é projeto pago, mantido fora.

## Código e rotas

- Site institucional pré-existente: `src/index.js` (NÃO remover).
- Protótipos e identidade por nicho: `src/demos.js`.
- Worker multiprojeto: `src/router.js` — `/preview/<slug>`, ou `https://<slug>.pixelinfinite.com.br/` quando DNS + Custom Domain estiverem associados ao mesmo Worker.
- Todos os protótipos exibem **demonstração não oficial**, não coletam nem enviam informações e têm `noindex` e `robots.txt` que proíbe rastreamento.
- Os arquivos de origem nos repositórios satélite continham só README; mantidos em `legacy/README-*.md` para evitar perda de histórico documental.

## Comandos

```bash
npm install
npm test
npm run dev
npm run deploy
```

Atenção: `npm run deploy` publica o Worker de produção `eidos`. Valide em ambiente de laboratório antes. Não há GitHub Actions.

## DNS / Cloudflare

O código roteia os domínios, mas **código não é DNS**. Cada nome deverá ser criado/associado em Cloudflare Workers Custom Domains. Não modificar domínios existentes como `bocca.pixelinfinite.com.br` e `criative.pixelinfinite.com.br` sem inspeção e plano de rollback. Publicar domínios novos somente após validar prospect (razão social, existência e status comercial).

## Migração final GitHub

O conector atual não oferece criação/renomeação/exclusão de repositórios. Usar `angelpixel41/pageflow` como base canônica para manter todo histórico; em GitHub → Settings → General → Repository name → digitar `Eidos`. Depois de confirmar migração e revisão do histórico, os cinco repositórios satélite (que continham somente README) podem ser deletados manualmente em Settings → Danger Zone; a exclusão não é feita por este código.

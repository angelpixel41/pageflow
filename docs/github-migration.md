# Renomear o repositório Eidos e limpar os satélites

O GitHub conectado ao ChatGPT nesta sessão permite commits, mas não renomear/criar/excluir repositórios. Por isso, **não afirmar que o nome já foi alterado**.

## Pelo celular

1. Abrir https://github.com/angelpixel41/pageflow/settings
2. Em **General → Repository name**, digitar **Eidos** e confirmar.
3. Conferir https://github.com/angelpixel41/Eidos e validar arquivos `src/index.js`, `src/demos.js`, `src/router.js`, `legacy/`, `AGENTS.md` e `docs/`.
4. Conferir no navegador https://eidos.pixelinfinite.com.br/ e https://ph-ar.pixelinfinite.com.br/.
5. Depois, se desejar apagar os cinco repos satélites, abrir cada repo em **Settings → Danger Zone → Delete this repository**:

- https://github.com/angelpixel41/pageflow-bocca-odontologia/settings
- https://github.com/angelpixel41/pageflow-criative-ambientes/settings
- https://github.com/angelpixel41/pageflow-implamaster/settings
- https://github.com/angelpixel41/pageflow-john-auto-center/settings
- https://github.com/angelpixel41/pageflow-divas-estetica/settings

Cada um tinha apenas README, agora copiado para `legacy/`. A exclusão de repositórios é irreversível no fluxo normal e apaga histórico próprio; arquivar é opção mais conservadora.

## Pelo GitHub CLI

```sh
gh repo rename Eidos --repo angelpixel41/pageflow --yes
# Verifique se https://github.com/angelpixel41/Eidos está correto antes de executar:
gh repo delete angelpixel41/pageflow-bocca-odontologia --yes
gh repo delete angelpixel41/pageflow-criative-ambientes --yes
gh repo delete angelpixel41/pageflow-implamaster --yes
gh repo delete angelpixel41/pageflow-john-auto-center --yes
gh repo delete angelpixel41/pageflow-divas-estetica --yes
```

O CLI exige autenticação e permissão para exclusão do repositório. Não apagar `angelpixel41/NeedTech` e não apagar `angelpixel41/pageflow`: **renomear** a base, não deletá-la.

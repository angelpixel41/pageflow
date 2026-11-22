# Histórico de migração — PageFlow → Eidos

## Concluído em 22/11/2026

- Conteúdo, interface e documentação institucional atualizados para **Eidos**.
- Novo Worker Cloudflare `eidos` publicado com código da branch `main`.
- Domínio customizado `eidos.pixelinfinite.com.br` anexado ao Worker, DNS AAAA gerado pelo Cloudflare e certificado TLS configurado.
- Site confirmado via Cloudflare Browser Rendering.
- Domínio customizado antigo `pageflow.pixelinfinite.com.br` desconectado, DNS antigo removido automaticamente pela Cloudflare e Worker antigo `pageflow` excluído a pedido do proprietário.
- **Não existe redirecionamento 301** do endereço antigo; foi escolhida remoção completa a pedido.

## Pendente: repositórios GitHub

A integração GitHub disponível não possui edição das configurações administrativas do repositório. Renomear em **Settings → General → Repository name**:
- `angelpixel41/pageflow` → `angelpixel41/eidos`
- `angelpixel41/pageflow-bocca-odontologia` → `angelpixel41/eidos-bocca-odontologia`
- `angelpixel41/pageflow-criative-ambientes` → `angelpixel41/eidos-criative-ambientes`
- `angelpixel41/pageflow-implamaster` → `angelpixel41/eidos-implamaster`
- `angelpixel41/pageflow-john-auto-center` → `angelpixel41/eidos-john-auto-center`
- `angelpixel41/pageflow-divas-estetica` → `angelpixel41/eidos-divas-estetica`

Manter o histórico existente, sem criar novos repositórios. Revisar integrações GitHub/Cloudflare após a renomeação.

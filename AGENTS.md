# Astro 7

Este projeto usa Astro 7.x, mais novo que boa parte do material de treino. Antes de usar uma API, confira os tipos em `node_modules/astro/` e respeite os avisos de depreciação. Exemplo: `z` vem de `astro/zod`, não de `astro:content`.

- Conteúdo: Content Layer (`src/content.config.ts`, loader `glob`, `render(entry)`).
- Estilo: CSS puro com tokens em `src/styles/tokens.css`. Não use cores ou tamanhos soltos, use os tokens semânticos (`--c-*`, `--fs-*`, `--sp-*`).

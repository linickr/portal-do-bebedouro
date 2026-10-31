# Portal do Bebedouro

Site estático em [Astro](https://astro.build), com design system "Jornal da Água".

## Rodar localmente

```bash
npm install
npm run dev       # http://localhost:4321 (também acessível na rede local)
```

Para conferir a versão final antes de subir:

```bash
npm run build     # gera dist/
npm run preview   # serve dist/ em http://localhost:4321
```

## Estrutura

- `content/posts/*.mdx`: artigos (frontmatter validado em `src/content.config.ts`)
- `public/images/`: capas e banners
- `src/styles/tokens.css`: tokens do design system (cor, tipo, espaço, modo escuro)
- `src/components/`: componentes (`CardPost`, `Selo`, `SecaoCabecalho`, `Lateral`...)
- `src/pages/`: rotas (`/`, `/[categoria]`, `/artigo/[slug]`)
- `/design-system`: página interna com tokens e componentes (fora do sitemap e com noindex)

## Publicar

A Vercel publica a branch `master`. Trabalhe em outra branch e só faça merge na `master` quando estiver pronto.

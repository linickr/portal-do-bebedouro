import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './content/posts' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    categoria: z.enum(['mercado', 'legislacao', 'saude', 'guias', 'reviews', 'eventos']),
    badge: z.string().optional(),
    badgeVariant: z.string().optional(),
    date: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string(),
    readTime: z.number(),
    featured: z.boolean().default(false),
    ogImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
})

export const collections = { posts }

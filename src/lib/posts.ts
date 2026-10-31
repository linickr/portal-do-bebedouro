import { getCollection, type CollectionEntry } from 'astro:content'
import type { Categoria } from './site'

export type Post = CollectionEntry<'posts'>

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts')
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
}

export function byCategoria(posts: Post[], categoria: Categoria) {
  return posts.filter((p) => p.data.categoria === categoria)
}

export function featuredOf(posts: Post[]) {
  return posts.find((p) => p.data.featured) ?? posts[0]
}

export const url = (post: Post) => `/artigo/${post.id}`

const fmtLongo = new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
const fmtCurto = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short', timeZone: 'UTC' })

export const dataLonga = (d: Date) => fmtLongo.format(d)
export const dataCurta = (d: Date) => fmtCurto.format(d).replace('.', '')

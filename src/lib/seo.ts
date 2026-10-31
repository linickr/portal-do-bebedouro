import { SITE } from './site'
import type { Post } from './posts'

export function articleSchema(post: Post) {
  const { data } = post
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: data.title,
    description: data.excerpt,
    datePublished: data.date.toISOString(),
    dateModified: (data.updatedAt ?? data.date).toISOString(),
    author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: { '@type': 'ImageObject', url: `${SITE.url}/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.url}/artigo/${post.id}` },
    image: data.ogImage ? `${SITE.url}${data.ogImage}` : `${SITE.url}/og-default.png`,
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
  }
}

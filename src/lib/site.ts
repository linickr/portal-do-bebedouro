export const SITE = {
  name: 'Portal do Bebedouro',
  url: 'https://portalbebedouro.com.br',
  description:
    'O portal de referência do setor de bebedouros no Brasil. Notícias, normas ABNT, saúde da água e mercado.',
}

export type Categoria = 'mercado' | 'legislacao' | 'saude' | 'guias' | 'reviews' | 'eventos'

export const CATEGORIAS: Record<Categoria, { label: string; curto: string; descricao: string }> = {
  mercado: { label: 'Mercado', curto: 'Mercado', descricao: 'Números, empresas e tendências do setor de bebedouros e purificadores.' },
  legislacao: { label: 'Legislação', curto: 'Legislação', descricao: 'Normas ABNT, certificações INMETRO e regras da ANVISA, explicadas.' },
  saude: { label: 'Saúde da Água', curto: 'Saúde', descricao: 'Qualidade da água, hidratação e o que a ciência diz.' },
  guias: { label: 'Guias de Compra', curto: 'Guias', descricao: 'Como escolher, dimensionar e manter o equipamento certo.' },
  reviews: { label: 'Reviews', curto: 'Reviews', descricao: 'Testes de campo de bebedouros e purificadores.' },
  eventos: { label: 'Eventos', curto: 'Eventos', descricao: 'Feiras, congressos e encontros do setor.' },
}

export const NAV = (Object.keys(CATEGORIAS) as Categoria[]).map((slug) => ({
  slug,
  href: `/${slug}`,
  label: CATEGORIAS[slug].curto,
}))

export const PAUTA = [
  'NBR 13713 atualizada entra em vigor em julho de 2026',
  'Mercado de bebedouros cresce 18% no primeiro trimestre',
  'INMETRO lança programa de certificação para purificadores',
  'ANVISA publica nova resolução sobre padrões de potabilidade',
  'Congresso Nacional de Bebedouros acontece em outubro, em Brasília',
]

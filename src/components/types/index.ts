export interface ArticleResponse {
  count: number
  next: string | null
  previous: string | null
  results: Article[]
}

export interface Article {
  id: number
  title: string
  authors: Author[]
  url: string
  image_url: string
  news_site: string
  summary: string
  published_at: string
  updated_at: string
  featured: boolean
  launches: Launch[]
  events: Event[]
}

export interface Author {
  name: string
  socials: Socials | null
}

export interface Socials {
  x?: string
  youtube?: string
  instagram?: string
  linkedin?: string
  mastodon?: string
  bluesky?: string
}

export interface Launch {
  launch_id: string
  provider: string
}

export interface Event {
  event_id: number
  provider: string
}

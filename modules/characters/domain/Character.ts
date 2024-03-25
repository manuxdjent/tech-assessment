import { Thumbnail } from '@/common/models/Common'

export interface ComicDate {
  type: string
  date: string
}
export interface Comic {
  id: string
  title: string
  dates: ComicDate[]
  thumbnail: Thumbnail
}

export interface Character {
    id: string
    name: string
    description: string
    modified: string
    resourceURI: string
    thumbnail: Thumbnail
    comicList: Comic
  }
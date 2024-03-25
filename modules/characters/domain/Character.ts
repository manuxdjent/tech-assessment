import { Thumbnail } from '@/common/models/Common'

export interface Comic {
  title: string
  onSaleDate: Date
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
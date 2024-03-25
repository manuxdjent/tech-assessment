import { Thumbnail } from '@/common/models/Common'

export interface ComicDate {
  type: string
  date: string
}

export interface ComicCharacterItem {
  resourceURI: string
  name: string
}

export interface ComicCharacter {
  available: number
  collectionURI: string
  items: ComicCharacterItem[]
}
export interface Comic {
  id: string
  title: string
  dates: ComicDate[]
  thumbnail: Thumbnail
  characters: ComicCharacter[]
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
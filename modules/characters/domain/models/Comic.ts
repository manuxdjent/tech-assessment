import { Thumbnail } from "./Common"

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
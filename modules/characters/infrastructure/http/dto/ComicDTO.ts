export interface Thumbnail {
    path: string
    extension: string
  }
  
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

export interface ComicDataResponse {
    offset: string
    limit: string
    total: string
    count: string
    results: Comic[]
}
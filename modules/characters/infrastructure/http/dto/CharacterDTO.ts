import { Comic, Thumbnail } from "./ComicDTO"

export interface Character {
    id: string
    name: string
    description: string
    modified: string
    resourceURI: string
    thumbnail: Thumbnail
    comicList: Comic
  }

export interface CharacterDataResponse {
    offset: string
    limit: string
    total: string
    count: string
    results: Character[]
}
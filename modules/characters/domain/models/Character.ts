import { Thumbnail } from "./Common"

export interface Character {
    id: string
    name: string
    description: string
    resourceURI: string
    thumbnail: Thumbnail
  }
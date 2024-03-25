import { Character, Comic } from './Character'

export interface CharacterDataResponse {
    offset: string
    limit: string
    total: string
    count: string
    results: Character[]
}

export interface ComicDataResponse {
    offset: string
    limit: string
    total: string
    count: string
    results: Comic[]
}
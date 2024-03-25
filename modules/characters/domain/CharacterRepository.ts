import { CharacterDataResponse, ComicDataResponse } from './CharacterDataResponse'

export interface GetAllCharacterParams {
    name?: string
    limit?: number
}

export interface GetCharacterByIdParams {
    characterId: string
}

export interface GetAllComicsByCharacterIdParams {
    characterId: string
}

export interface CharacterRepository {
    get: (params: GetCharacterByIdParams) => Promise<CharacterDataResponse>
    getAll: (params: GetAllCharacterParams) => Promise<CharacterDataResponse>
    getAllComicsByCharacterId: (params: GetAllComicsByCharacterIdParams) => Promise<ComicDataResponse>
}
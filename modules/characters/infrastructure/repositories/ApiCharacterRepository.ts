import { getBaseParams } from '@/utils/ApiUtils'
import { CharacterRepository, GetAllCharacterParams, GetAllComicsByCharacterIdParams, GetCharacterByIdParams } from '../../domain/repositories/CharacterRepository'
import { CharacterDataResponse } from '../http/dto/CharacterDTO'
import ApiClient from '@/modules/characters/infrastructure/instances/ApiClient'
import { ComicDataResponse } from '../http/dto/ComicDTO'
import { Character } from '../../domain/models/Character'
import { Comic } from '../../domain/models/Comic'
import { DataWrapper } from '../http/dto/CommonDTO'
import characterMapper from '../mappers/characterMapper'
import comicMapper from '../mappers/comicMapper'

export function apiCharacterRepository(): CharacterRepository {
	const apiClient = new ApiClient(process.env.NEXT_PUBLIC_BASE_URL, getBaseParams())

	async function get(params: GetCharacterByIdParams): Promise<Character> {
		const response = await apiClient.get<GetCharacterByIdParams, DataWrapper<CharacterDataResponse>>(`/characters/${params.characterId}`)
		return characterMapper(response.data)[0]
	}

	async function getAll(params?: GetAllCharacterParams): Promise<Character[]> {
		const response = await apiClient.get<GetAllCharacterParams, DataWrapper<CharacterDataResponse>>('/characters', params)
		return characterMapper(response.data)
	}

	async function getAllComicsByCharacterId(params: GetAllComicsByCharacterIdParams): Promise<Comic[]> {
		const response = await apiClient.get<GetAllComicsByCharacterIdParams, DataWrapper<ComicDataResponse>>(`/characters/${params.characterId}/comics`)
		return comicMapper(response.data)
	}

	return {
		get,
		getAll,
		getAllComicsByCharacterId
	}
}
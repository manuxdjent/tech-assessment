import { getBaseParams } from '@/utils/ApiUtils'
import { CharacterRepository, GetAllCharacterParams, GetAllComicsByCharacterIdParams, GetCharacterByIdParams } from '../domain/CharacterRepository'
import { CharacterDataResponse, ComicDataResponse } from '../domain/CharacterDataResponse'
import ApiClient from '@/infrastructure/api/ApiClient'

export function apiCharacterRepository(): CharacterRepository {
	const apiClient = new ApiClient(process.env.NEXT_PUBLIC_BASE_URL, getBaseParams())

	async function get(params: GetCharacterByIdParams): Promise<CharacterDataResponse> {
		const response = await apiClient.get(`/characters/${params.characterId}`)
		return response.data
	}

	async function getAll(params?: GetAllCharacterParams): Promise<CharacterDataResponse> {
		const response = await apiClient.get<GetAllCharacterParams>('/characters', params)
		return response.data
	}

	async function getAllComicsByCharacterId(params: GetAllComicsByCharacterIdParams): Promise<ComicDataResponse> {
		const response = await apiClient.get(`/characters/${params.characterId}/comics`)
		return response.data
	}

	return {
		get,
		getAll,
		getAllComicsByCharacterId
	}
}
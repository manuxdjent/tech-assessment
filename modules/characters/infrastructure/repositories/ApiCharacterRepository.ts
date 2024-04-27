import { getBaseParams } from '@/utils/ApiUtils'
import { CharacterRepository, GetAllCharacterParams, GetAllComicsByCharacterIdParams, GetCharacterByIdParams } from '../../domain/repositories/CharacterRepository'
import { CharacterDataResponse } from '../http/dto/CharacterDTO'
import { CharacterDataWrapper } from './ApiCharacterRepositoryModel'
import ApiClient from '@/modules/characters/infrastructure/instances/ApiClient'
import { ComicDataResponse } from '../http/dto/ComicDTO'
import { Character } from '../../domain/models/Character'
import { Comic } from '../../domain/models/Comic'

export function apiCharacterRepository(): CharacterRepository {
	const apiClient = new ApiClient(process.env.NEXT_PUBLIC_BASE_URL, getBaseParams())

	async function get(params: GetCharacterByIdParams): Promise<Character> {
		const response = await apiClient.get<GetCharacterByIdParams, CharacterDataWrapper<CharacterDataResponse>>(`/characters/${params.characterId}`)
		return response.data.results.map((characterDTO): Character => ({
			id: characterDTO.id,
			name: characterDTO.name,
			description: characterDTO.description,
			thumbnail: characterDTO.thumbnail,
			resourceURI: characterDTO.resourceURI
		}))[0]
	}

	async function getAll(params?: GetAllCharacterParams): Promise<Character[]> {
		const response = await apiClient.get<GetAllCharacterParams, CharacterDataWrapper<CharacterDataResponse>>('/characters', params)
		return response.data.results.map((characterDTO): Character => ({
			id: characterDTO.id,
			name: characterDTO.name,
			description: characterDTO.description,
			thumbnail: characterDTO.thumbnail,
			resourceURI: characterDTO.resourceURI
		}))
	}

	async function getAllComicsByCharacterId(params: GetAllComicsByCharacterIdParams): Promise<Comic[]> {
		const response = await apiClient.get<GetAllComicsByCharacterIdParams, CharacterDataWrapper<ComicDataResponse>>(`/characters/${params.characterId}/comics`)
		return response.data.results.map((comicDTO): Comic => ({
			id: comicDTO.id,
			title: comicDTO.title,
			dates: comicDTO.dates,
			thumbnail: comicDTO.thumbnail,
			characters: comicDTO.characters
		}))
	}

	return {
		get,
		getAll,
		getAllComicsByCharacterId
	}
}
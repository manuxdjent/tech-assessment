import { CharacterDataResponse } from '../http/dto/CharacterDTO'
import { Character } from '../../domain/models/Character'

export default function characterMapper(characterDataResponse: CharacterDataResponse): Character[] {
    return characterDataResponse.results.map((characterDTO): Character => ({
        id: characterDTO.id,
        name: characterDTO.name,
        description: characterDTO.description,
        thumbnail: characterDTO.thumbnail,
        resourceURI: characterDTO.resourceURI
    }))
}
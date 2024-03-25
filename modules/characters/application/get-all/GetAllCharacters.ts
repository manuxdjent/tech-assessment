import { Character } from "../../domain/Character";
import { CharacterDataResponse } from "../../domain/CharacterDataResponse";
import { GetAllCharacterParams } from "../../domain/CharacterRepository";
import { apiCharacterRepository } from "../../infrastructure/ApiCharacterRepository";

export function getAllCharacters(
    params: GetAllCharacterParams
): Promise<CharacterDataResponse> {
    return apiCharacterRepository().getAll(params)
}
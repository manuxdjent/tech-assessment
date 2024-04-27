import { getAllComicsByCharacterId } from '@/modules/characters/application/get-all-comics-by-character/GetAllComicsByCharacter'
import { apiCharacterRepository } from '@/modules/characters/infrastructure/repositories/ApiCharacterRepository'
import charactersResponseData from '@/tests/fixtures/charactersMockData.json'
import characterComicsResponseData from '@/tests/fixtures/characterComicsMockData.json'

describe('[useCase] get all comics by character', () => {
	const repository = apiCharacterRepository()
	afterEach(() => {
		vi.restoreAllMocks()
	})

	test('should return a lists of comics containing a specific character', async () => {
		const singleCharacterMock = charactersResponseData[0]
		vi
			.spyOn(repository, 'getAllComicsByCharacterId' as never)
			.mockImplementation(() => Promise.resolve(characterComicsResponseData))

		const comics = await getAllComicsByCharacterId(repository, {
            characterId: String(singleCharacterMock.id)
        })

		// Marvel API doesn't return character id on this endpoint response to compare with given character id, it would be interesting to check if characterId is present

		expect(comics).toEqual(characterComicsResponseData)
	})
})
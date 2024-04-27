import { getAllCharacters } from '@/modules/characters/application/get-all/GetAllCharacters'
import { apiCharacterRepository } from '@/modules/characters/infrastructure/repositories/ApiCharacterRepository'
import charactersResponseData from '@/tests/fixtures/charactersMockData.json'

describe('[useCase] getAllCharacters', () => {
	const repository = apiCharacterRepository()
	afterEach(() => {
		vi.restoreAllMocks()
	})
	test('should return only characters matching the specified full character name', async () => {
		const characterNameMock = charactersResponseData[0].name
		vi
			.spyOn(repository, 'getAll' as never)
			.mockImplementation(() => Promise.resolve(charactersResponseData))

		const characters = await getAllCharacters(repository, {
            limit: 50,
			name: characterNameMock
        })

		expect(characters).toEqual(expect.arrayContaining([
			expect.objectContaining({ name: characterNameMock })
		]))
	})
})
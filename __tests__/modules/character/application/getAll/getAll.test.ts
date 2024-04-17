import { getAllCharacters } from '@/modules/characters/application/get-all/GetAllCharacters'
import { apiCharacterRepository } from '@/modules/characters/infrastructure/repositories/ApiCharacterRepository'
import charactersResponseData from '@/tests/fixtures/charactersMockData.json'

describe('[useCase] getAllCharacters', () => {
	const repository = apiCharacterRepository()
	afterEach(() => {
		vi.restoreAllMocks()
	})

	test('should return first 50 characters', async () => {
		vi
			.spyOn(apiCharacterRepository(), 'getAll' as never)
			.mockImplementation(() => Promise.resolve(charactersResponseData))

		const { results } = await getAllCharacters(repository, {
            limit: 50
        })

		expect(results).toHaveLength(charactersResponseData.results.length)
	})

	test('should return only characters matching the specified full character name', async () => {
		const characterNameMock = '3-D Man'
		vi
			.spyOn(apiCharacterRepository(), 'getAll' as never)
			.mockImplementation(() => Promise.resolve(charactersResponseData))

		const { results } = await getAllCharacters(repository, {
            limit: 50,
			name: characterNameMock
        })

		expect(results).toEqual(expect.arrayContaining([
			expect.objectContaining({ name: characterNameMock })
		]))
	})
})
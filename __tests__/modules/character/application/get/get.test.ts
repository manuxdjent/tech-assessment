import { getCharacterById } from '@/modules/characters/application/get/GetCharacterById'
import { apiCharacterRepository } from '@/modules/characters/infrastructure/repositories/ApiCharacterRepository'
import charactersResponseData from '@/tests/fixtures/charactersMockData.json'

describe('[useCase] get character', () => {
	const repository = apiCharacterRepository()
	afterEach(() => {
		vi.restoreAllMocks()
	})

	test('should return a single character by id', async () => {
		const singleCharacterMock = charactersResponseData.results[0]
		vi
			.spyOn(repository, 'get' as never)
			.mockImplementation(() => Promise.resolve(singleCharacterMock))

		const { results } = await getCharacterById(repository, {
            characterId: String(singleCharacterMock.id)
        })

		expect(results[0].id).toEqual(singleCharacterMock.id)
	})
})
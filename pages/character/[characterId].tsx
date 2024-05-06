import { getAllComicsByCharacterId } from '@/modules/characters/application/get-all-comics-by-character/GetAllComicsByCharacter'
import { getCharacterById } from '@/modules/characters/application/get/GetCharacterById'
import { Character } from '@/modules/characters/domain/models/Character'
import { CharacterDetail } from '@/sections/character/character-detail/CharacterDetail'
import { apiCharacterRepository } from '@/modules/characters/infrastructure/repositories/ApiCharacterRepository'
import { Comic } from '@/modules/characters/domain/models/Comic'

const repository = apiCharacterRepository()

export interface CharacterPageProps {
  character: Character
  comics: Comic[]
}

export default function CharacterPage({
  character,
  comics
}: CharacterPageProps): JSX.Element {
  return <CharacterDetail character={character} comics={comics} />
}

export async function getServerSideProps({
  params
}: {
  params: {
    characterId: string
  }
}) {
  const [character, comics] = await Promise.all([
    await getCharacterById(repository, params),
    await getAllComicsByCharacterId(repository, params)
  ])
  return {
    props: {
      character,
      comics
    }
  }
}

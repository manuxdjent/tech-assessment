import { getAllComicsByCharacterId } from '@/modules/characters/application/get-all-comics-by-character/GetAllComicsByCharacter'
import { getAllCharacters } from '@/modules/characters/application/get-all/GetAllCharacters'
import { getCharacterById } from '@/modules/characters/application/get/GetCharacterById'
import { Character } from '@/modules/characters/domain/models/Character'
import { CharacterDetail } from '@/sections/character/character-detail/CharacterDetail'
import { GetStaticPathsResult, GetStaticPropsResult } from 'next'
import { GetStaticPropsResultProps } from '../../models/character-page.model'
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

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const characters = await getAllCharacters(repository,{
    limit: 50
  })

  const paths = characters.map((character: Character) => ({
    params: {
      characterId: character.id.toString()
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({
  params
}: {
  params: {
    characterId: string
  }
}): Promise<GetStaticPropsResult<GetStaticPropsResultProps>> {
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

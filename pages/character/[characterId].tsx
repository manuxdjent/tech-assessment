import { getAllComicsByCharacterId } from '@/modules/characters/application/get-all-comics-by-character/GetAllComicsByCharacter'
import { getAllCharacters } from '@/modules/characters/application/get-all/GetAllCharacters'
import { getCharacterById } from '@/modules/characters/application/get/GetCharacterById'
import { Character, Comic } from '@/modules/characters/domain/Character'
import { CharacterDetail } from '@/sections/character/character-detail/CharacterDetail'

export interface CharacterPageProps {
  character: Character
  comics: Comic[]
}

export default function Character({
  character,
  comics
}: CharacterPageProps): JSX.Element {
  return <CharacterDetail character={character} />
}

export async function getStaticPaths() {
  const { results } = await getAllCharacters({
    limit: 50
  })

  const paths = results.map((character: Character) => ({
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
}) {
  const [characterByIdResult, comicsByCharacterIdResult] = await Promise.all([
    await getCharacterById(params),
    await getAllComicsByCharacterId(params)
  ])
  return {
    props: {
      character: characterByIdResult.results[0],
      commics: comicsByCharacterIdResult.results
    }
  }
}

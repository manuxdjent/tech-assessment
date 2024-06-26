import { getAllCharacters } from '@/modules/characters/application/get-all/GetAllCharacters'
import { Character } from '@/modules/characters/domain/models/Character'
import { CharacterList } from '@/sections/character/character-list/CharacterList'
import styles from './index.module.css'
import { apiCharacterRepository } from '@/modules/characters/infrastructure/repositories/ApiCharacterRepository'

export interface HomePageProps {
  characters: Character[]
}

export default function HomePage({ characters }: HomePageProps): JSX.Element {
  return (
    <div className={styles.characterListContainer}>
      <CharacterList characters={characters} />
    </div>
  )
}

export async function getStaticProps() {
  const characters = await getAllCharacters(apiCharacterRepository(), { limit: 50 })

  return {
    props: {
      characters
    }
  }
}

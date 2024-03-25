import { getAllCharacters } from '@/modules/characters/application/get-all/GetAllCharacters'
import { Character } from '@/modules/characters/domain/Character'
import { CharacterList } from '@/sections/character/character-list/CharacterList'
import styles from './index.module.css'

export interface HomePageProps {
  characters: Character[]
}

export default function HomePage({ characters }: HomePageProps): JSX.Element {
  return (
    <main>
      <div className={styles.characterListContainer}>
        <CharacterList characters={characters} />
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const { results } = await getAllCharacters({
    limit: 50
  })

  return {
    props: {
      characters: results
    }
  }
}

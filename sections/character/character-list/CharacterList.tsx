import { Character } from '@/modules/characters/domain/Character'
import Link from 'next/link'
import { useState } from 'react'
import style from './style.module.css'
import { CharacterCard } from '../character-card/CharacterCard'
import { useAppContext } from '@/context/AppContext'
import { SearchBar } from '@/common/components/search-bar/SearchBar'
import { getAllCharactersByName, getFilteredCharacterList, getTotalLabel } from './CharacterList.logic'

interface CharacterListProps {
  characters: Character[]
}

export function CharacterList({ characters }: CharacterListProps): JSX.Element {
  const [characterList, setCharactersList] = useState<Character[]>(characters)
  const { isfavoriteCharactersFilteringActive, favoriteCharacterIds } =
    useAppContext()

  const filteredCharacterList: Character[] = getFilteredCharacterList(isfavoriteCharactersFilteringActive, characterList, favoriteCharacterIds)

  const totalLabel: string = getTotalLabel(filteredCharacterList)

  const onSearch = async (query: string) => {
    const response = await getAllCharactersByName(query)
    if (response) {
      setCharactersList(response.results)
    }
  }

  return (
    <div className="container mx-auto">
      <div className={style.searchBarContainer}>
        <SearchBar search={onSearch} />
      </div>
      <p>{totalLabel}</p>
      <div className={style.characterList}>
        {filteredCharacterList.map((character) => (
          <Link href={`/character/${character.id}`} key={character.id}>
            <CharacterCard character={character} />
          </Link>
        ))}
      </div>
    </div>
  )
}

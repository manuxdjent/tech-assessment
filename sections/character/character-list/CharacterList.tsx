import { SearchBar } from '@/components/search-bar/SearchBar'
import { Character } from '@/modules/characters/domain/Character'
import Link from 'next/link'
import { useState } from 'react'
import style from './style.module.css'
import { GetAllCharacterParams } from '@/modules/characters/domain/CharacterRepository'
import { CharacterCard } from '../character-card/CharacterCard'
import { getAllCharacters } from '@/modules/characters/application/get-all/GetAllCharacters'
import { useAppContext } from '@/context/AppContext'

interface CharacterListProps {
  characters: Character[]
}

export function CharacterList({ characters }: CharacterListProps): JSX.Element {
  const [characterList, setCharactersList] = useState<Character[]>(characters)
  const { isfavoriteCharactersFilteringActive, favoriteCharacterIds } =
    useAppContext()

  const filteredCharacterList = isfavoriteCharactersFilteringActive
    ? characterList.filter((character) =>
        favoriteCharacterIds.some(
          (favoriteCharacterId) => favoriteCharacterId === character.id
        )
      )
    : characterList

  const totalLabel = `${filteredCharacterList.length} RESULTS`

  const onSearch = async (query: string) => {
    const params: GetAllCharacterParams = {
      limit: 50
    }
    if (query) {
      params.name = query
    }
    const response = await getAllCharacters(params)
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

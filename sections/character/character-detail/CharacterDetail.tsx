import { Character, Comic } from '@/modules/characters/domain/Character'
import { getImageSrc } from '@/utils/HelperUtils'
import Image from 'next/image'
import style from './style.module.css'
import { useAppContext } from '@/context/AppContext'
import CharacterComics from '../character-comics/CharacterComics'
import { FavoriteButton } from '@/common/components/favorite-button/FavoriteButton'
import { getFavoriteCharacterIds, isCharacterFavorite } from '@/utils/CommonUtils'
import { useEffect, useState } from 'react'

export interface CharacterDetailProps {
  character: Character
  comics: Comic[]
}

export function CharacterDetail({
  character,
  comics
}: CharacterDetailProps): JSX.Element {
  const { favoriteCharacterIds, setFavoriteCharacterIds } = useAppContext()
  const [ activeFavoriteButton, setActiveFavoriteButton ] = useState<boolean>(false)

  useEffect(() => {
    setActiveFavoriteButton(isCharacterFavorite(favoriteCharacterIds, character.id))
  }, [character.id, favoriteCharacterIds])

  
  const onFavoriteButtonClick = (
    event: React.MouseEvent<HTMLElement>
    ) => {
      event.preventDefault()
      setFavoriteCharacterIds(getFavoriteCharacterIds(favoriteCharacterIds, character.id))
    }

  return (
    <>
      <div className={style.characterDetailWrapper}>
        <div className={style.characterDetailInfo}>
          <Image
            className={style.characterDetailImage}
            alt={character.name}
            width={300}
            height={300}
            src={getImageSrc(character.thumbnail)}
          />
          <div className={style.descriptionWrapper}>
            <div className={style.descriptionTitleWrapper}>
              <h2>{character.name}</h2>
              <FavoriteButton
                active={activeFavoriteButton}
                onClick={onFavoriteButtonClick}
              />
            </div>
            <p>{character.description}</p>
          </div>
        </div>
      </div>
      <div className={style.characterComicsWrapper}>
        <CharacterComics comics={comics} />
      </div>
    </>
  )
}

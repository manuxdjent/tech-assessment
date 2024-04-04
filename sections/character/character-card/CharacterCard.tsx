import { Character } from '@/modules/characters/domain/Character'
import Image from 'next/image'
import style from './style.module.css'
import { useAppContext } from '@/context/AppContext'
import { getImageSrc } from '@/utils/HelperUtils'
import { FavoriteButton } from '@/common/components/favorite-button/FavoriteButton'
import { useEffect, useState } from 'react'
import { getFavoriteCharacterIds, isCharacterFavorite } from '@/utils/CommonUtils'

interface CharacterProps {
  character: Character
}

export function CharacterCard({ character }: CharacterProps): JSX.Element {
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
    <div className={style.cardWrapper}>
      <Image
        src={getImageSrc(character.thumbnail)}
        alt={character.name}
        width={189}
        height={189}
        className={style.image}
      />
      <div className={style.cardBottom}>
        <div className={style.labelWrapper}>
          <span>{character.name}</span>
        </div>
        <FavoriteButton
          active={activeFavoriteButton}
          onClick={onFavoriteButtonClick}
        />
      </div>
    </div>
  )
}

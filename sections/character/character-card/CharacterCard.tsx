import { Character } from '@/modules/characters/domain/Character'
import Image from 'next/image'
import style from './style.module.css'
import { FavoriteButton } from '@/components/favorite-button/FavoriteButton'
import { useAppContext } from '@/context/AppContext'
import { getImageSrc } from '@/utils/HelperUtils'

interface CharacterProps {
  character: Character
}

export function CharacterCard({ character }: CharacterProps): JSX.Element {
  const { favoriteCharacterIds, setFavoriteCharacterIds } = useAppContext()

  const isCharacterFavorite = !!favoriteCharacterIds.some(
    (favoriteCharacterId) => favoriteCharacterId === character.id
  )

  const onFavoriteButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    let favoriteCharacterIdsNewValue = []
    const isCharacterAlreadyAddedAsFavorite = favoriteCharacterIds.some(
      (favoriteCharacterId) => favoriteCharacterId === character.id
    )
    if (isCharacterAlreadyAddedAsFavorite) {
      favoriteCharacterIdsNewValue = favoriteCharacterIds.filter(
        (favoriteCharacterId) => favoriteCharacterId !== character.id
      )
    } else {
      favoriteCharacterIdsNewValue = favoriteCharacterIds.concat(character.id)
    }
    setFavoriteCharacterIds(favoriteCharacterIdsNewValue)
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
          active={isCharacterFavorite}
          onClick={onFavoriteButtonClick}
        />
      </div>
    </div>
  )
}

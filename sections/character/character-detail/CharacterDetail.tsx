import { Character } from '@/modules/characters/domain/Character'
import { getImageSrc } from '@/utils/HelperUtils'
import Image from 'next/image'
import style from './style.module.css'
import { FavoriteButton } from '@/components/favorite-button/FavoriteButton'
import { useAppContext } from '@/context/AppContext'

export interface CharacterDetailProps {
  character: Character
}

export function CharacterDetail({
  character
}: CharacterDetailProps): JSX.Element {
  const {
    favoriteCharacterIds,
    isfavoriteCharactersFilteringActive,
    setIsfavoriteCharactersFilteringActive
  } = useAppContext()
  const isCharacterFavorite = favoriteCharacterIds.some(
    (favoriteCharacter) => favoriteCharacter === character.id
  )
  const onFavoriteIconButtonClick = () =>
    setIsfavoriteCharactersFilteringActive(!isfavoriteCharactersFilteringActive)

  return (
    <div className={style.characterDetailWrapper}>
      <Image
        alt={character.name}
        width={300}
        height={300}
        src={getImageSrc(character.thumbnail)}
      />
      <div className={style.descriptionWrapper}>
        <div className={style.descriptionTitleWrapper}>
          <h2>{character.name}</h2>
          <FavoriteButton
            active={isCharacterFavorite}
            onClick={onFavoriteIconButtonClick}
          />
        </div>
        <p>{character.description}</p>
      </div>
    </div>
  )
}

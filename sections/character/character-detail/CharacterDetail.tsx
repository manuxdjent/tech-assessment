import { Character, Comic } from '@/modules/characters/domain/Character'
import { getImageSrc } from '@/utils/HelperUtils'
import Image from 'next/image'
import style from './style.module.css'
import { FavoriteButton } from '@/components/favorite-button/FavoriteButton'
import { useAppContext } from '@/context/AppContext'
import CharacterComics from '../character-comics/CharacterComics'

export interface CharacterDetailProps {
  character: Character
  comics: Comic[]
}

export function CharacterDetail({
  character,
  comics
}: CharacterDetailProps): JSX.Element {
  const { favoriteCharacterIds, setFavoriteCharacterIds } = useAppContext()
  const isCharacterFavorite = favoriteCharacterIds.some(
    (favoriteCharacter) => favoriteCharacter === character.id
  )
  const onFavoriteButtonClick = () => {
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
                active={isCharacterFavorite}
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

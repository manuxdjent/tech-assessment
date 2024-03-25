import { useAppContext } from '@/context/AppContext'
import { FavoriteButton } from '../favorite-button/FavoriteButton'
import style from './style.module.css'

export default function FavoriteFitler(): JSX.Element {
  const {
    isfavoriteCharactersFilteringActive,
    setIsfavoriteCharactersFilteringActive,
    favoriteCharacterIds
  } = useAppContext()
  const favoriteCharactersCount = favoriteCharacterIds.length
  const onFavoriteIconButtonClick = () =>
    setIsfavoriteCharactersFilteringActive(!isfavoriteCharactersFilteringActive)
  return (
    <>
      <FavoriteButton
        active={isfavoriteCharactersFilteringActive}
        onClick={onFavoriteIconButtonClick}
      />
      <span className={style.favoriteCharactersCountLabel}>
        {favoriteCharactersCount}
      </span>
    </>
  )
}

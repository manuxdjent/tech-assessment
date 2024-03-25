import style from './style.module.css'
import MarvelLogo from '../marvel-logo/MarvelLogo'
import FavoriteFilter from '../favorite-filter/FavoriteFilter'

export default function Navbar(): JSX.Element {
  return (
    <div className={style.wrapper}>
      <div className={style.marvelLogoWrapper}>
        <MarvelLogo />
      </div>
      <div className={style.favoriteFilterWrapper}>
        <FavoriteFilter />
      </div>
    </div>
  )
}

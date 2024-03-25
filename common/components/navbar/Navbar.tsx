import style from './style.module.css'
import MarvelLogo from '../marvel-logo/MarvelLogo'
import FavoriteFilter from '../favorite-filter/FavoriteFilter'
import Link from 'next/link'

export default function Navbar(): JSX.Element {
  return (
    <div className={style.wrapper}>
      <div className={style.marvelLogoWrapper}>
        <Link href={'/'}>
          <MarvelLogo />
        </Link>
      </div>
      <div className={style.favoriteFilterWrapper}>
        <FavoriteFilter />
      </div>
    </div>
  )
}

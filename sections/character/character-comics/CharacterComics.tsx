import { getImageSrc } from '@/utils/HelperUtils'
import Image from 'next/image'
import style from './style.module.css'
import { getOnSaleDate } from '../../../modules/characters/domain/CharacterComics'
import { Comic } from '@/modules/characters/domain/models/Comic'

export interface CharacterComicsProps {
  comics: Comic[]
}

export default function CharacterComics({
  comics
}: CharacterComicsProps): JSX.Element {
  const onSaleDate = (comic: Comic): string => getOnSaleDate(comic)
  return (
    <>
      <h2>COMICS</h2>
      <div className={style.characterComicsWrapper}>
        {comics.map((comic) => (
          <div className={style.characterComic} key={comic.id}>
            <Image
              src={getImageSrc(comic.thumbnail)}
              alt={comic.title}
              height={269}
              width={180}
            ></Image>
            <h4>{comic.title}</h4>
            <label>{onSaleDate(comic)}</label>
          </div>
        ))}
      </div>
    </>
  )
}

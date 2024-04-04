import { Comic, ComicDate } from '@/modules/characters/domain/Character'
import { getImageSrc } from '@/utils/HelperUtils'
import Image from 'next/image'
import style from './style.module.css'

export interface CharacterComicsProps {
  comics: Comic[]
}

export default function CharacterComics({
  comics
}: CharacterComicsProps): JSX.Element {
  const onSaleDate = (comic: Comic): string => {
    const onSaleDateType: ComicDate | undefined = comic.dates.find(
      (date) => date.type === 'onsaleDate'
    )
    if (onSaleDateType) {
      return new Date(onSaleDateType.date).getFullYear().toString()
    }
    return ''
  }
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

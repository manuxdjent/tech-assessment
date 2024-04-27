import { Comic, ComicDate } from "./models/Comic"

export const getOnSaleDate = (comic: Comic): string => {
    const onSaleDateType: ComicDate | undefined = comic.dates.find(
      (date) => date.type === 'onsaleDate'
    )
    if (onSaleDateType) {
      return new Date(onSaleDateType.date).getFullYear().toString()
    }
    return ''
}
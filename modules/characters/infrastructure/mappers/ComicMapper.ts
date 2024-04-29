import { Comic } from "../../domain/models/Comic";
import { ComicDataResponse } from '../http/dto/ComicDTO'

export default function comicMapper(comicDataResponse: ComicDataResponse): Comic[] {
    return comicDataResponse.results.map((comicDTO): Comic => ({
        id: comicDTO.id,
        title: comicDTO.title,
        dates: comicDTO.dates,
        thumbnail: comicDTO.thumbnail,
        characters: comicDTO.characters
    }))
}
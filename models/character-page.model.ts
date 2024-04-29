import { Character } from '@/modules/characters/domain/models/Character'
import { Comic } from '@/modules/characters/domain/models/Comic'

export interface GetStaticPropsResultProps {
    character: Character
    comics: Comic[]
}
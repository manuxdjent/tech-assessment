import { Character, Comic } from '@/modules/characters/domain/models/Character'

export interface GetStaticPropsResultProps {
    character: Character
    comics: Comic[]
}
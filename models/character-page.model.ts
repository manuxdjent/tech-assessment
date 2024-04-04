import { Character, Comic } from '@/modules/characters/domain/Character'

export interface GetStaticPropsResultProps {
    character: Character
    comics: Comic[]
}
import { Thumbnail } from '@/modules/characters/domain/models/Common'

export const getImageSrc = (thumbnail: Thumbnail) => `${thumbnail.path}.${thumbnail.extension}`
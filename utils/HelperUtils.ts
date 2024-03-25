import { Thumbnail } from '@/common/models/Common'

export const getImageSrc = (thumbnail: Thumbnail) => `${thumbnail.path}.${thumbnail.extension}`
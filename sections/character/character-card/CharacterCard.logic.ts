export const isCharacterFavorite = (favoriteCharacterIds: string[], characterId: string) => !!favoriteCharacterIds.some(
    (favoriteCharacterId) => favoriteCharacterId === characterId
)

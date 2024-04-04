export const isCharacterFavorite = (favoriteCharacterIds: string[], characterId: string) => !!favoriteCharacterIds.some(
    (favoriteCharacterId) => favoriteCharacterId === characterId
)

export const getFavoriteCharacterIds = (favoriteCharacterIds: string[], characterId: string, event: React.MouseEvent<HTMLElement>): string[] => {
    event.preventDefault()
    let favoriteCharacterIdsNewValue: string[] = []
    const isCharacterAlreadyAddedAsFavorite: boolean = favoriteCharacterIds.some(
      (favoriteCharacterId) => favoriteCharacterId === characterId
    )
    if (isCharacterAlreadyAddedAsFavorite) {
      favoriteCharacterIdsNewValue = favoriteCharacterIds.filter(
        (favoriteCharacterId) => favoriteCharacterId !== characterId
      )
    } else {
      favoriteCharacterIdsNewValue = favoriteCharacterIds.concat(characterId)
    }
    return favoriteCharacterIdsNewValue
  }

import type { AppProps } from 'next/app'
import AppContext from '@/context/AppContext'
import { useState } from 'react'
import '../styles/global.css'
import Layout from '@/common/components/layout/Layout'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [favoriteCharacterIds, setFavoriteCharacterIds] = useState<string[]>([])
  const [
    isfavoriteCharactersFilteringActive,
    setIsfavoriteCharactersFilteringActive
  ] = useState<boolean>(false)
  return (
    <AppContext.Provider
      value={{
        favoriteCharacterIds,
        setFavoriteCharacterIds,
        isfavoriteCharactersFilteringActive,
        setIsfavoriteCharactersFilteringActive
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  )
}

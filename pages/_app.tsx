import type { AppProps } from 'next/app'
import Layout from '@/components/layout/Layout'
import AppContext from '@/context/AppContext'
import { useState } from 'react'
import '../styles/global.css'

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

import React, { createContext, useContext, useState } from 'react'
import { translations } from '../lib/i18n'

const LangContext = createContext()

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('cg:lang') || 'fi')

  function switchLang(l) {
    localStorage.setItem('cg:lang', l)
    setLang(l)
  }

  return (
    <LangContext.Provider value={{ lang, switchLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}

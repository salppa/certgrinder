import { useState, useCallback, useEffect } from 'react'
import { api } from '../lib/api'

const lsKey = (moduleId, type) => `cg:local:${moduleId}:${type}`

function lsGet(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) || fallback }
  catch { return fallback }
}

export function useProgress(moduleId) {
  const [progress, set] = useState(() => lsGet(lsKey(moduleId, 'progress'), { completed: [] }))

  useEffect(() => {
    api.getProgress(moduleId).then(data => { if (data) set(data) })
  }, [moduleId])

  const completeEpisode = useCallback((epId) => {
    set(prev => {
      const next = { ...prev, completed: [...new Set([...prev.completed, epId])] }
      localStorage.setItem(lsKey(moduleId, 'progress'), JSON.stringify(next))
      api.setProgress(moduleId, next).catch(() => {})
      return next
    })
  }, [moduleId])

  const flagCard = useCallback((cardId) => {
    set(prev => {
      const flags = [...new Set([...(prev.flags || []), cardId])]
      const next = { ...prev, flags }
      localStorage.setItem(lsKey(moduleId, 'progress'), JSON.stringify(next))
      api.setProgress(moduleId, next).catch(() => {})
      return next
    })
  }, [moduleId])

  const isLocked = useCallback((epId) =>
    epId > 1 && !progress.completed.includes(epId - 1)
  , [progress])

  return { progress, completeEpisode, flagCard, isLocked }
}

export function useSympathy(moduleId) {
  const [value, set] = useState(() => {
    const s = lsGet(lsKey(moduleId, 'sympathy'), { value: 50 })
    return s.value ?? 50
  })

  useEffect(() => {
    api.getSympathy(moduleId).then(data => { if (data?.value !== undefined) set(data.value) })
  }, [moduleId])

  const update = useCallback((delta) => {
    set(prev => {
      const next = Math.max(0, Math.min(100, prev + delta))
      localStorage.setItem(lsKey(moduleId, 'sympathy'), JSON.stringify({ value: next }))
      api.setSympathy(moduleId, { value: next }).catch(() => {})
      return next
    })
  }, [moduleId])

  return { sympathy: value, updateSympathy: update }
}

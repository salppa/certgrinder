import { useState, useCallback } from 'react'

const KEY = (moduleId, type) => `cg:local:${moduleId}:${type}`

export function useProgress(moduleId) {
  const k = KEY(moduleId, 'progress')
  const [progress, set] = useState(() => {
    try { return JSON.parse(localStorage.getItem(k)) || { completed: [] } }
    catch { return { completed: [] } }
  })

  const completeEpisode = useCallback((epId) => {
    set(prev => {
      const next = { completed: [...new Set([...prev.completed, epId])] }
      localStorage.setItem(k, JSON.stringify(next))
      return next
    })
  }, [k])

  const isLocked = useCallback((epId) =>
    epId > 1 && !progress.completed.includes(epId - 1)
  , [progress])

  return { progress, completeEpisode, isLocked }
}

export function useSympathy(moduleId) {
  const k = KEY(moduleId, 'sympathy')
  const [value, set] = useState(() => parseInt(localStorage.getItem(k) || '50', 10))

  const update = useCallback((delta) => {
    set(prev => {
      const next = Math.max(0, Math.min(100, prev + delta))
      localStorage.setItem(k, String(next))
      return next
    })
  }, [k])

  return { sympathy: value, updateSympathy: update }
}

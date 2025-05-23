import type { ReactNode } from 'react'
import { createContext, useCallback, useMemo, useState } from 'react'

type ToastType = 'success' | 'error' | 'info'

export interface Toast {
  id: number
  message: string
  type: ToastType
  removing?: boolean
}

type ToastOptions = Pick<Toast, 'message' | 'type'>

interface ToastContextValue {
  toasts: Toast[]
  addToast: (toastOptions: ToastOptions) => void
  removeToast: (id: number) => void
}

export const ToastContext = createContext<ToastContextValue | null>(null)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((cur) => cur.id !== id))
  }, [])

  const addToast = useCallback(
    (toastOptions: ToastOptions) => {
      const toast = { id: new Date().getTime(), ...toastOptions }
      setToasts((prev) => [...prev, toast])

      setTimeout(() => {
        setToasts((prev) =>
          prev.map((cur) => (cur.id !== toast.id ? cur : { ...cur, removing: true })),
        )

        setTimeout(() => {
          removeToast(toast.id)
        }, 1_000)
      }, 5_000)
    },
    [removeToast],
  )

  const value = useMemo(
    () => ({
      toasts,
      addToast,
      removeToast,
    }),
    [toasts, addToast, removeToast],
  )

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}

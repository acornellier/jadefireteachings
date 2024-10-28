import { useCallback } from 'react'
import { copyText } from '../dev.ts'
import { useToasts } from '../../components/Common/Toasts/useToasts.ts'

export function useCopy(name: string) {
  const { addToast } = useToasts()

  return useCallback(
    async (text: string) => {
      await copyText(text)
      addToast({ type: 'success', message: `Copied ${name} to clipboard` })
    },
    [addToast, name],
  )
}

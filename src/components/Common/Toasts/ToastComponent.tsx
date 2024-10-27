import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline'
import type { Toast } from './ToastProvider.tsx'
import { useToasts } from './useToasts.ts'

interface Props {
  toast: Toast
}

export function ToastComponent({ toast }: Props) {
  const { removeToast } = useToasts()

  const Icon =
    toast.type === 'success'
      ? CheckCircleIcon
      : toast.type === 'info'
        ? InformationCircleIcon
        : ExclamationTriangleIcon

  return (
    <div
      className={`fancy-toast flex items-center gap-2 transition-opacity duration-500 pointer-events-auto
                  ${toast.type} 
                  ${toast.removing ? 'opacity-0' : ''}`}
      onClick={() => removeToast(toast.id)}
    >
      <Icon width={24} height={24} className="min-w-6" />
      <div>{toast.message}</div>
    </div>
  )
}

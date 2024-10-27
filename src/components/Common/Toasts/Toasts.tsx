import { useToasts } from './useToasts'
import { ToastComponent } from './ToastComponent'

export function Toasts() {
  const { toasts } = useToasts()

  return (
    <div
      className="fixed left-1/2 bottom-8 z-20 select-none w-full max-w-[800px] pointer-events-none"
      style={{ transform: 'translateX(-50%)' }}
    >
      <div className="flex flex-col gap-2 items-center">
        {toasts.map((toast) => (
          <ToastComponent key={toast.id} toast={toast} />
        ))}
      </div>
    </div>
  )
}

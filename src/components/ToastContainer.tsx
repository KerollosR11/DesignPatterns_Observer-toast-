import { useEffect, useState } from 'react';
import { Toast, ToastProps } from './Toast';
import { toastObservable } from '../utils';
import { useAutoAnimate } from '@formkit/auto-animate/react';

type Toast = Pick<ToastProps, 'id'| 'message'| 'variant'>

export function ToastContainer() {
  const [parent] = useAutoAnimate()
  const [toasts, setToasts] = useState<Toast[]>([
    // {
    //   id: 1,
    //   message: 'default toast',
    //   variant:'default'
    // },
    // {
    //   id: 2,
    //   message: 'error toast',
    //   variant:'error'
    // },
    // {
    //   id: 3,
    //   message: 'success toast',
    //   variant:'success'
    // },
  ])

  useEffect(() => {
    
    return toastObservable.subscribe(toast => {
      setToasts(prevToasts=> [...prevToasts, toast])
    })

    

  }, [])
  



  return (
    <div
    ref={parent}
     className="absolute bottom-0 end-0 p-4 space-y-2 w-full h-full justify-end pointer-events-none flex flex-col max-w-xs ">
      {toasts.map(
        (toast)=>
          <Toast 
            key={toast.id}
            id={toast.id} 
            variant={toast.variant} 
            message={toast.message} 
            onClose={() => {
              setToasts(prevToasts=> prevToasts.filter(t=> t.id != toast.id ))
            }} />
      )}
    </div>
  );
}

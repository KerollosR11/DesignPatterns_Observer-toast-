import { ToastProps } from './components/Toast';
type Observer <TData> = (data: TData)=> void;

class Observable<TData>{
    observers : Observer<TData>[] = [];

    subscribe (observer: Observer<TData>){
        this.observers.push(observer)

        return()=>{
            this.observers = this.observers.filter(obs => obs != observer);  
        }
    }

    // unsubscribe(observer: Observer<TData>){
    //     this.observers = this.observers.filter(obs => obs != observer);
    // }

    notify(data: TData){
        this.observers.forEach(observer => observer(data));
    }
};

type Toast = Pick<ToastProps, 'id'| 'message'| 'variant'>

export const toastObservable = new Observable <Toast>()

export function toast(message: string){
    toastObservable.notify({
        id: Date.now(),
        message,
        variant:"default"

    })
}

toast.success = function(message: string){
    toastObservable.notify({
        id: Date.now(),
        message,
        variant:'success'
    })
}

toast.error = function(message: string){
    toastObservable.notify({
        id: Date.now(),
        message,
        variant:'error'
    })
}
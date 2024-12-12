import React from 'react';

import {Toast, ToastUtil} from './toastutil'

import 'react-toastify/dist/ReactToastify.css';

const emitOffline = () => {
    Toast.dismiss("online-toast");
    warning('You are currently offline.', { autoClose: false, toastId: "offline-toast", });
}

export const warning = (WaringMessage = '', options = {}) => {
    console.log('WaringMessage')
    if (WaringMessage)
    Toast.warn(WaringMessage, {
                autoClose: 2500,
                closeOnClick: false,
                className: "font-weight-bold text-white text-center",
                draggable: false,
                position: "bottom-center",
                ...options
            });
       
}

const success = (SuccessMessage = '', options = {}) => {
    if (SuccessMessage)
      return  Toast.success(SuccessMessage, {
            autoClose: 2500,
            closeOnClick: false,
            // className: "font-weight-bold text-white text-center",
            draggable: false,
            toastId: "offline-toast",
            position: "bottom-center",
            ...options
        });
}
const error = (errorMessage = '', options = {}) => {
    if (errorMessage)
        Toast.error(errorMessage, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            ...options
        });
}

const dismiss = (id = '') => {
    if (id === '') Toast.dismiss();
    else Toast.dismiss(id);
}

const emitOnline = () => {
    Toast.dismiss("offline-toast");
    success('You are back online.', { toastId: "online-toast" });
}




interface ToastProviderProps {
	children: React.ReactNode;
}
export default function ToastProvider({ children }: ToastProviderProps) {
    //   useEffect(() => {

    //     if (navigator.onLine === false) emitOffline();
    //     window.addEventListener('online', () => {
    //         emitOnline();
    //     });
    //     window.addEventListener('offline', () => {
    //         emitOffline();
    //     });
    // }, [])
	return (
		<>
			{children}
			<ToastUtil/>
		</>
	);
}


export const ToastComponent = {

        emitOffline,
        warning,
        success,
        error,
        dismiss,
        emitOnline

}



// export ToastComponent;



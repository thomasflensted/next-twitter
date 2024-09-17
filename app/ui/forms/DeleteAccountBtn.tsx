import { deleteAccount } from '@/app/lib/actions/userActions';
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';

const DeleteAccountBtn = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');

    const handleDelete = async () => {
        const msg = await deleteAccount();
        if (msg) setMessage(msg);
        else {
            setIsOpen(false);
            setMessage('');
        }
    }

    const handleClose = () => {
        setIsOpen(false);
        setMessage('');
    }

    return (
        <Dialog.Root open={isOpen}>
            <Dialog.Trigger onClick={() => setIsOpen(true)} className='w-full border bg-red-500 font-medium rounded py-1.5 text-white hover:bg-red-600'>Delete Account</Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-75 flex justify-end" />
                <Dialog.Content onInteractOutside={handleClose} id='deletedialog' className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded outline-none shadow-lg p-6">
                    <Dialog.Title className="text-md text-red-600 font-medium">Are you sure you want to delete your account?</Dialog.Title>
                    <Dialog.Description className="text-sm font-light">This action cannot be undone.</Dialog.Description>
                    <div className="flex gap-1 mt-4">
                        <button onClick={handleClose} className="w-full border font-medium rounded py-1.5 text-red-500 hover:bg-gray-100">Cancel</button>
                        <button id='deletebtn' onClick={handleDelete} className="w-full bg-red-500 font-medium rounded py-1.5 text-white hover:bg-red-600">Delete</button>
                    </div>
                    {message &&
                        <div className='w-full border border-red-600 bg-red-50 px-2 py-1 mt-2 rounded'>
                            <p className=" text-red-500 font-light text-xs">{message}</p>
                        </div>}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}
export default DeleteAccountBtn
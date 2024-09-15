import { deleteAccount } from '@/app/lib/actions/userActions';
import * as Dialog from '@radix-ui/react-dialog';

const DeleteAccountBtn = () => {
    return (
        <Dialog.Root>
            <Dialog.Trigger className='w-full border bg-red-500 font-medium rounded py-1.5 text-white hover:bg-red-600'>Delete Account</Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-75 flex justify-end" />
                <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded outline-none shadow-lg p-6">
                    <Dialog.Title className="text-md text-red-600 font-medium">Are you sure you want to delete your account?</Dialog.Title>
                    <Dialog.Description className="text-sm font-light">This action cannot be undone.</Dialog.Description>
                    <div className="flex gap-1 mt-4">
                        <button className="w-full border font-medium rounded py-1.5 text-red-500 hover:bg-gray-100">Cancel</button>
                        <button onClick={() => deleteAccount()} className="w-full bg-red-500 font-medium rounded py-1.5 text-white hover:bg-red-600">Delete</button>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}
export default DeleteAccountBtn
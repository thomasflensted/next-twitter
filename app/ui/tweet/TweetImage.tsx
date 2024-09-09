'use client'

import * as Dialog from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import { useState } from 'react';

const TweetImage = ({ imageUrl }: { imageUrl: string | undefined | null }) => {

    if (!imageUrl) return null;
    const [dialogIsOpen, setDialogIsOpen] = useState(false);

    return (
        <Dialog.Root open={dialogIsOpen}>
            <Dialog.Trigger onClick={() => setDialogIsOpen(true)} asChild>
                <div className="w-full h-auto rounded-lg overflow-hidden relative mb-4 mr-6 shadow-md">
                    <img
                        src={imageUrl}
                        alt="An image attached to a tweet." />
                </div>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay onClick={() => setDialogIsOpen(false)} className="fixed inset-0 bg-black bg-opacity-75 flex justify-end">
                    <Cross1Icon className='hover:scale-125 transition-transform mt-4 mr-4 text-white h-6 w-6' />
                </Dialog.Overlay>
                <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl outline-none shadow-lg p-4">
                    <img src={imageUrl} className='max-w-xl rounded-xl overflow-hidden shadow-xl' alt="An image attached to a tweet." />
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}
export default TweetImage
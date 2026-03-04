import type { ShallowRef } from 'vue';
import type { EventHandlerItem } from '../types/modal';
import { CatchClick, CatchKeyDown } from '../shared/EventCatchers';

export const PREVENTED_KEYS = ['Escape'];

export const MODAL_EVENT_HANDLERS = (
    modalRef: Readonly<ShallowRef<HTMLDivElement | null>>,
    closeModal: () => void,
) =>
    <EventHandlerItem[]>[
        {
            eventName: 'click',
            eventHandler: (e) => CatchClick(modalRef, e, [closeModal]),
        },
        {
            eventName: 'keydown',
            eventHandler: (e) =>
                CatchKeyDown(e as KeyboardEvent, PREVENTED_KEYS, [closeModal]),
        },
    ];

import type { ShallowRef } from 'vue';
import type { EventHandlerItem, HugeModalInfoImage } from '../types/modal';
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

export const HUGE_MODAL_IMAGES: HugeModalInfoImage[] = [
    {
        src: 'https://img.freepik.com/free-photo/vertical-shot-river-surrounded-by-mountains-meadows-scotland_181624-27881.jpg',
        alt: 'mountains',
    },
    {
        src: 'https://img.freepik.com/free-photo/aerial-view-colorful-mixed-forest-shrouded-morning-fog-beautiful-autumn-day_1153-3817.jpg',
        alt: 'fog',
    },
    {
        src: 'https://img.freepik.com/free-photo/odenwald-germany-is-pure-nature_181624-32381.jpg',
        alt: 'lawn',
    },
    {
        src: 'https://img.freepik.com/free-photo/pathway-middle-green-leafed-trees-with-sun-shining-through-branches_181624-4539.jpg',
        alt: 'forest',
    },
];

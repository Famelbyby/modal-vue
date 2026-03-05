import type { HugeModalInfoImage, ModalKey } from '../types/modal';

export const PREVENTED_KEYS = ['Escape'];

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

export const MODAL_TYPES = [
    'casual-modal',
    'huge-modal',
    'numbered-modal',
    'scrolled-modal',
] as const;

export const SCROLLED_MODAL_REFS = ['ni', 'li'] as const;

import { defineAsyncComponent } from 'vue';
import type { ModalItem } from '../types/modal.manager';

export const MODALS: ModalItem[] = [
    {
        comp: defineAsyncComponent(
            () => import('@/components/dummy/Modals/CasualModal.vue'),
        ),
        modalKey: 'casual-modal',
    },
    {
        comp: defineAsyncComponent(
            () => import('@/components/dummy/Modals/ScrolledModal.vue'),
        ),
        modalKey: 'scrolled-modal',
    },
    {
        comp: defineAsyncComponent(
            () => import('@/components/dummy/Modals/HugeModal.vue'),
        ),
        modalKey: 'huge-modal',
    },
    {
        comp: defineAsyncComponent(
            () => import('@/components/dummy/Modals/NumberedModal.vue'),
        ),
        modalKey: 'numbered-modal',
    },
];

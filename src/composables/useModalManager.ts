import type { IModal } from '@/utils/types/modal';
import { computed, reactive } from 'vue';

const modals = reactive<IModal[]>([]);

export function useModalManager() {
    const modalsLen = computed(() => modals.length);
    const modal = computed(() =>
        modalsLen.value === 0 ? null : modals[modalsLen.value - 1],
    );

    function showModal(newModal: IModal) {
        modals.push(newModal);
    }

    function closeModal() {
        modals.pop();
    }

    function closeAllModals() {
        modals.length = 0;
    }

    return { modal, modalsLen, showModal, closeModal, closeAllModals };
}

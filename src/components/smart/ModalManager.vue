<script setup lang="ts">
import { useModalManager } from '@/composables/useModalManager';
import { MODALS } from '@/utils/consts/modal.manager';
import { computed } from 'vue';

const manager = useModalManager();
const activeModal = computed(() =>
    MODALS.find((item) => item.modalKey === manager.modal.value?.modal),
);
</script>

<template>
    <component
        v-if="manager.modal.value"
        :is="activeModal?.comp"
        v-bind="manager.modal.value"
        @close-modal="manager.closeModal"
        @close-all-modals="manager.closeAllModals"
        @open-modal="manager.showModal"
        :key="manager.modalsLen.value"
    />
</template>

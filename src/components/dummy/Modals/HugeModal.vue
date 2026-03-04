<script setup lang="ts">
import type { ModalEmits, ModalProps } from '@/utils/types/modal';
import BaseModal from './BaseModal.vue';

const props = defineProps<ModalProps>();
const emit = defineEmits<ModalEmits>();
</script>

<template>
    <BaseModal
        v-bind="props"
        classname="modal_huge"
        @close-modal="emit('closeModal')"
    >
        <div class="huge-info"></div>
    </BaseModal>
</template>

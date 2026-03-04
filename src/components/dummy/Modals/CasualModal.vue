<script setup lang="ts">
import type { ModalEmits, ModalProps } from '@/utils/types/modal';
import BaseModal from './BaseModal.vue';

const props = defineProps<ModalProps>();
const emit = defineEmits<ModalEmits>();
</script>

<template>
    <BaseModal v-bind="props" @close-modal="emit('closeModal')">
        <div class="casual-info">Тут ничего интересного!</div>
    </BaseModal>
</template>

<script setup lang="ts">
import type { ModalProps } from '@/utils/types/modal';
import BaseModal from './BaseModal.vue';

const props = defineProps<ModalProps>();
</script>

<template>
    <BaseModal v-bind="props">
        <div class="casual-info">Тут ничего интересного!</div>
    </BaseModal>
</template>

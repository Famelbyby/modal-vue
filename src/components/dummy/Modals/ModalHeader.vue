<script setup lang="ts">
import type { ModalHeaderEmits, ModalHeaderProps } from '@/utils/types/modal';
import Button from '../Button.vue';

const { title } = defineProps<ModalHeaderProps>();
const emit = defineEmits<ModalHeaderEmits>();
</script>

<template>
    <div class="modal-header">
        <div class="modal-header__title">
            {{ title }}
        </div>
        <Button
            class-name="modal-header__close"
            title="X"
            @click-event="emit('closeModal')"
        />
    </div>
</template>

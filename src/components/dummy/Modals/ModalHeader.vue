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
            class-name="modal-header__close-button"
            title="X"
            @click-event="emit('closeModal')"
        />
    </div>
</template>

<style lang="scss" scoped>
.modal {
    &-header {
        position: relative;

        &__close-button {
            position: absolute;
            top: 10px;
            right: 10px;
        }
    }
}
</style>

<script setup lang="ts">
import type { ModalEmits, ModalProps } from '@/utils/types/modal';
import BaseModal from './BaseModal.vue';
import { HUGE_MODAL_IMAGES } from '@/utils/consts/modal';

const props = defineProps<ModalProps>();
const emit = defineEmits<ModalEmits>();
</script>

<template>
    <BaseModal
        v-bind="props"
        classname="modal_huge"
        @close-modal="emit('closeModal')"
    >
        <div class="huge-info">
            <div class="huge-info__description">Полюбуйтесь природой!</div>
            <img
                v-for="image in HUGE_MODAL_IMAGES"
                class="huge-info__img"
                :src="image.src"
                :alt="image.alt"
                :key="image.src"
            />
        </div>
    </BaseModal>
</template>

<style lang="scss" scoped>
.huge-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;

    &__img {
        width: 300px;
        height: 300px;
    }
}
</style>

<script setup lang="ts">
import Button from '@/components/dummy/Button.vue';
import ModalManager from '@/components/smart/ModalManager.vue';
import { useModalManager } from '@/composables/useModalManager';
import { CREATE_MODAL_BUTTONS } from '@/utils/consts/create-modal.buttons';

const { showModal, closeModal } = useModalManager();
</script>

<template>
    <div class="main-page">
        <Button
            v-for="createButton in CREATE_MODAL_BUTTONS(showModal, closeModal)"
            v-bind="createButton"
            @click-event="createButton.action"
            :key="createButton.title"
        />
        <ModalManager />
    </div>
</template>

<style lang="scss" scoped>
.main-page {
    display: flex;
    flex-direction: column;

    align-items: start;
}
</style>

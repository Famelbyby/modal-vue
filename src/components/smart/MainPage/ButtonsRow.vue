<script setup lang="ts">
import { CREATE_MODAL_BUTTONS } from '@/utils/consts/create-modal.buttons';
import { useModalManager } from '@/composables/useModalManager';
import Button from '@/components/dummy/Button.vue';

const { showModal, closeModal } = useModalManager();
</script>

<template>
    <div class="buttons-row">
        <Button
            v-for="createButton in CREATE_MODAL_BUTTONS(showModal, closeModal)"
            v-bind="createButton"
            @click-event="createButton.action"
            :key="createButton.title"
        />
    </div>
</template>

<style lang="scss" scoped>
.buttons-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
}
</style>

<script setup lang="ts">
import type { ModalEmits, ModalProps } from '@/utils/types/modal';
import { computed, useTemplateRef } from 'vue';
import { AddListeners } from '@/utils/shared/AddListeners';
import { MODAL_EVENT_HANDLERS } from '@/utils/consts/modal';
import ModalHeader from './ModalHeader.vue';
import Button from '../Button.vue';

const { title, buttons, classname } = defineProps<ModalProps>();
const emit = defineEmits<ModalEmits>();
const modalRef = useTemplateRef('mr');

function closeModal() {
    emit('closeModal');
}

const modalEventHandlers = computed(() =>
    MODAL_EVENT_HANDLERS(modalRef, closeModal),
);

AddListeners(modalEventHandlers.value);
</script>

<template>
    <div class="modal-wrapper">
        <div ref="mr" class="modal" :class="classname">
            <ModalHeader :title @close-modal="closeModal" />
            <div class="modal-body">
                <slot>Modal body</slot>
            </div>
            <div class="modal-footer">
                <Button
                    v-for="modalButton in buttons"
                    @click-event="modalButton.action"
                    :key="modalButton.title"
                    v-bind="modalButton"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$wrapperBackground: rgba(219, 219, 219, 0.66);
$modalBackground: white;

.modal {
    display: flex;
    flex-direction: column;
    width: 40%;
    background: $modalBackground;
    height: 60%;
    border-radius: 10px;

    &-wrapper {
        position: fixed;

        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: start;
        padding-top: 20px;
        overflow-y: scroll;
        padding-bottom: 20px;
        box-sizing: border-box;

        background-color: $wrapperBackground;
    }

    &-header {
        display: flex;
        justify-content: center;
        position: relative;
        padding: 10px 0;

        &__close {
            position: absolute;
            right: 0;
            top: 0;
        }
    }

    &-body {
        display: flex;
        flex-grow: 1;
        justify-content: center;
        align-items: start;
        min-height: 0;
        padding: 30px;
        overflow-y: scroll;
    }

    &-footer {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 10px;
    }

    &_huge {
        height: 1500px;
    }
}
</style>

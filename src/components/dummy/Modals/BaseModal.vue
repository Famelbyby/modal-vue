<script setup lang="ts">
import type { ModalProps } from '@/utils/types/modal';
import { computed, onUpdated, useTemplateRef } from 'vue';
import { AddListeners } from '@/utils/shared/AddListeners';
import { MODAL_EVENT_HANDLERS } from '@/utils/modal/EventHandlers';
import ModalHeader from './ModalHeader.vue';
import Button from '../Button.vue';
import { useModalManager } from '@/composables/useModalManager';

const { title, buttons, classname, focus } = defineProps<ModalProps>();
const { closeModal } = useModalManager();
const modalRef = useTemplateRef('mr');

function beforeCloseModal() {
    const modal = modalRef.value;

    if (modal !== null) {
        modal.classList.add('modal_before-close');
    }

    setTimeout(() => {
        closeModal();
    }, 500);
}

const modalEventHandlers = computed(() =>
    MODAL_EVENT_HANDLERS(modalRef, beforeCloseModal),
);

AddListeners(modalEventHandlers.value);

onUpdated(() => {
    if (focus) {
        focus.focus();
    }
});
</script>

<template>
    <div class="modal-wrapper">
        <div ref="mr" class="modal" :class="classname">
            <ModalHeader :title @close-modal="beforeCloseModal" />
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
$animationDuration: 0.3s;

.modal {
    display: flex;
    flex-direction: column;
    width: 40%;
    background: $modalBackground;
    height: 60%;
    border-radius: 10px;

    animation: modal-appearing $animationDuration ease-in forwards;

    &-wrapper {
        position: fixed;

        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: start;
        padding-top: 20px;
        overflow-y: auto;
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
        flex-direction: column;
        justify-content: start;
        align-items: center;
        min-height: 0;
        padding: 20px 30px;
        overflow-y: auto;
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

    &_before-close {
        animation: modal-disappearing $animationDuration ease-in;
        animation-fill-mode: forwards;
    }
}

@keyframes modal-appearing {
    from {
        opacity: 0;
    }
}

@keyframes modal-disappearing {
    to {
        opacity: 0;
    }
}
</style>

<script setup lang="ts">
import type { ModalProps, NumberedModalEmits } from '@/utils/types/modal';
import BaseModal from './BaseModal.vue';
import { GetRandomModalKey } from '@/utils/modal/GetRandomModalKey';

const { count, classname, focus } = defineProps<ModalProps>();
const emit = defineEmits<NumberedModalEmits>();

const numberedModalButtons = [
    {
        title: 'Открыть ещё',
        action: () =>
            emit('openModal', {
                title: ``,
                buttons: [],
                count: (count || 1) + 1,
                modal: GetRandomModalKey(),
            }),
    },
    {
        title: 'Закрыть это окно',
        action: () => emit('closeModal'),
    },
    {
        title: 'Закрыть все окна',
        action: () => emit('closeAllModals'),
    },
];
</script>

<template>
    <BaseModal
        :title="`Окно №${count || 1}`"
        :buttons="numberedModalButtons"
        :classname
        :focus
    >
        <div class="numbered-info">
            Можете создать ещё одно окно, попробуйте
        </div>
    </BaseModal>
</template>

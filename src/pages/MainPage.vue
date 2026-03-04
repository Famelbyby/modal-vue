<script setup lang="ts">
import ButtonsRow from '@/components/smart/MainPage/ButtonsRow.vue';
import ModalManager from '@/components/smart/ModalManager.vue';
</script>

<template>
    <div class="main-page">
        <ButtonsRow />
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

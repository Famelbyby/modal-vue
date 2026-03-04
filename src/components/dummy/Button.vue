<script setup lang="ts">
import type { ButtonEmits, ButtonProps } from '@/utils/types/button';

const { title, className } = defineProps<ButtonProps>();
const emit = defineEmits<ButtonEmits>();
</script>

<template>
    <button
        class="base-button"
        :class="className"
        @click.stop="emit('clickEvent')"
    >
        {{ title }}
    </button>
</template>

<style lang="scss" scoped>
$baseButtonColor: white;
$closeButtonBackground: red;
$agreeButtonBackground: green;

.base-button {
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background: #d39c53;
    color: $baseButtonColor;
    cursor: pointer;
    transition-duration: 0.2s;
    margin: 5px;

    &:hover {
        transform: scale(1.1);
    }

    &:focus-visible {
        outline: none;
    }
}

.cancel-button {
    background-color: $closeButtonBackground;
    color: $baseButtonColor;
}

.agree-button {
    background-color: $agreeButtonBackground;
    color: $baseButtonColor;
}
</style>

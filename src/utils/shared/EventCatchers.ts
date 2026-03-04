import type { ShallowRef } from 'vue';

export function CatchClick(
    modalRef: Readonly<ShallowRef<HTMLElement | null>>,
    event: Event,
    functions: Array<() => void>,
) {
    const modal = modalRef.value;
    const target = <HTMLElement>event.target;

    if (modal !== null && !modal.contains(target)) {
        functions.forEach((fn) => fn());
    }
}

export function CatchKeyDown(
    event: KeyboardEvent,
    preventedKeys: string[],
    functions: Array<() => void>,
) {
    if (preventedKeys.includes(event.key)) {
        functions.forEach((fn) => fn());
    }
}

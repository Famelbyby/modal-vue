import { MODAL_TYPES } from '../consts/modal';
import type { ModalKey } from '../types/modal';

export function GetRandomModalKey(): ModalKey {
    return MODAL_TYPES[Math.floor(Math.random() * MODAL_TYPES.length)]!;
}

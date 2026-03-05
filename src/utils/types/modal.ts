import type { MODAL_TYPES } from '../consts/modal';
import type { IButton } from './button';

export type ModalProps = {
    title: string;
    classname?: string;
    buttons: IButton[];
    count?: number;
};

export type NumberedModalEmits = {
    (e: 'openModal', newModal: IModal): void;
    (e: 'closeAllModals'): void;
    (e: 'closeModal'): void;
};

export type ModalKey = (typeof MODAL_TYPES)[number];

export type IModal = ModalProps & {
    modal: ModalKey;
};

export type EventHandlerItem = {
    eventName: keyof DocumentEventMap;
    eventHandler: (e: Event) => void;
};

export type ModalHeaderProps = {
    title: string;
};

export type ModalHeaderEmits = {
    (e: 'closeModal'): void;
};

export type HugeModalInfoImage = {
    src: string;
    alt: string;
};

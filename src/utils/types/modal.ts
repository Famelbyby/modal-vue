import type { IButton } from './button';

export type ModalProps = {
    title: string;
    classname?: string;
    buttons: IButton[];
    count?: number;
};

export type ModalEmits = {
    (e: 'closeModal'): void;
};

export type NumberedModalEmits = ModalEmits & {
    (e: 'openModal', newModal: IModal): void;
    (e: 'closeAllModals'): void;
};

export type ModalKey =
    | 'casual-modal'
    | 'scrolled-modal'
    | 'huge-modal'
    | 'numbered-modal';

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

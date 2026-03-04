import type { IButton } from '../types/button';
import type { IModal } from '../types/modal';

export const CREATE_MODAL_BUTTONS = (
    showModal: (newModal: IModal) => void,
    closeModal: () => void,
) =>
    <IButton[]>[
        {
            title: 'Создать обычное модальное окно',
            action: () =>
                showModal({
                    title: 'Я обычное модальное окно...',
                    buttons: [
                        {
                            title: 'Закрыть',
                            action: closeModal,
                            className: 'cancel-button',
                        },
                    ],
                    modal: 'casual-modal',
                }),
        },
        {
            title: 'Создать прокручиваемое модальное окно',
            action: () =>
                showModal({
                    title: 'А я уже прокручиваемое модальное окно',
                    buttons: [
                        {
                            title: 'Принято',
                            action: closeModal,
                            className: 'agree-button',
                        },
                    ],
                    modal: 'scrolled-modal',
                }),
        },
        {
            title: 'Создать огромное модальное окно',
            action: () =>
                showModal({
                    title: 'Зато я самое большое модальное окно',
                    buttons: [
                        {
                            title: 'Красота!',
                            action: closeModal,
                            className: 'agree-button',
                        },
                    ],
                    modal: 'huge-modal',
                }),
        },
        {
            title: 'Создать нумерованное модальное окно',
            action: () =>
                showModal({
                    title: 'Окно №1',
                    buttons: [],
                    count: 1,
                    modal: 'numbered-modal',
                }),
        },
    ];

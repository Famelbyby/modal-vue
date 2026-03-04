import type { EventHandlerItem } from '@/utils/types/modal';
import { onBeforeUnmount, onMounted } from 'vue';

export function useModal(eventHandlers: EventHandlerItem[]) {
    onMounted(() => {
        eventHandlers.forEach((eventHandler) =>
            document.addEventListener(
                eventHandler.eventName,
                eventHandler.eventHandler,
            ),
        );
    });

    onBeforeUnmount(() => {
        eventHandlers.forEach((eventHandler) =>
            document.removeEventListener(
                eventHandler.eventName,
                eventHandler.eventHandler,
            ),
        );
    });
}

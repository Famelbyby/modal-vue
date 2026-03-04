import type { EventHandlerItem } from '@/utils/types/modal';
import { onBeforeUnmount, onMounted } from 'vue';

export function AddListeners(eventHandlers: EventHandlerItem[]) {
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

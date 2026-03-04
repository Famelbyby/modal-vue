export type ButtonProps = {
    title: string;
    className?: string;
};

export type ButtonEmits = {
    (e: 'clickEvent'): void;
};

export type IButton = ButtonProps & {
    action: () => void;
};

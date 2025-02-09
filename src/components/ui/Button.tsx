import { MouseEventHandler } from "react";

interface IButton {
    text?: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    width?: string;
    className?: string;
}

export const Button: React.FC<IButton> = ({
    text,
    onClick,
    width = "fit-content",
    className,
}) => {
    return (
        <button
            style={{ width: width }}
            className={`group cursor-pointer rounded-lg border border-accent-light/50 bg-white/15 hover:border-accent-light hover:shadow-light focus:outline-none focus-visible:outline-none dark:border-accent-dark/30 dark:bg-primary-dark/10 dark:hover:border-accent-dark dark:hover:shadow-dark ${className}`}
            onClick={onClick}
        >
            <p className="t leading-none font-bold decoration-accent-light group-hover:line-through before:content-['\00a0\00a0'] after:content-['\00a0\00a0'] dark:decoration-accent-dark">
                {text}
            </p>
        </button>
    );
};

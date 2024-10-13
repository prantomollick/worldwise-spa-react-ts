import { forwardRef, HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

import styles from "./Button.module.css";

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    isDisable?: boolean;
    className?: string;
    variant: "primary" | "back";
    type?: "button" | "submit" | "reset";

    // isActive?: boolean;
    // isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
    const {
        children,
        type = "button",
        className,
        variant,
        isDisable,
        ...rest
    } = props;

    return (
        <button
            ref={ref}
            data-component-name="Button"
            type={type}
            className={clsx(styles.btn, styles[variant], className)}
            disabled={isDisable}
            {...rest}
        >
            {children}
        </button>
    );
});

Button.displayName = "Button";

export default Button;

import React, { FC, HTMLAttributes, ReactNode } from "react";

interface IAppFooterProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}

const AppFooter: FC<IAppFooterProps> = ({ children, className, ...props }) => {
    return (
        <footer
            data-component-name="AppFooter"
            className={className}
            {...props}
        >
            {children}
        </footer>
    );
};

AppFooter.displayName = "AppFooter";

export default AppFooter;

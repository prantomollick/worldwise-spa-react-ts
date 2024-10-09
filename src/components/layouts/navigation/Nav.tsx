import {
    FC,
    HTMLAttributes,
    // JSXElementConstructor,
    // ReactElement,
    ReactNode
} from "react";

import clsx from "clsx";
import { NavLink } from "react-router-dom";

// const navItemChildCheck = (
//     children:
//         | ReactElement<unknown, string | JSXElementConstructor<unknown>>
//         | string
//         | number
//         | Iterable<React.ReactNode>
//         | React.ReactPortal
//         | boolean
//         | null
//         | undefined
// ): boolean => {
//     // @ts-expect-error: Ignore type errors as children can have mixed types
//     return children?.length > 1
//         ? // @ts-expect-error: children may be an array that requires mapping
//           children?.map((child) => child.type.displayName).includes("NavButton")
//         : //@ts-expect-error: children might be a single element with displayName
//           children?.type?.displayName === "NavButton";
// };

interface INavItemProps extends HTMLAttributes<HTMLLIElement> {
    children?: ReactNode;
    to: string;
    className?: string;
}
export const NavItem: FC<INavItemProps> = ({
    children,
    to,
    className,
    ...props
}) => {
    return (
        <li data-component-name="Nav/NavItem" className={className} {...props}>
            <NavLink to={to}>{children}</NavLink>
        </li>
    );
};

interface INavProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}
const Nav: FC<INavProps> = ({ children, className, ...props }) => {
    return (
        <nav data-component-name="Nav" className={clsx(className)} {...props}>
            <ul>{children}</ul>
        </nav>
    );
};

Nav.displayName = "Nav";
export default Nav;

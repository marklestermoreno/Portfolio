import { ReactNode } from 'react';
import "./utils.css"

import { Link as ScrollLink } from 'react-scroll';

import { usePathname } from 'next/navigation';

interface ActiveLinkProps {
    href: string;
    children: ReactNode;
}

const NavLink = ({ href, children }: ActiveLinkProps) => {

    const router = usePathname();
    const isActive = router === href;

    return (
        <ScrollLink activeClass="active"
            to={href}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            <p className={isActive ? 'active link' : 'link'}>{children}</p>
        </ScrollLink >
    );
};

export default NavLink;

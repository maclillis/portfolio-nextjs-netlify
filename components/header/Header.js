import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Tooltip, CircularProgress} from "@nextui-org/react";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import styles from './Header.module.scss'

const UserAvatar = dynamic(() => import('../utils/Avatar'), {
  ssr: true,
  loading: () =><CircularProgress size="sm" color="secondary" aria-label="Laddar..." />, // Optional loading indicator
});

export default function Header({ href, isActive, children }) {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;

    setIsScrolled(position > 30);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const router = useRouter();

  const navItems = [
    { label: 'Hem', path: '/' },
    { label: 'Om', path: '/om' },
    { label: 'Blogg', path: '/blogg' },
    { label: 'Projekt', path: '/projekt' },
    { label: 'Kontakt', path: '/kontakt' },
  ];

  return(
      <header id="header" className={`${styles.header} w-full`} >

      <Navbar isBlurred={false} className={isScrolled ? `${styles.navbar_wrap} ${styles.scrolled_navbar} fixed py-1 md:py-2 ` : `${styles.navbar_wrap} fixed py-1 md:py-2`}>
        <NavbarBrand className="navbar_brand">
        {isScrolled &&
        <Tooltip 
        showArrow
        placement="left"
        content="Psst. Jag letar uppdrag!"
        classNames={{
          base: [
            // arrow color
            "before:bg-neutral-400 dark:before:bg-white",
          ],
          content: [
            "py-2 px-4 shadow-xl",
            "text-black bg-gradient-to-br from-white to-neutral-400 text-xs",
          ],
        }}
      >
          <Link href="/#freelance_work" to="/#freelance_work" smooth={true} duration={1200}>
          <UserAvatar src="../../assets/images/marcus.webp" alt="Marcus Liljehammar" />
          </Link>
          </Tooltip>
          }
        </NavbarBrand>
        <NavbarContent className={`${styles.menu_wrap} gap-4 md:gap-6`}>
          {navItems.map((item, index) => (
            <NavbarItem key={index} isActive={router.pathname === item.path} className={`${styles.navbar_item}`}>
              <Link className="text-md md:text-xl" href={item.path}>{item.label}</Link>
            </NavbarItem>  
          ))}
        </NavbarContent>
      </Navbar>

      </header>
  ) 
}

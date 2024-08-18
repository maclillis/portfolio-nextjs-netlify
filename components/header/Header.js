import {Avatar, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './Header.module.scss'

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
          <Link href="/">
          <Avatar isBordered color="default" classNames={{img:"avatar_img"}} src="../../assets/images/marcus.webp" size="sm" />
          </Link>
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

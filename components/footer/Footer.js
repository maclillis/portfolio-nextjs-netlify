import {Link} from "@nextui-org/react";
import styles from './Footer.module.scss'
import { getCurrentYear } from '/utils/date';

export default function Footer() {
  const currentYear = getCurrentYear();
  return (
    <>
      <footer className={`${styles.footer} pb-11`}>
        <p className={`${styles.copyright_text} justify-center text-center px-10 text-xs lg:text-sm`}>Copyright © {currentYear} Marcus Liljehammar <span className={styles.copyright_pipe}> | </span> Gjord med ❤️ i <Link href="https://nextjs.org/" target="_blank"> Next.js</Link>, <Link href="https://react.dev/" target="_blank" >React</Link> & <Link href="https://www.sanity.io/" target="_blank" >Sanity</Link> <span className={styles.copyright_pipe}>|</span> Läs min <Link href="/integritetspolicy/">integritetspolicy</Link> eller ändra dina <Link href="/cookie-installningar/">cookieinställningar</Link>.</p>
      </footer>
    </>
  )
}

import styles from './Footer.module.scss'
import { getCurrentYear } from '/utils/date';

export default function Footer() {
  const currentYear = getCurrentYear();
  return (
    <>
      <footer className={`${styles.footer} py-11`}>
        <p className={`${styles.copyright_text} justify-center text-center px-10 text-xs lg:text-sm`}>Copyright © {currentYear} Marcus Liljehammar <span className={styles.copyright_pipe}> | </span> Gjord med ❤️ i <a href="https://nextjs.org/" target="_blank" >Next.js</a>, <a href="https://react.dev/" target="_blank" >React</a> & <a href="https://www.sanity.io/" target="_blank" >Sanity</a>.</p>
      </footer>
    </>
  )
}

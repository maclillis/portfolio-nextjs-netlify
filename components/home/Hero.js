import Image from 'next/image';
import styles from './Hero.module.scss';
import profileImg from '../../public/assets/images/marcus.webp';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Hero() {
    return( 
        <section className={`${styles.hero_wrap} w-full pt-24 pb-12 md:pb-14`}>
            <div className="inner_section w-full lg:max-w-5xl m-auto px-6 lg:px-10 relative">
                <div className={`${styles.welcome_wrap} w-full flex pb-8`}>
                    <p className={`${styles.welcome_text} md:pt-8 lg:pt-6`}>Hej! Jag heter Marcus.</p>
                </div>

                <h1 className={`${styles.headline_text} md:w-2/3 lg:w-1/2`}>Webbutvecklare & UX/Digital Designer</h1>
                <p className={`${styles.subline_text} w-40 text-sm md:w-2/3 pt-3 md:pt-1 md:text-lg`}>Bor & arbetar i Stockholm</p>

                <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                    <div className={styles.hero_bio_wrap}>
                        <p className={`${styles.hero_bio_text} py-5 md:pt-8`}>Jag har 12+ års erfarenhet att jobba professionellt med framställandet av vackra, enkla att använda och snabba webbappar och hemsidor som konverterar.</p>
                        <p className={styles.hero_bio_text}>Just nu jobbar som Webbutvecklare/UX Designerkonstult men gör även <Link href="#freelance_work "to="freelance_work" smooth={true} duration={1200}>mindre sidoprojekt</Link>.</p>
                    </div>
                    <div className={`${styles.profile_wrap} flex justify-center items-start absolute w-72 left-52 top-32 md:relative md:left-12 md:top-0 lg:absolute lg:left-2/4 lg:bottom-0 lg:w-96`}>
                        <Image src={profileImg} alt="Marcus Liljehammar" quality={50} className={`${styles.profile_hero_img} self-start w-70 md:self-end`} priority fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </div>
                </div>
            </div>
        </section>
    )
}
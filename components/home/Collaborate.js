import styles from './Collaborate.module.scss'
import { Link, Skeleton } from '@nextui-org/react';

export default function Collaborate() {
    return(
        <section className={`${styles.collaborate_wrap} w-full pt-6 lg:pt-14 pb-6 px-0 md:px-0`}>
            <div className="inner_section w-full lg:max-w-5xl m-auto px-5 lg:px-10">
                <h2 className={styles.section_heading}>Ska vi göra något kul ihop?</h2>
                <p className={`${styles.collaborate_description} py-4 md:w-3/4`}>Har du en idé som du vill verklighetställa? Jag gör mindre frilansprojekt och har en bred kompetens inom många digitala områden.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 md:pt-3 lg:px-5 lg:pt-8">
                    <div className="text-cols">
                        <p className={`${styles.collaborate_text}`}>Exempel på projekt skulle kunna vara: Portfolios, Webshoppar, Band-sidor (ja, dom behövs fortfarande), SaaS-startups, Magasin, förening/evenemang/klubbsidor eller bara en simpel blogg.</p>
                        <p className={`${styles.collaborate_text}`}>Mitt motto är alltid: "Om det relevant för människor, har man redan kommit en bra bit". Det och en kombination av en hög användarvänlighets-princip brukar ofta vara en win för alla inblandade.</p>
                    </div>
                    <div className="text-cols">
                        <p className={`${styles.collaborate_text}`}>Förutom de tekniska delarna kan jag också bistå med SEO, Produktdesign, innehållsproduktion och enklare fotografi och varumärkesutveckling.</p>
                        <p className={`${styles.collaborate_text}`}>Använd kontaktformuläret nedan eller lägg till mig på <Link href="https://www.linkedin.com/in/marcusliljehammar" target="_blank">LinkedIn</Link>, så tar vi det där ifrån.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
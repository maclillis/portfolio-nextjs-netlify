import styles from './WebKpis.module.scss'
import { Button, Link } from '@nextui-org/react';
import { CheckCircleIcon } from '@heroicons/react/24/outline'
export default function WebKpis() {
    return(
        <section className={`${styles.webkpis_wrap} section_bg py-4 lg:py-14 px-0 md:px-0 w-full`}>
            <div className="inner_section w-full lg:max-w-5xl m-auto px-6 lg:px-10">
                <h2 className={styles.section_heading}>Hur lyckas man med sin webb?</h2>
                <p className="section_description md:w-3/5">Dessa ord är det jag tror tillhör fundamentet för en lyckad digital satsning, vare sig det gäller en webbshop eller en blogg och är det jag följer som yrkesverksam.</p>

                <div className="grid gap-y-4 gap-x-0 py-5 lg:px-5 lg:inline-flex lg:gap-x-14 lg:py-10 lg:justify-center w-full">

                    <div className="flex justify-start lg:flex-col lg:items-center">
                        <CheckCircleIcon className={`${styles.icon_grid} stroke-1 lg:mb-4`} />
                        <p className={`${styles.webkpis_text} self-center pl-2`}>Relevans & Engagemang</p>
                    </div>

                    <div className="flex justify-start lg:flex-col lg:items-center">
                        <CheckCircleIcon className={`${styles.icon_grid} stroke-1 lg:mb-4`} />
                        <p className={`${`${styles.webkpis_text} self-center pl-2`} self-center `}>Skalbarhet & Fexibilitet</p>
                    </div>

                    <div className="flex justify-start lg:flex-col lg:items-center">
                        <CheckCircleIcon className={`${styles.icon_grid} stroke-1 lg:mb-4`} />
                        <p className={`${styles.webkpis_text} self-center pl-2`}>SEO & Produktdesign</p>
                    </div>

                </div>

                <div id="freelance_work" className="pt-5 flex justify-center">
                    <Link href="/blogg/hur-lyckas-man-med-sin-webb">
                        <Button className="button_base button_primary btn_internal py-2 px-4 w-full md:w-auto">Läs hela min pitch</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
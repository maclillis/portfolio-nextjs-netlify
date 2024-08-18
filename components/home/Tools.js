import styles from './Tools.module.scss'
import { Button, Link } from '@nextui-org/react';
import { PaintBrushIcon, Cog8ToothIcon, BuildingStorefrontIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'

export default function Tools() {
    return( 
        <section className={`${styles.tools_wrap} section_bg py-14 px-0 md:px-0 w-full`}>
            <div className="inner_section w-full lg:max-w-5xl m-auto px-6 lg:px-10">
                <h2 className={styles.section_heading}>Min verktygslåda</h2>

                <p className="section_description md:w-3/5">Även om teknik konstant ändras, så gillar jag att använda det som jag vet fungerar bäst.</p>

                <ul className="grid flex-col gap-y-4 py-5 m-auto lg:px-5 lg:inline-flex lg:flex-row lg:py-10">

                    <li className="flex m-auto md:m-0 lg:flex-col lg:items-center">
                        <PaintBrushIcon className={`${styles.icon_grid} stroke-1 lg:mb-4`} />
                        <p className={`${styles.tools_text} max-w-60 md:max-w-full md:self-center lg:text-center`}><span className={styles.bolder}>Protoyping/Design:</span> Figma, Illustrator & Photoshop.</p>
                    </li>

                    <li className="flex m-auto md:m-0 lg:flex-col lg:items-center">
                        <Cog8ToothIcon className={`${styles.icon_grid} stroke-1 lg:mb-4`} />
                        <p className={`${styles.tools_text} max-w-60 md:max-w-full md:self-center lg:text-center`}><span className={styles.bolder}>CMS/Backend:</span> Wordpress & Sanity.</p>
                    </li>

                    <li className="flex m-auto md:m-0 lg:flex-col lg:items-center">
                        <BuildingStorefrontIcon className={`${styles.icon_grid} stroke-1 lg:mb-4`} />
                        <p className={`${styles.tools_text} max-w-60 md:max-w-full md:self-center lg:text-center`}><span className={styles.bolder}>Frontend:</span> Vue, React (Next.js and Nuxt).</p>
                    </li>

                    <li className="flex m-auto md:m-0 lg:flex-col lg:items-center">
                        <ShoppingBagIcon className={`${styles.icon_grid} stroke-1 lg:mb-4`} />
                        <p className={`${styles.tools_text} max-w-60 md:max-w-full md:self-center lg:text-center`}><span className={styles.bolder}>Ecomm:</span> Woocommerce & Shopify.</p>
                    </li>

                </ul>

                <div className="pt-5 flex justify-center">
                    <Link href="/blogg/min-digitala-verktygslada">
                        <Button className="button_base button_primary btn_internal py-2 px-4 w-full md:w-auto">Läs mer om mina verktyg</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
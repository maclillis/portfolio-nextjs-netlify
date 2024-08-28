import Image from 'next/image';
import styles from './ProjectSpotlight.module.scss'
import Truncate from 'components/utils/TruncateText';
import { Button, Link } from '@nextui-org/react';
import { PortableText } from 'next-sanity';

export default function ProjectSpotlight({ workPosts }) {
    return( 
        <section className={`${styles.spotlight_wrap} py-6 lg:py-14 px-0 md:px-0 w-full`}>
            <div className="inner_section w-full lg:max-w-5xl m-auto px-6 lg:px-10">
                <h2 className={styles.section_heading}>Projekt i fokus</h2>
                <p className="section_description md:w-3/5 mb-4">Projekt jag tagit fram som jag känner bör visas upp lite extra.</p>
                
                <div className={`${styles.project_card_wrap} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-5 lg:py-6 lg:px-5`}>
                    {workPosts.map((workPost) => (
                    <article key={workPost._id} className={`${styles.project_card} flex flex-col m-auto md:m-0`}>
                        
                        <div className={`${styles.featured_thumbnail} mb-3`}>
                            <Image src={workPost.featured.asset.url} className={styles.spotlight_feat_image} alt={workPost.featured.alt} fill sizes="(max-width: 768px) 330px, (max-width: 1024px) 250px, 250px" />
                        </div>

                        <Link href={`/projekt/${workPost.slug.current}`}>
                            <h3 className="py-2"><Truncate text={workPost.title} maxLength={130} lines={3} /></h3>
                        </Link>

                        <div className="listing_assets py-3 h-50">
                            <p><Truncate text={workPost.excerpt} maxLength={130} lines={3} /></p>
                        </div>

                        <Link href={`/projekt/${workPost.slug.current}`} className="link_button justify-center text-lg py-2 px-0 w-full lg:justify-start lg:text-lg">Gå till projektet</Link>
                    </article>
                    ))}
                </div>

                <div className="pt-14 lg:pt-5 flex justify-center">
                    <Link href="/projekt">
                        <Button className="button_base button_primary btn_internal py-2 px-4 w-full md:w-auto">Se alla mina projekt</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
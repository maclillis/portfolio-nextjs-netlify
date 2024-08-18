import Header from '@components/header/Header';
import Head from 'next/head'
import Footer from '@components/footer/Footer';
import {Button, Breadcrumbs, BreadcrumbItem, Link, Chip} from "@nextui-org/react";
import { HandRaisedIcon, DevicePhoneMobileIcon,RectangleGroupIcon, MagnifyingGlassIcon, Cog8ToothIcon, ArchiveBoxIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'

import styles from './om.module.scss';

export default function About() {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
    return (
    <div className="container m-auto h-full">
        <Head>
            <title>Om | Marcus Liljehammar - Webbutvecklare & UX/UI Designer</title>
            <link rel="canonical" href={`${baseURL}/om/`} />
            <meta name="description" content="Plats för bifografi" />
        </Head>
        <Header />

        <main className={`${styles.about_main} w-full px-6 pt-24 flex items-start justify-start lg:max-w-5xl m-auto`}>
            <h1 className="page_title">Om</h1>

            <Breadcrumbs separator="/" itemClasses={{separator: "px-2 text-base"}} className="py-2 lg:py-6 breadcrumbs_wrap lg:pt-1 lg:pb-5">
                <BreadcrumbItem>
                    <Link href="/">Hem</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>Om</BreadcrumbItem>
            </Breadcrumbs>

            <section className="py-6 lg:py-8 w-full md:px-5">
                <h2 className="pb-4">Biografi</h2>
                <p className={`${styles.about_text} lg:max-w-2xl `}>I have 12+ years of professionally working with making beautiful, easy to use & performance-driven web apps and sites.</p>
            </section>

            <section className="py-6 lg:py-8 w-full md:px-5">
                <h2 className="pb-7">Erfarenhet</h2>
                <div className="grid grid-cols-3 gap-3 md:gap-6 pb-8">
                    <div className="col-span-1 text-center flex flex-col items-center">
                        <ShoppingBagIcon className={`${styles.icon_grid} stroke-1`} />
                        <h3 className={`${styles.experience_label} text-base lg:text-xl pt-2`}>E-commerce</h3>
                    </div>
                    <div className="col-span-1 text-center flex flex-col items-center m-auto">
                        <MagnifyingGlassIcon className={`${styles.icon_grid} stroke-1`} />
                        <h3 className={`${styles.experience_label} text-base lg:text-xl pt-2`}>SEO</h3>
                    </div>
                    <div className="col-span-1 text-center flex flex-col items-center m-auto">
                        <div className="flex flex-row justify-center">
                            <HandRaisedIcon className={`${styles.icon_grid} stroke-1`} />
                            <RectangleGroupIcon className={`${styles.icon_grid} stroke-1`} />
                        </div>
                        <h3 className={`${styles.experience_label} text-base lg:text-xl pt-2`}> UX/UI</h3>
                    </div>
                    <div className="col-span-1 text-center flex flex-col items-center m-auto">
                        <DevicePhoneMobileIcon className={`${styles.icon_grid} stroke-1`} />
                        <h3 className={`${styles.experience_label} text-base lg:text-xl pt-2`}>Mobile First RWD</h3>
                    </div>
                    <div className="col-span-1 text-center flex flex-col items-center m-auto">
                        <Cog8ToothIcon className={`${styles.icon_grid} stroke-1`} />
                        <h3 className={`${styles.experience_label} text-base lg:text-xl pt-2`}>Content Management</h3>
                    </div>
                    <div className="col-span-1 text-center flex flex-col items-center m-auto">
                        <ArchiveBoxIcon className={`${styles.icon_grid} stroke-1`} />
                        <h3 className={`${styles.experience_label} text-base lg:text-xl pt-2`}>Version Control</h3>
                    </div>
                </div>
                <p className={`${styles.about_text} py-0 md:py-8`}>Och även: Varumärkesutveckling & Marknadsföring, Grafisk design och Google Analytics/Tag Manager.</p>
            </section>

            <section className="py-6 lg:py-8 w-full md:px-5">
                <h2 className="pb-4">Skills</h2>
                <div className="grid grid-cols-3 gap-y-6">
                    <div className="col-span-2">
                        <h3 className={styles.skills_label}>Ramverk</h3>
                        <p className={styles.skills_models}>React, Vue (Next.js, Nuxt.js</p>
                    </div>
                    <div className="col-span-1 flex justify-center items-center">
                        <Chip className="text-white" size="md" variant="bordered">MEDELNIVÅ</Chip>
                    </div>
                    <div className="col-span-2">
                        <h3 className={styles.skills_label}>CMS</h3>
                        <p className={styles.skills_models}>Wordpress, Sanity & Strapi</p>
                    </div>
                    <div className="col-span-1 flex justify-center items-center">
                        <Chip className="text-white" size="md" variant="bordered" >MEDELNIVÅ</Chip>
                    </div>
                    <div className="col-span-2">
                        <h3 className={styles.skills_label}>Frontend</h3>
                        <p className={styles.skills_models}>HTML, CSS, JavaScript, TypeScript, JSON</p>
                    </div>
                    <div className="col-span-1 flex justify-center items-center">
                        <Chip className="text-white" size="md" variant="bordered">MEDELNIVÅ</Chip>
                    </div>
                    <div className="col-span-2">
                        <h3 className={styles.skills_label}>API</h3>
                        <p className={styles.skills_models}>REST, graphQL, Webhooks</p>
                    </div>
                    <div className="col-span-1 flex justify-center items-center text-white">
                        <Chip className="text-white" size="md" variant="bordered">MEDELNIVÅ</Chip>
                    </div>
                </div>
            </section>

            <section className="py-6 lg:py-8 w-full md:px-5">
                <h2 className="pb-4">Kodlogistik</h2>
                <p className={styles.about_text}>Versionshantering med GIT och Github och kunskap om CI/CD-utveckling</p>

                <div className="py-10 w-full flex justify-center">
                    <Link href="https://www.linkedin.com/in/marcusliljehammar/" target="_blank" className="max-w-7xl">
                        <Button className="button_base button_primary btn_external py-2 px-4 w-full">Se hela mitt CV på LinkedIn</Button>
                    </Link>
                </div>
            </section>
        </main>
        <Footer />
    </div>
    )
}
import Header from '@components/header/Header';
import Head from 'next/head'
import Footer from '@components/footer/Footer';
import ContactModule from '@components/modules/ContactModule';
import {Button, Breadcrumbs, BreadcrumbItem, Link} from "@nextui-org/react";
import styles from './kontakt.module.scss';

export default function About() {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
    return (
    <div className="container m-auto h-full">
        <Head>
            <title>Kontakt | Marcus Liljehammar - Webbutvecklare & UX/UI Designer</title>
            <link rel="canonical" href={`${baseURL}/kontakt/`} />
            <meta name="description" content="Vill du samarbete på något kul, eller har du redan en webb som behöver fräschas upp? Skicka gärna ett meddelande!" />
        </Head>
        <Header />

        <main className={`${styles.contact_main} w-full py-24 px-6 flex items-start justify-start lg:max-w-5xl m-auto`}>
            <h1 className="page_title">Kontakt</h1>

            <Breadcrumbs separator="/" itemClasses={{separator: "px-2 text-base"}} className="py-2 breadcrumbs_wrap lg:pt-1 lg:pb-5">
                <BreadcrumbItem>
                    <Link href="/">Hem</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>Kontakt</BreadcrumbItem>
            </Breadcrumbs>

            <p className={`${styles.contact_description} mt-5 lg:max-w-2xl`}>Vill du samarbete på något kul, eller har du redan en webb som behöver fräschas upp? </p>

            <p className={`${styles.contact_description} lg:max-w-2xl `}>Skicka ett meddelande och jag svarar så fort jag kan. Även om du bara vill säga hej.</p>

            <section className="py-6 w-full">
                <ContactModule classname="w-full" />
            </section>

            <section className="pt-5 pb-10">
                <h2>Socialt</h2>
                <p className={styles.about_text}>Vill du kontakta mig på Linkedin i stället? Det funkar också!</p>
            </section>

            <div className="pt-2 w-full flex justify-center">
                <Link className="linkedin_button" href="https://www.linkedin.com/in/marcusliljehammar" target="_blank">
                    <Button variant="bordered" className="linkedin_button button_base btn_external_white py-2 px-4 w-full  md:w-80">Gå till min LinkedIn</Button>
                </Link>
            </div>
        </main>
        <Footer />
    </div>
    )
}
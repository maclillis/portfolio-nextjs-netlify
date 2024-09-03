import React from "react";
import Header from '@components/header/Header';
import Head from 'next/head'
import Footer from '@components/footer/Footer';
import {Breadcrumbs, BreadcrumbItem, Link} from "@nextui-org/react";

export default function Page404() {

    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "404 - Sidan hittades inte",
        "description": "Sidan du sökte hittades inte. Antingen finns sidan inte eller så har den flyttats."
    };

    return(
        <div className="container m-auto h-full">
            <Head>
                <title>404 - Sidan hittades inte | Marcus Liljehammar - Webbutvecklare & UX/UI Designer</title>
                <link rel="canonical" href={`${baseURL}/404`} />
                <meta name="description" content="Sidan du sökte hittades inte. Antingen finns sidan inte eller så har den flyttats." />
                <meta name="robots" content="noindex, follow" />
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Head>
            <Header />
            <main className="w-full px-6 pt-24 flex items-start justify-start lg:max-w-5xl m-auto">
                <section>
                    <h1 className="page_title">Ojdå, sidan du sökte hittades inte</h1>

                    <Breadcrumbs separator="/" itemClasses={{separator: "px-2 text-base"}} className="py-2 breadcrumbs_wrap lg:pt-1 lg:pb-5">
                        <BreadcrumbItem>
                            <Link href="/">Hem</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>404</BreadcrumbItem>
                    </Breadcrumbs>
                </section>
                <section className="policy_content px-0 lg:px-32">

                    <h2>Antingen finns inte sidan eller så har den flyttats. :(</h2>

                    <p>Var säker på att du skrivit in rätt adress och försök igen, skulle problemet kvarstå kan du kontakta mig så kollar jag på det.
                        <Link href="/kontakt" >Kontaktformulär finner du på den här sidan</Link>. 
                    </p>

                    <p>Statuskod: 404</p>

                    <Link href="/">Gå tillbaka till startsidan</Link>
                </section>
            </main>
            <Footer />
        </div>
    );
};
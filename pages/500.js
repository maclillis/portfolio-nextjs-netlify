import React from "react";
import Header from '@components/header/Header';
import Head from 'next/head'
import Footer from '@components/footer/Footer';
import {Breadcrumbs, BreadcrumbItem, Link} from "@nextui-org/react";

export default function Page500() {

    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "500 - Sidan hittades inte",
        "description": "Ojdå, server-fel. Det verkar som det har skett något form av server-fel."
    };

    return(
        <div className="container m-auto h-full">
            <Head>
                <title>500 - Sidan hittades inte | Marcus Liljehammar - Webbutvecklare & UX/UI Designer</title>
                <link rel="canonical" href={`${baseURL}/500`} />
                <meta name="description" content="Ojdå, server-fel. Det verkar som det har skett något form av server-fel." />
                <meta name="robots" content="noindex, follow" />
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Head>
            <Header />
            <main className="w-full px-6 pt-24 flex items-start justify-start lg:max-w-5xl m-auto">
                <section>
                    <h1 className="page_title">Ojdå, server-fel</h1>

                    <Breadcrumbs separator="/" itemClasses={{separator: "px-2 text-base"}} className="py-2 breadcrumbs_wrap lg:pt-1 lg:pb-5">
                        <BreadcrumbItem>
                            <Link href="/">Hem</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>500</BreadcrumbItem>
                    </Breadcrumbs>
                </section>
                <section className="policy_content px-0 lg:px-32">

                    <h2>Det verkar som det har skett något form av server-fel.</h2>

                    <p>Det verkar vara något fel på den här webbplatsen för tillfället, kom tilbaka lite senare och försök igen. Skulle problemet kvarstå kontakta mig gärna så kollar jag på det.
                        <Link href="/kontakt" >Kontaktformulär finner du på den här sidan</Link>. 
                    </p>

                    <p>Statuskod: 500</p>

                    <Link href="/">Gå tillbaka till startsidan</Link>
                </section>
            </main>
            <Footer />
        </div>
    );
};
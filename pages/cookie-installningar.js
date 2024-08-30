import React from "react";
import Header from '@components/header/Header';
import Head from 'next/head'
import Footer from '@components/footer/Footer';
import { useEffect, useState } from 'react';
import {Breadcrumbs, BreadcrumbItem, Link, Button} from "@nextui-org/react";
import { useGoogleTagManager } from '../hooks/useGoogleTagManager';
import styles from './cookie-installningar.module.scss';

export default function CookieSettings() {

    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

    const [trackingAllowed, setTrackingAllowed] = useState(false);
    const { loadGoogleTagManager } = useGoogleTagManager();

    const handleAcceptCookies = () => {
        setTrackingAllowed(true);
        loadGoogleTagManager(); // Load GTM after user consent
        localStorage.setItem('trackingAllowed', 'true');
    };

    const handleDeclineCookies = () => {
        setTrackingAllowed(false);
        localStorage.setItem('trackingAllowed', 'false');

        const gtmScript = document.querySelector(`script[src^="https://www.googletagmanager.com/gtm.js"]`);
        if (gtmScript) {
          gtmScript.parentNode.removeChild(gtmScript);
        }
      
        const gtmNoscript = document.querySelector(`noscript`);
        if (gtmNoscript) {
          gtmNoscript.parentNode.removeChild(gtmNoscript);
        }

        // Additionally, clear any dataLayer events if necessary
        window.dataLayer = [];

        const hotjarScript = document.querySelector(`script[src^="https://static.hotjar.com/c/hotjar-"]`);
        if (hotjarScript) {
          hotjarScript.parentNode.removeChild(hotjarScript);
        }
      
        // Additionally, disable Hotjar tracking if it's already initialized
        if (window.hj && typeof window.hj === "function") {
          window.hj('optOut');
        }
      };

    return(
        <div className="container m-auto h-full">
            <Head>
                <title>Cookie-inställningar | Marcus Liljehammar - Webbutvecklare & UX/UI Designer</title>
                <link rel="canonical" href={`${baseURL}/cookie-installningar/`} />
                <meta name="description" content="Ändra dina Cookie-inställningar genom att antingen acceptera att jag spårar kakor (cookies) eller att avböja." />
            </Head>
            <Header />
            <main className={`${styles.blog_cookie}  w-full px-6 pt-24 flex items-start justify-start lg:max-w-5xl m-auto`}>
                <section>
                    <h1 className="page_title">Cookie-inställningar</h1>

                    <Breadcrumbs separator="/" itemClasses={{separator: "px-2 text-base"}} className="py-2 breadcrumbs_wrap lg:pt-1 lg:pb-5">
                        <BreadcrumbItem>
                            <Link href="/">Hem</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>Cookie-inställningar</BreadcrumbItem>
                    </Breadcrumbs>
                </section>
                <section className="policy_content px-0 lg:px-32 pt-8 h-5/6">
                    <p>Ändra dina Cookie-inställningar genom att antingen acceptera att jag spårar kakor (cookies) eller att avböja. Du kan läsa min <Link href="/cookie-policy">Cookie policy här</Link>.</p>

                    {!trackingAllowed &&
                        <div className="flex flex-col justify-content pt-4">
                        <p>Just nu är Cookies inte accepterat</p>
                        <Button className="button_base button_primary consent_button_yes w-full md:w-48 my-8" onClick={handleAcceptCookies} style={{ marginRight: "10px" }}>Godkänn</Button>
                    </div>
                    } {trackingAllowed &&
                    <div className="flex-col justify-content pt-4">
                        <p>Just nu är Cookies accepterat</p>
                        <Button className="bg-transparent text-white button_base btn_external flex justify-center items-center consent_button_no w-full md:w-48 my-8" onClick={handleDeclineCookies}>Avböj</Button>
                    </div>
                    }

                    <p>Har du några frågor kan du använda mailadressen nedan eller <Link href="/kontakt"> formuläret på den här sidan</Link></p>

                    <p className="pt-6">E-mail: <Link href="mailto:kontakt@marcusliljehammar.se">kontakt@marcusliljehammar.se</Link></p>

                </section>
            </main>
            <Footer />
        </div>
    );
};
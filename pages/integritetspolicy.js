import React from "react";
import Header from '@components/header/Header';
import Head from 'next/head'
import Footer from '@components/footer/Footer';
import {Breadcrumbs, BreadcrumbItem, Link} from "@nextui-org/react";
import styles from './cookie-policy.module.scss';

export default function Blog() {

    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;


    return(
        <div className="container m-auto h-full">
            <Head>
                <title>Integritetspolicy | Marcus Liljehammar - Webbutvecklare & UX/UI Designer</title>
                <link rel="canonical" href={`${baseURL}/integritetspolicy/`} />
                <meta name="description" content="Denna integritetspolicy förklarar hur Jag samlar in, använder, och skyddar din information när du besöker min webbplats." />
            </Head>
            <Header />
            <main className={`${styles.blog_cookie}  w-full px-6 pt-24 flex items-start justify-start lg:max-w-5xl m-auto`}>
                <section>
                    <h1 className="page_title">Integritetspolicy</h1>

                    <Breadcrumbs separator="/" itemClasses={{separator: "px-2 text-base"}} className="py-2 breadcrumbs_wrap lg:pt-1 lg:pb-5">
                        <BreadcrumbItem>
                            <Link href="/">Hem</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>Integritetspolicy</BreadcrumbItem>
                    </Breadcrumbs>
                </section>
                <section className="policy_content px-0 lg:px-32">
                    <h2>1. Introduktion</h2>

                    <p>Jag värnar om din integritet och skyddar dina personuppgifter. Denna integritetspolicy förklarar hur Jag samlar in, använder, och skyddar din information när du besöker min webbplats.</p>

                    <h2>2. Vilka uppgifter jag samlar in</h2>

                    <p>När du besöker min webbplats kan Jag samla in följande typer av uppgifter:</p>

                    <ol>
                        <li><strong>Personlig information:</strong> Dessa cookies är avgörande för att webbplatsen ska fungera korrekt. De gör det möjligt för dig att navigera på webbplatsen och använda dess funktioner, såsom tillgång till säkra områden.</li>
                        <li><strong>Automatiskt insamlad information:</strong> Jag använder Google Analytics och Hotjar för att samla in anonymiserad data om hur besökare använder min webbplats. Dessa cookies hjälper oss att förstå vilka sidor som är mest och minst populära, och hur besökare rör sig på webbplatsen.</li>
                    </ol>

                    <h2>3. Hur jag använder insamlade uppgifter</h2>

                    <p>Jag använder den information Jag samlar in för att:</p>

                    <ol>
                        <li>Förstå hur min webbplats används och förbättra din upplevelse.</li>
                        <li>Analysera besöksstatistik med hjälp av verktyg som Google Analytics.</li>
                        <li>Hantera och spåra taggar och skript på webbplatsen via Google Tag Manager.</li>
                        <li>Få insikt i användarnas beteende och förbättra användarupplevelsen genom värmekartor och sessioninspelningar med Hotjar.</li>
                    </ol>

                    <h2>4. Cookies och liknande teknologier</h2>

                    <p>Jag använder cookies och liknande teknologier för att spåra din aktivitet på min webbplats och spara vissa inställningar. Du kan välja att acceptera eller avvisa icke-nödvändiga cookies genom min cookie-kontrollfunktion. Läs mer om hur Jag använder cookies i min <Link href="/cookie-policy">Cookie Policy</Link>.</p>

                    <h2>5. Tredjepartsleverantörer</h2>

                    <p>Jag använder följande tredjepartsverktyg för att förbättra min tjänst:</p>

                    <ol>
                        <li><strong>Google Analytics:</strong> Jag använder Google Analytics för att samla in anonymiserad information om hur besökare använder min webbplats. Informationen skickas till och lagras av Google i USA. Google kan också överföra denna information till tredje parter om det krävs enligt lag eller om tredje parter behandlar informationen å Googles vägnar.</li>
                        <li><strong>Google Tag Manager:</strong>Detta verktyg hanterar och implementerar taggar på min webbplats, vilket möjliggör snabb och enkel uppdatering av spårningskoder och liknande.</li>
                        <li><strong>Hotjar:</strong>Jag använder Hotjar för att få insikter om användarens beteende genom värmekartor, inspelningar och undersökningar. Hotjar samlar in anonymiserade data för att förbättra webbplatsens användbarhet.</li>
                    </ol>

                    <h2>6. Rättslig grund för behandling</h2>

                    <p>Min behandling av dina personuppgifter baseras på:</p>

                    <ol>
                        <li><strong>Samtycke:</strong> När du accepterar min användning av icke-nödvändiga cookies och verktyg som samlar in data.</li>
                        <li><strong>Berättigat intresse:</strong>För att analysera och förbättra min webbplats och tjänster.</li>
                    </ol>

                    <h2>7. Dina rättigheter</h2>

                    <p>Du har rätt att:</p>

                    <ol>
                        <li>Få tillgång till dina personuppgifter som Jag behandlar.</li>
                        <li>Begära rättelse av felaktiga eller ofullständiga uppgifter.</li>
                        <li>Begära radering av dina personuppgifter (”rätten att bli bortglömd”).</li>
                        <li>Begränsa behandlingen av dina personuppgifter under vissa omständigheter.</li>
                        <li>Invända mot behandlingen av dina personuppgifter.</li>
                        <li>Begära en kopia av dina personuppgifter i ett strukturerat, vanligt förekommande och maskinläsbart format (dataportabilitet).</li>
                    </ol>

                    <p>För att utöva dina rättigheter, vänligen kontakta oss via kontaktinformationen nedan eller <Link href="/kontakt">formuläret på den här sidan</Link>.</p>

                    <h2>8. Lagring av uppgifter</h2>

                    <p>Jag behåller dina personuppgifter så länge som det är nödvändigt för att uppfylla de ändamål som beskrivs i denna policy, eller som krävs enligt lag.</p>

                    <h2>9. Säkerhet</h2>

                    <p>Jag vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda dina personuppgifter mot obehörig åtkomst, förlust, eller förstörelse.</p>

                    <h2>8. Kontaktinformation</h2>

                    <p>Om du har några frågor om denna integritetspolicy eller min behandling av dina personuppgifter, vänligen kontakta oss:</p>

                    <p className="pt-6">E-mail: <Link href="mailto:kontakt@marcusliljehammar.se">kontakt@marcusliljehammar.se</Link></p>

                </section>
            </main>
            <Footer />
        </div>
    );
};
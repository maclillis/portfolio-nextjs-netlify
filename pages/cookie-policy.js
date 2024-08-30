import React from "react";
import Header from '@components/header/Header';
import Head from 'next/head'
import Footer from '@components/footer/Footer';
import {Breadcrumbs, BreadcrumbItem, Link, Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Code} from "@nextui-org/react";
import styles from './cookie-policy.module.scss';

export default function CookiePolicy() {

    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

    const classNames = React.useMemo(
        () => ({
          wrapper: ["policy_table_bg"],
          table: ["w-full"],
          thead: ["policy_table_head_bg"],
          th: ["bg-transparent", "text-white", "text-base"],
          td: ["text-sm"],
        }),
        [],
      );

    return(
        <div className="container m-auto h-full">
            <Head>
                <title>Cookie Policy | Marcus Liljehammar - Webbutvecklare & UX/UI Designer</title>
                <link rel="canonical" href={`${baseURL}/cookie-policy/`} />
                <meta name="description" content="Denna Cookie-policy förklarar vad cookies är, hur jag använder dem på min webbplats, och vilka valmöjligheter du har angående dem." />
            </Head>
            <Header />
            <main className={`${styles.blog_cookie}  w-full px-6 pt-24 flex items-start justify-start lg:max-w-5xl m-auto`}>
                <section>
                    <h1 className="page_title">Cookie policy</h1>

                    <Breadcrumbs separator="/" itemClasses={{separator: "px-2 text-base"}} className="py-2 breadcrumbs_wrap lg:pt-1 lg:pb-5">
                        <BreadcrumbItem>
                            <Link href="/">Hem</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>Cookie Policy</BreadcrumbItem>
                    </Breadcrumbs>
                </section>
                <section className="policy_content px-0 lg:px-32">
                    <h2>1. Introduktion</h2>

                    <p>Denna Cookie-policy förklarar vad cookies är, hur jag använder dem på min webbplats, och vilka valmöjligheter du har angående dem. Jag är engagerade i att skydda din integritet och säkerställa att du får en transparent och informerad upplevelse på min webbplats.</p>

                    <h2>2. Vad är cookies?</h2>

                    <p>Cookies är små textfiler som lagras på din enhet när du besöker en webbplats. De används för att förbättra användarupplevelsen genom att komma ihåg dina inställningar och aktiviteter. Cookies kan också användas för att spåra användares beteende och samla in anonymiserad data för att förbättra webbplatsens prestanda.</p>

                    <h2>3. Vilka typer av cookies jag använder</h2>

                    <p>Jag använder följande typer av cookies på min webbplats:</p>

                    <ol>
                        <li><strong>Nödvändiga cookies:</strong> Dessa cookies är avgörande för att webbplatsen ska fungera korrekt. De gör det möjligt för dig att navigera på webbplatsen och använda dess funktioner, såsom tillgång till säkra områden.</li>
                        <li><strong>Analys- och prestandacookies:</strong> Jag använder Google Analytics och Hotjar för att samla in anonymiserad data om hur besökare använder min webbplats. Dessa cookies hjälper oss att förstå vilka sidor som är mest och minst populära, och hur besökare rör sig på webbplatsen.</li>
                        <li><strong>Funktionalitetscookies:</strong> Dessa cookies gör det möjligt för webbplatsen att komma ihåg val du gör (som ditt användarnamn, språk eller region) och ge förbättrade, mer personliga funktioner.</li>
                        <li><strong>Marknadsföringscookies:</strong> Jag kan använda marknadsföringscookies för att spåra besök på min webbplats och för att skapa anpassade annonser som är relevanta för dig på andra webbplatser.</li>
                    </ol>

                    <h2>4. Tredjepartsverktyg jag använder</h2>

                    <p>Jag använder följande tredjepartsverktyg som ställer in cookies på din enhet:</p>

                    <ol>
                        <li><strong>Google Analytics:</strong> Detta verktyg ställer in cookies för att samla in information om hur besökare använder min webbplats. Dessa cookies samlar in data i anonym form, inklusive antalet besökare, varifrån besökarna har kommit till webbplatsen och vilka sidor de har besökt. Läs mer om Google Analytics cookies och hur du kan kontrollera dem här.</li>
                        <li><strong>Google Tag Manager:</strong> Detta är ett verktyg som hjälper oss att hantera webbplatsens taggar på ett enkelt och effektivt sätt. Det ställer inte själv in några cookies, men det kan aktivera andra cookies som kan samlas in av de taggar som hanteras.</li>
                        <li><strong>Hotjar:</strong> Jag använder Hotjar för att förstå mina användares behov bättre och optimera denna tjänst och användarupplevelse. Hotjar är en tjänst som hjälper oss att bättre förstå mina användares upplevelser (t.ex. hur mycket tid de spenderar på vilka sidor, vilka länkar de väljer att klicka på, vad användarna gör och inte gillar osv.) och detta gör att jag kan bygga och underhålla min tjänst med användarfeedback. Läs mer om Hotjar cookies här.</li>
                    </ol>


                    <h2>5. Hur du kan hantera cookies</h2>

                    <p>Du kan styra och hantera cookies på olika sätt:</p>

                    <ol>
                        <li><strong>Webbläsarinställningar:</strong> De flesta webbläsare låter dig välja om du vill acceptera cookies eller inte. Du kan ställa in din webbläsare så att den meddelar dig när du får en cookie, eller så kan du välja att blockera alla cookies.</li>
                        <li><strong>Cookie Consent-verktyg:</strong> När du besöker min webbplats för första gången kommer du att presenteras med en cookie-banner som låter dig välja vilka typer av cookies du vill tillåta. Du kan när som helst ändra dina preferenser genom att klicka på “Cookie-inställningar” längst ner på sidan.</li>
                        <li><strong>Opt-out från tredjepartscookies:</strong> Du kan välja att stänga av specifika tredjepartscookies via deras egna opt-out mekanismer, t.ex. genom att besöka Google Analytics opt-out sida eller genom att använda verktyg som Your Online Choices.</li>
                    </ol>

                    <h2>6. Ändringar av denna Cookie-policy</h2>

                    <p>Jag kan uppdatera denna Cookie-policy för att återspegla förändringar i min användning av cookies, eller på grund av operativa, juridiska eller lagstiftningsmässiga skäl. Vänligen besök denna sida regelbundet för att hålla dig informerad om min användning av cookies och relaterade teknologier.</p>

                    <h2>7. Dessa cookies använder jag på den här webbplatsen.</h2>

                    </section>

                    <section className="w-full px-0 lg:px-14 py-4">

                        <Table className="cookies_list" classNames={classNames} isCompact aria-label="Detaljerad tabell på Cookies som används på den här webbplatsen.">
                            <TableHeader>
                                <TableColumn>Cookie-namn</TableColumn>
                                <TableColumn>Leverantör</TableColumn>
                                <TableColumn>Syfte</TableColumn>
                                <TableColumn>Typ</TableColumn>
                                <TableColumn>Varaktighet</TableColumn>
                            </TableHeader>
                            <TableBody>
                                <TableRow key="1">
                                <TableCell><Code color="default" size="sm" className="text-white text-xs">_ga</Code></TableCell>
                                <TableCell>Google Analytics</TableCell>
                                <TableCell>Används för att särskilja användare och spåra webbplatsaktivitet anonymt.</TableCell>
                                <TableCell>Analys</TableCell>
                                <TableCell>2 år</TableCell>
                                </TableRow>
                                <TableRow key="2">
                                <TableCell><Code color="default" size="sm" className="text-white text-xs">_gid</Code></TableCell>
                                <TableCell>Hotjar</TableCell>
                                <TableCell>Identifierar om användarens session ingår i ett urval som används för att generera heatmaps och sessioninspelningar.</TableCell>
                                <TableCell>Funktionalitet</TableCell>
                                <TableCell>Session</TableCell>
                                </TableRow>
                                <TableRow key="3">
                                <TableCell><Code color="default" size="sm" className="text-white text-xs">_hjClosedSurveyInvites</Code></TableCell>
                                <TableCell>Hotjar</TableCell>
                                <TableCell>Används för att säkerställa att användare inte får upp samma undersökningsinbjudan flera gånger.</TableCell>
                                <TableCell>Funktionalitet</TableCell>
                                <TableCell>1 år</TableCell>
                                </TableRow>
                                <TableRow key="4">
                                <TableCell><Code color="default" size="sm" className="text-white text-xs">_gcl_au</Code></TableCell>
                                <TableCell>Google Tag Manager</TableCell>
                                <TableCell>Används av Google AdSense för att experimentera med effektiviteten i annonsering på webbplatser som använder deras tjänster.</TableCell>
                                <TableCell>Marknadsföring</TableCell>
                                <TableCell>3 månader</TableCell>
                                </TableRow>
                                <TableRow key="5">
                                <TableCell><Code color="default" size="sm" className="text-white text-xs">cookieconsent_status</Code></TableCell>
                                <TableCell>Webbplatsen</TableCell>
                                <TableCell>Används för att spara användarens val av cookie-inställningar.</TableCell>
                                <TableCell>Nödvändigt</TableCell>
                                <TableCell>1 år</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>

                    </section>

                    <section className="policy_content px-0 lg:px-32">

                    <h2>8. Kontaktinformation</h2>

                    <p>Om du har några frågor om min användning av cookies eller om du vill utöva dina rättigheter enligt GDPR, vänligen kontakta oss:</p>

                    <p className="pt-6">E-mail: <Link href="mailto:kontakt@marcusliljehammar.se">kontakt@marcusliljehammar.se</Link></p>

                </section>
            </main>
            <Footer />
        </div>
    );
};
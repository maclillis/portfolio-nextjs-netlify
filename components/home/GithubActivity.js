import styles from './GithubActivity.module.scss';
import { useEffect, useRef } from 'react';
import { Button, Link } from '@nextui-org/react';

export default function GithubActivity() {
    const imgRef = useRef(null);

    useEffect(() => {
      const img = imgRef.current;
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            img.src = img.dataset.src;
            observer.disconnect();
          }
        });
      });
  
      observer.observe(img);
      return () => observer.disconnect();
    }, []);
    return(
        <section className={`${styles.github_wrap} section_bg py-4 lg:py-14 px-0 w-full md:px-0`}>
            <div className="inner_section w-full lg:max-w-5xl m-auto px-6 lg:px-10">
                <h2 className={styles.section_heading}>Github-aktivitet</h2>
                <p className="section_description md:w-3/5">Jobbet är inte det ända jag "pushar" för, om du förstår vad jag menar. Här nedan visar jag min commit-historik på GitHub – liten men naggande god.</p>

                <article className="github_calendar_wrap m-auto flex justify-center py-4 lg:py-12">
                    <img ref={imgRef} className="w-full lg:max-w-3xl" data-src="https://ghchart.rshah.org/CBA6DD/maclillis" alt="Marcus Liljehammar's Github commits under hela året" width="800" height="300" />
                </article>

                <div className="pt-5 flex justify-center">
                    <Link href="https://www.github.com/maclillis" className="">
                        <Button className="button_base button_primary btn_external py-2 px-4 w-full md:w-auto">Besök min Github</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
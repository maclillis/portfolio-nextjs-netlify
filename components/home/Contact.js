import ContactModule from '../modules/ContactModule';
import styles from './Contact.module.scss'

export default function Contact() {

    return (
        <section className={`${styles.contact_wrap} pb-14 px-0 md:px-0 w-full lg:pb-5`}>
            <div className="inner_section w-full lg:max-w-5xl m-auto px-5 lg:px-10">
                <h2 className={styles.section_heading}>Kontakt</h2>
                <p className="section_description md:w-3/5">Vill du prata samarbete eller bara säga hej? Jag finns här oavsett.</p>

                <div className="flex justify-center w-full m-auto md: w-96 lg:px-5">
                    <ContactModule classname="w-full" />
                </div>
            </div>
        </section>
    )
}
import styles from './LatestBlog.module.scss'
import { Button, Link, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';

import Truncate from 'components/utils/TruncateText';
import { format } from 'date-fns';

export default function LatestBlog({ blogPosts }) {
    return(
        <section className={`${styles.latest_blog_wrap} w-full py-6 lg:py-14 px-0 md:px-0`}>
            <div className="inner_section w-full lg:max-w-5xl m-auto px-6 lg:px-10">
                <h2 className={styles.section_heading}>Senaste från bloggen</h2>
                <p className="section_description md:w-3/5">Små men roliga och insiktsfulla historier från mitt yrkesliv.</p>

                <div className="grid grid-cols-1 gap-x-5 pt-6 md:grid-cols-2 lg:grid-cols-3 lg:px-5 lg:py-6">

                {blogPosts.map((blogPost) => (
                    <article key={blogPost._id} className="pb-6 h-full">
                        <Link href={`/blogg/${blogPost.slug.current}`} disableAnimation className="card_link_wrap" isBlock={false}>
                            <Card shadow="lg" isPressable isHoverable isBlurred className="listing_blog_card p-4 h-full">
                                <CardHeader className="p-0 text-left h-28 items-start">
                                        <h3 className="pb-7"><Truncate text={blogPost.title} maxLength={130} lines={3} /></h3>
                                </CardHeader>
                                <CardBody className="overflow-visible p-0">
                                    <p className="listing_blog_datestamp">{format(new Date(blogPost.publishedAt), 'd MMMM yyy')}</p>
                                    <div className="listing_blog_excerpt py-4 h-32">
                                        <Truncate text={blogPost.exerpt} maxLength={130} lines={6} />
                                    </div>
                                </CardBody>
                                <CardFooter className="justify-between p-0">
                                    <div className="link_button flex items-center text-center md:text-left justify-center md:justify-start py-2 px-0 w-full">Läs hela inlägget</div>
                                </CardFooter>
                            </Card>
                        </Link>
                    </article>
                    ))}

                </div>

                <div className="flex justify-center">
                    <Link href="/blogg">
                        <Button className="button_base button_primary btn_internalpx-4 w-full md:w-auto">Se alla blogginlägg</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
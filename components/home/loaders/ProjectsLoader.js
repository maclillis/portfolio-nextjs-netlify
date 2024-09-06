import styles from '../ProjectSpotlight.module.scss'
import { Card, CardHeader, CardBody, CardFooter, Skeleton} from '@nextui-org/react';

export default function ProjectsLoader() {

    const iterations = 3;

    return( 
        <section className={`${styles.spotlight_wrap} py-6 lg:py-14 px-0 md:px-0 w-full`}>
            <div className="inner_section w-full lg:max-w-5xl m-auto px-6 lg:px-10">
                <Skeleton className="flex rounded-2xl w-1/2 h-7 opacity-20"/>
                <Skeleton className="flex rounded-lg w-full h-5 opacity-20 mt-4"/>
                <Skeleton className="flex rounded-lg w-1/2 h-5 lg:hidden opacity-20 mt-2"/>
                
                <div className={`${styles.project_card_wrap} w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-5 lg:py-6 lg:px-5`}>
                {Array.from({ length: iterations }).map((_, index) => (
                    <Card key={index} className={"project_card w-full flex flex-col m-auto md:m-0"}>
                        
                        <CardHeader className={`${styles.featured_thumbnail} w-full m-auto`}>
                            <Skeleton className="flex rounded-lg w-full h-28 lg:h-26 my-4 opacity-20"/>
                        </CardHeader>

                        <CardBody className="card_body">
                            <Skeleton className="flex rounded-full w-5/4 h-5 opacity-20"/>
                            <Skeleton className="flex rounded-full w-1/2 h-5 opacity-20 mt-3 lg:mt-2"/>

                            <div className="listing_assets text-base py-3 h-50">
                                <Skeleton className="flex rounded-lg w-full h-16 my-5 opacity-20"/>
                            </div>
                        </CardBody>

                        <CardFooter className="text-left flex items-center">
                            <Skeleton className="flex rounded-lg w-1/2 h-6 m-auto opacity-20"/>
                        </CardFooter>

                    </Card>
                ))}
                </div>

                <div className="pt-14 lg:pt-5 flex justify-center">
                    <Skeleton className="flex rounded-full w-2/3 lg:w-80 h-12 lg:h-10 opacity-20"/>
                </div>
            </div>
        </section>
    )
}
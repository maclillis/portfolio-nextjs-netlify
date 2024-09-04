
import { Skeleton } from "@nextui-org/react";
import styles from './Collaborate.module.scss'

const CollaborateLoader = () => {
  return (
    <section className={`${styles.collaborate_wrap} w-full pt-14 pb-6 px-0 md:px-0`}>
        <div className="inner_section w-full lg:max-w-5xl m-auto px-5 lg:px-10">
            <Skeleton className="w-80 rounded-lg opacity-20 mb-5">
                <div className="w-full h-10 bg-default-100"></div>
            </Skeleton>
            <Skeleton className="w-3/4 rounded-lg opacity-20 mb-3">
                <div className="w-full h-6 bg-default-100"></div>
            </Skeleton>
            <Skeleton className="w-3/4 rounded-lg opacity-20">
                <div className="w-full h-6 bg-default-100"></div>
            </Skeleton>

            <div className="grid grid-cols-1 gap-y-7 pt-6 md:grid-cols-2 md:gap-8 md:pt-3 lg:px-5 lg:pt-8">
                <Skeleton className="w-full rounded-lg opacity-20">
                    <div className="h-24 rounded-lg bg-default-300"></div>
                </Skeleton>
                <Skeleton className="w-full rounded-lg opacity-20">
                    <div className="h-20 rounded-lg bg-default-300"></div>
                </Skeleton>
                <Skeleton className="w-full rounded-lg opacity-20">
                    <div className="h-14 rounded-lg bg-default-300"></div>
                </Skeleton>
                <Skeleton className="w-full rounded-lg opacity-20">
                    <div className="h-12 rounded-lg bg-default-300"></div>
                </Skeleton>
            </div>
        </div>
    </section>
  );
};

export default CollaborateLoader;
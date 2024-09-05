
import { Skeleton } from "@nextui-org/react";
import styles from '../WebKpis.module.scss'

const WebKpisLoader = () => {
  return (
    <section className={`${styles.webkpis_wrap} section_bg py-4 lg:py-14 px-0 md:px-0 w-full`}>
        <div className="inner_section w-full lg:max-w-5xl m-auto px-5 lg:px-10">
            <Skeleton className="w-80 rounded-lg opacity-20 mb-3 lg:mb-5">
                <div className="w-full h-6 bg-default-100 lg:h-7"></div>
            </Skeleton>
            <Skeleton className="w-20 rounded-lg opacity-20 mb-5 lg:hidden">
                <div className="w-full h-6 bg-default-100"></div>
            </Skeleton>
            <Skeleton className="w-3/4 rounded-lg opacity-20 mb-3 lg:w-2/3">
                <div className="w-full h-16 lg:h-16 bg-default-100"></div>
            </Skeleton>

            <div className="grid flex-col gap-y-7 lg:gap-y-6 lg:gap-x-12 py-8 md:py-3 lg:px-5 lg:inline-flex lg:flex-row lg:py-6 lg:justify-center w-full">
                <div className="flex md:m-0 lg:flex-col lg:items-center lg:justify-center">
                    <Skeleton className="w-10 h-10 lg:w-12 lg:h-12 rounded-full opacity-20 me-4 lg:me-0 lg:mb-6">
                        <div className="bg-default-300"></div>
                    </Skeleton>
                    <Skeleton className="w-56 lg:w-52 rounded-lg opacity-20">
                        <div className={`${styles.webkpis_text} h-10 lg:h-6 rounded-lg bg-default-300 max-w-60 md:max-w-full md:self-center lg:text-center`}></div>
                    </Skeleton>
                </div>
                <div className="flex md:m-0 lg:flex-col lg:items-center lg:justify-center">
                    <Skeleton className="w-10 h-10 lg:w-12 lg:h-12 rounded-full opacity-20 me-4 lg:me-0 lg:mb-6">
                        <div className="bg-default-300"></div>
                    </Skeleton>
                    <Skeleton className="w-56 lg:w-52 rounded-lg opacity-20">
                        <div className={`${styles.webkpis_text} h-10 lg:h-6 rounded-lg bg-default-300 max-w-60 md:max-w-full md:self-center lg:text-center`}></div>
                    </Skeleton>
                </div>
                <div className="flex md:m-0 lg:flex-col lg:items-center lg:justify-center">
                    <Skeleton className="w-10 h-10 lg:w-12 lg:h-12 rounded-full opacity-20 me-4 lg:me-0 lg:mb-6">
                        <div className="bg-default-300"></div>
                    </Skeleton>
                    <Skeleton className="w-56 lg:w-52 rounded-lg opacity-20">
                        <div className={`${styles.webkpis_text} h-10 lg:h-6 rounded-lg bg-default-300 max-w-60 md:max-w-full md:self-center lg:text-center`}></div>
                    </Skeleton>
                </div>
            </div>

            <Skeleton className="w-52 m-auto rounded-3xl opacity-20 mb-4 my-0 md:mb-0 md:my-5">
                <div className="w-full h-12 bg-default-100"></div>
            </Skeleton>
        </div>
    </section>
  );
};

export default WebKpisLoader;
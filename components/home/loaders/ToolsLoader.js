
import { Skeleton } from "@nextui-org/react";
import styles from '../Tools.module.scss'

const CollaborateLoader = () => {
  return (
    <section className={`${styles.tools_wrap} w-full pt-14 pb-6 px-0 md:px-0`}>
        <div className="inner_section w-full lg:max-w-5xl m-auto px-5 lg:px-10">
            <Skeleton className="w-52 rounded-lg opacity-20 mb-5">
                <div className={`${styles.section_heading} w-full h-10 bg-default-100`}></div>
            </Skeleton>
            <Skeleton className="w-4/5 md:w-2/3 rounded-lg opacity-20 mb-1">
                <div className="section_description md:w-3/5"></div>
            </Skeleton>
            <Skeleton className="w-2/3 md:w-1/2 rounded-lg opacity-20 mb-1">
                <div className="section_description md:w-3/5"></div>
            </Skeleton>

            <div className="grid flex-col gap-y-4 lg:gap-x-8 py-8 md:py-3 m-auto lg:px-5 lg:inline-flex lg:flex-row lg:py-8">
                <div className="flex m-auto md:m-0 lg:flex-col lg:items-center">
                    <Skeleton className="w-12 h-12 lg:w-20 rounded-full opacity-20 me-6 lg:me-0 lg:mb-6">
                        <div className="bg-default-300"></div>
                    </Skeleton>
                    <Skeleton className="w-40 lg:w-52 rounded-lg opacity-20">
                        <div className={`${styles.tools_text} h-10 rounded-lg bg-default-300 max-w-60 md:max-w-full md:self-center lg:text-center`}></div>
                    </Skeleton>
                </div>
                <div className="flex m-auto md:m-0 lg:flex-col lg:items-center">
                    <Skeleton className="w-12 h-12 lg:w-20 rounded-full opacity-20 me-6 lg:me-0 lg:mb-6">
                        <div className="bg-default-300"></div>
                    </Skeleton>
                    <Skeleton className="w-40 lg:w-52 rounded-lg opacity-20">
                        <div className={`${styles.tools_text} h-10 rounded-lg bg-default-300 max-w-60 md:max-w-full md:self-center lg:text-center`}></div>
                    </Skeleton>
                </div>
                <div className="flex m-auto md:m-0 lg:flex-col lg:items-center">
                    <Skeleton className="w-12 h-12 lg:w-20 rounded-full opacity-20 me-6 lg:me-0 lg:mb-6">
                        <div className="bg-default-300"></div>
                    </Skeleton>
                    <Skeleton className="w-40 lg:w-52 rounded-lg opacity-20">
                        <div className={`${styles.tools_text} h-10 rounded-lg bg-default-300 max-w-60 md:max-w-full md:self-center lg:text-center`}></div>
                    </Skeleton>
                </div>
                <div className="flex m-auto md:m-0 lg:flex-col lg:items-center">
                    <Skeleton className="w-12 h-12 lg:w-20 rounded-full opacity-20 me-6 lg:me-0 lg:mb-6">
                        <div className="bg-default-300"></div>
                    </Skeleton>
                    <Skeleton className="w-40 lg:w-52 rounded-lg opacity-20">
                        <div className={`${styles.tools_text} h-10 rounded-lg bg-default-300 max-w-60 md:max-w-full md:self-center lg:text-center`}></div>
                    </Skeleton>
                </div>
            </div>

            <Skeleton className="w-60 m-auto rounded-lg opacity-20 mb-4 my-0 md:mb-0 md:my-8">
                <div className="w-full h-10 bg-default-100"></div>
            </Skeleton>
        </div>
    </section>
  );
};

export default CollaborateLoader;
import styles from "./TrackItem.module.css";

import ellipsis from "/images/icon-ellipsis.svg";

type Props = {
    title: string;
    timeframes: { current: number; previous: number };
};

export function TrackItem({ title, timeframes }: Props) {
    return (
        <div className="relative">
            <div
                className={`${styles[title.toLowerCase().replace(" ", "-")]} ${
                    styles.cardHeader
                } rounded-tl-2xl rounded-tr-2xl grid h-[79px]`}
            ></div>
            <div className="w-full p-6 bg-dark-blue rounded-2xl -mt-8 z-10 hover:bg-dark-blue-hover cursor-pointer hover:-mt-6 transition-all lg:absolute">
                <div className="flex items-center justify-between mb-2 lg:mb-6">
                    <h1 className="text-lg">{title}</h1>
                    <img src={ellipsis} alt="ellipsis" />
                </div>
                <div className="flex items-center justify-between lg:block">
                    <h1 className="text-3xl mb-0 font-light lg:text-6xl lg:mb-3">
                        {timeframes.current}hrs
                    </h1>
                    <p className="text-pale-blue text-sm">
                        Last Week - {timeframes.previous}hrs
                    </p>
                </div>
            </div>
        </div>
    );
}

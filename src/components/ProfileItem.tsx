type Props = {
    setState: React.Dispatch<
        React.SetStateAction<"daily" | "weekly" | "monthly">
    >;
    state: "daily" | "weekly" | "monthly";
};

export function ProfileItem({ setState, state }: Props) {
    return (
        <div className="text-white row-span-3 lg:row-span-2">
            <div className="flex items-center relative z-10 bg-blue rounded-2xl p-8 gap-4 md:gap-0 md:block md:pb-[5.5rem]">
                <img
                    className="border-[3px] border-white rounded-full md:mb-10"
                    src="/images/image-jeremy.png"
                    alt="jeremy robson"
                    width={78}
                />
                <div>
                    <h1 className="text-pale-blue text-sm mb-2">Report for</h1>
                    <h2 className="text-2xl lg:text-4xl font-light leading-tight">
                        Jeremy Robson
                    </h2>
                </div>
            </div>
            <div className="grid items-end bg-dark-blue p-6 rounded-b-2xl pt-8 -mt-4 md:-mt-16 md:pt-20 lg:rounded-2xl">
                <ul className="flex justify-between items-center text-desaturated-blue text-lg md:block md:space-y-4">
                    <li
                        onClick={() => setState("daily")}
                        className={`${
                            state === "daily" ? "text-white" : ""
                        } hover:text-white cursor-pointer transition-colors`}
                    >
                        Daily
                    </li>
                    <li
                        onClick={() => setState("weekly")}
                        className={`${
                            state === "weekly" ? "text-white" : ""
                        } hover:text-white cursor-pointer transition-colors`}
                    >
                        Weekly
                    </li>
                    <li
                        onClick={() => setState("monthly")}
                        className={`${
                            state === "monthly" ? "text-white" : ""
                        } hover:text-white cursor-pointer transition-colors`}
                    >
                        Monthly
                    </li>
                </ul>
            </div>
        </div>
    );
}

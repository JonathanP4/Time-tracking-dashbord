import trackerData from "../data.json";

import { useState } from "react";
import { ProfileItem } from "./ProfileItem";
import { TrackItem } from "./TrackItem";

export function ItemsContainer() {
    const [state, setState] = useState<"daily" | "weekly" | "monthly">("daily");
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 flex-1 max-w-[1142px] px-4 lg:px-8">
            <ProfileItem setState={setState} state={state} />
            {trackerData.map((td) => (
                <TrackItem title={td.title} timeframes={td.timeframes[state]} />
            ))}
        </div>
    );
}

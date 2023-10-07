/* eslint-disable no-undef */

import { useEffect, useState } from "react";
import EventCard from "./EventCard";



const Event = () => {
    const [eventData, setEventData] = useState()

    useEffect(() => {
        fetch("/Event.json")
            .then((res) => res.json())
            .then((data) => setEventData(data));

    }, []);

    return (
        <div className="max-w-screen-xl mx-auto gap-7 grid ">

            {
                eventData?.map(data => <EventCard key={data?.id} EventData={data}></EventCard>)
            }
        </div>
    )


}



export default Event;
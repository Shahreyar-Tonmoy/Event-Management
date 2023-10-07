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
        <div className="max-w-screen-xl mx-auto px-20 ">
            <h1 className="text-4xl mt-20 mb-3">Events</h1>
            <h1 className="mb-14">Upcoming Education Events to feed your brain.</h1>


            {
                eventData?.map(data => <EventCard  key={data?.id} EventData={data}></EventCard>)
            }
        </div>
    )


}



export default Event;
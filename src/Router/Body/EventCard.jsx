import { CiStopwatch,CiLocationOn } from 'react-icons/ci';

const EventCard = ({ EventData }) => {
    const { cover, title, date, mounth, place, time, details } = EventData

    return (
        <div>
            <hr className='border my-5' />
            <div className="card card-side ">
                <div className="ml-10 flex justify-center items-center text-center">
                    <div>
                        <h1 className="text-7xl font-bold" >{date}</h1>
                        <h1 className="text-lg" >{mounth}</h1>
                    </div>
                </div>
                <div className="border h-32 my-auto mx-10"></div>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className='flex gap-10 my-4'>
                        <div className='flex gap-2 items-center'>
                        <CiStopwatch className='text-2xl'></CiStopwatch>
                        <span>{time}</span>
                    </div>
                        <div className='flex gap-2 items-center'>
                            <CiLocationOn className='text-2xl'></CiLocationOn>
                            <span>{place}</span>
                        </div></div>
                    <p>{details}</p>

                </div>
                <div className="card-actions p-4 justify-end">
                    <figure><img src={cover} alt="Movie" /></figure>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
/* eslint-disable react/prop-types */
import { CiStopwatch, CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const EventCard = ({ EventData }) => {
    const { id, cover, title, date, mounth, place, time, details } = EventData

    return (
        <Link to={`/details/${id}`}>

            <div data-aos="zoom-in-down">
                <hr className='border my-5' />
                <div className="flex-col lg:flex-row card card-side ">
                    <div className="lg:ml-10 flex justify-center items-center text-center">
                        <div>
                            <h1 className="text-7xl font-bold" >{date}</h1>
                            <h1 className="text-lg" >{mounth}</h1>
                        </div>
                    </div>
                    <div className="border lg:h-32 my-auto mx-10"></div>
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
        </Link>
    );
};

export default EventCard;
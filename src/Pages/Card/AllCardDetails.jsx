/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const AllCardDetails = () => {

    const [details, setDetails] = useState()
    const [data, setData] = useState({})
    useEffect(() => {
        fetch("/Education.json")
            .then((res) => res.json())
            .then((data) => setDetails(data));


    }, []);


    const { id } = useParams()

    useEffect(() => {
        const findData = details?.find(card => card?.id == id)
        setData(findData);
    })



    return (
        <div>
            <div className="mx-auto max-w-screen-xl px-9 py-12">


                <div className="hero rounded-lg h-[36rem]" style={{ backgroundImage: `url(${data?.cover})` }}>
                    <div className="hero-overlay rounded-b-lg h-32 mt-[28rem]  bg-opacity-60">
                    
                    </div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="mt-[28rem] lg:mr-[62rem]">


                            <button className="px-6 py-4 rounded-md text-white bg-[#FFB606]">Price $ {data?.price}</button>
                        </div>
                    </div>
                    <div className="hero-content text-center text-neutral-content">
                        
                    </div>
                </div>

                <h2 className="mb-2 block mt-14 font-sans text-4xl font-semibold leading-[1.3] tracking-normal text-blue-gray-900 antialiased">
                    {data?.title}
                </h2>
                <p className="block font-sans text-[15px] font-normal leading-relaxed text-gray-700 antialiased">
                    {data?.details}
                </p>
            </div>
        </div>
    );
};

export default AllCardDetails;




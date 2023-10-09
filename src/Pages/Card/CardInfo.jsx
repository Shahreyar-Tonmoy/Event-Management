import { useLoaderData } from "react-router-dom";
import CardData from "./CardData";


const CardInfo = () => {
    const education = useLoaderData()
    
    return (
       <div>
             <div className="max-w-screen-xl mx-auto text-center lg:text-left lg:px-20 ">
             <h1 className="text-3xl font-semibold mt-36">Popular Course</h1>
            <p className="text-lg mt-3 mb-10">Limitless learning, more possibilities</p>
             </div>
         <div className=" grid md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto lg:px-20 gap-8 mb-40 ">
            {
                education?.map(data =><CardData key={data?.id} cardData={data}></CardData>)
            }
        </div>
       </div>
    );
};

export default CardInfo;
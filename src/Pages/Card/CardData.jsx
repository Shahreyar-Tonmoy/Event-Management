/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const CardData = ({ cardData }) => {
    const {id,picture,cover,title,price,name,} = cardData


    
    return (
        <div>
           

            <div>
                <div data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                     className="card mx-auto rounded-lg w-[350px] h-[550px] bg-base-100 shadow-xl"> 
                    <figure>
                        <img src={cover} alt="Shoes" /> 
                   </figure>
                   <img  className="w-20 rounded-full mx-auto -mt-8 border" src={picture} alt="" />
                    <div className="card-body">
                        <h2 className="text-2xl font-semibold text-center">{name}</h2>
                        <p className="text-center text-xl">{title}</p>
                        <h1 className="text-lg -mb-12 font-semibold text-blue-900">{price}</h1>
                        <div className="card-actions justify-end">
                            <Link to={`/AllCardDetails/${id}`}><button className="px-4 py-2 rounded-lg text-white bg-[#FFB606]">View Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardData;
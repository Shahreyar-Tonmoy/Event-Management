/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const CardData = ({ cardData }) => {
    const {picture,cover,title,price,name,} = cardData


    
    return (
        <div>
           

            <div>
                <div data-aos="fade-down-left" className="card rounded-none w-[350px] h-[550px] bg-base-100 shadow-xl"> 
                    <figure>
                        <img src={cover} alt="Shoes" /> 
                   </figure>
                   <img  className="w-20 rounded-full mx-auto -mt-8 border" src={picture} alt="" />
                    <div className="card-body">
                        <h2 className="text-2xl font-semibold text-center">{name}</h2>
                        <p className="text-center text-xl">{title}</p>
                        <h1 className="text-lg -mb-12 font-semibold text-blue-900">{price}</h1>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardData;
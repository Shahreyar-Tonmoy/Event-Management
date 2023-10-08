import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <div className="h-screen flex justify-center items-center">
                        
                        <img src="/src/Error Page/404.png" alt="" />
                        <br />
                        <Link to ="/"><button className="btn text-white font-semibold bg-[#ffb606] hover:bg-[#ffb606]
                        ">Go Home</button></Link>
                        
                    </div>
                    
        </div>
    );
};

export default Error;
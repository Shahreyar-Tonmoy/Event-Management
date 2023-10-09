import backgroundImage from '/Assignment/Assignment-09/src/assets/bg-lastest-new-now.jpg'

const Body = () => {
    return (
        
        <div style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundImage: `url(${backgroundImage})` }} className='lg:h-[72vh] '>
            <div className="hero h-full">
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content flex-col  text-neutral-content lg:flex-row items-center lg:gap-72 ">
                    <img data-aos="zoom-in-right" className='lg:w-96 w-60' src="/src/assets/body.png" alt="" />
                    <div data-aos="zoom-in-left">
                    <h1 className='lg:text-2xl'>
                        GET 100 OF ONLINE COURSES FOR FREE

                        </h1>
                        <h1 className='text-center lg:text-left lg:text-5xl mt-6'>REGISTER NOW</h1>
                    </div>
                        
                </div>
            </div>
        </div>
    );
};

export default Body;
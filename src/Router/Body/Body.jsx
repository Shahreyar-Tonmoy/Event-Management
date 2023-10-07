import backgroundImage from '/Assignment/Assignment-09/src/assets/bg-lastest-new-now.jpg'

const Body = () => {
    return (
        <div style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundImage: `url(${backgroundImage})` }} className='h-[72vh]'>
            <div className="hero h-full">
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content  text-neutral-content lg:flex items-center lg:gap-72 ">
                    <img data-aos="zoom-in-right" className='w-96' src="/src/assets/90577613768-removebg-preview.png" alt="" />
                    <div data-aos="zoom-in-left">
                    <h1 className='text-2xl'>
                        GET 100 OF ONLINE COURSES FOR FREE

                        </h1>
                        <h1 className='text-5xl mt-6'>REGISTER NOW</h1>
                    </div>
                        
                </div>
            </div>
        </div>
    );
};

export default Body;
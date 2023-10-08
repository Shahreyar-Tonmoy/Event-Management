import backgroundImage from './Banner.png'
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundImage: `url(${backgroundImage})` }} className='h-screen -mt-24' >
                <div className=' flex justify-center items-center pt-64 '>
                   
                <TypeAnimation className='text-2xl lg:text-[60px] text-white inline-block'
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Future Educators',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Always Keep Learning',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'The Edu Planner',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'The Education Blog',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Love Learning Institute',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"

                    ]}
                    wrapper="span"
                    speed={50}
                    // style={{ fontSize: '60px', color: "white", display: 'inline-block' }}
                    repeat={Infinity}
                />
            </div>



            <div className='invisible lg:visible grid  md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-screen-xl pl-12 mt-40'>
                <div data-aos="fade-up-right" className="hero w-96 ">
                    <div className="hero-overlay bg-opacity-50 rounded-xl"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="flex items-center">
                            <img className='w-28' src="/src/assets/Screenshot_2023-10-06_221338-removebg-preview.png" alt="" />
                            <h1 className='text-start text-2xl'>BEST INDUSTRY LEADERS</h1>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className="hero w-96">
                    <div className="hero-overlay bg-opacity-50 rounded-xl"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="flex items-center">
                            <img className='w-28' src="/src/assets/Screenshot_2023-10-06_222128-removebg-preview.png" alt="" />
                            <h1 className='text-start text-2xl'>LEARN COURSES ONLINE</h1>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-left" className="hero w-96">
                    <div className="hero-overlay bg-opacity-50 rounded-xl"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="flex items-center gap-3">
                            <img className='w-24' src="/src/assets/Screenshot_2023-10-06_222443-removebg-preview.png" alt="" />
                            <h1 className='text-start text-2xl'>BOOK LIBRARY & STORE</h1>
                        </div>
                    </div>
                </div>
                
                
            </div>

        </div>
    );
};

export default Banner;
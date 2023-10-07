
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Login/Firebase/AuthProvider';


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)

    const hendleSignOut = () => {
        logOut()
            .then(() =>
                console.log("logout done"))
            .catch(error => console.log(error.massage))
    }



    return (
        <div>


            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown dropdown-start">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">


                            <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>



                            <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                                <NavLink
                                    to="/course"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                    }
                                >
                                    courses
                                </NavLink>
                            </li>
                            <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                                <NavLink
                                    to="/Event"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                    }
                                >
                                    Event
                                </NavLink>
                            </li>
                            <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                                <NavLink
                                    to="/Login"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                                <NavLink
                                    to="/Register"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                    }
                                >
                                    Register
                                </NavLink>
                            </li>
                            <li>
                                <div className="flex-none">
                                    <div className="dropdown dropdown-end">

                                    </div>
                                    <div className="dropdown dropdown-right">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img src="/src/assets/Md Mubtashim Shahreyar Tonmoy.png" />
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                                            <li><NavLink to="/Profile"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "active" : ""
                                                }
                                            >
                                                Profile
                                            </NavLink></li>

                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                        <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                }
                            >
                                {/* <img className="w-32 md:w-40" src={Logo} alt="" /> */}
                            </NavLink>
                        </li>

                    </li>
                    <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            <img className="w-32 md:w-40" src="/src/assets/education-logo-icon.png" alt="" />
                        </NavLink>
                    </li>

                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="ml-auto mr-8 hidden items-center gap-6 lg:flex">
                        <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                            <NavLink
                                to="/course"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                }
                            >
                                Courses
                            </NavLink>
                        </li>
                        <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                            <NavLink
                                to="/Event"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                }
                            >
                                Event
                            </NavLink>
                        </li>
                        <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                            <NavLink
                                to="/Statistics"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                        {
                            user ? "" : (<>
                            <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                            <NavLink
                                to="/Register"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                }
                            >
                                Register
                            </NavLink>
                        </li>
                            </>)
                        }
                        {
                            user ? (
                                <>
                                    <li onClick={hendleSignOut} className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                                        <NavLink
                                            to="/SignIn"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                            }
                                        >
                                            Sign Out
                                        </NavLink>
                                    </li>

                                </>
                            ) : (<>
                                <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                                    <NavLink
                                        to="/SignIn"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                        }
                                    >
                                        Sign In
                                    </NavLink>
                                </li>

                            </>)
                        }

                        {
                            user ?(
                                <>
                            <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                            {user?.displayName}
                        </li>
                            </>
                            ) : ""
                        }
                        
                        <li>
                            {/* img section */}
                            <div className="flex-none">


                                {
                                    user && (<>
                                    <div className="">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                                    <img src={user.photoURL} />
                                                </div>
                                    </label>
                                    
                                </div>
                                    </>)
                                }
                            </div>
                        </li>
                    </ul>
                </div>

            </div>

            {/* text section */}





        </div>
    );
};

export default NavBar;
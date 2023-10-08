/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */

import { useContext } from "react";
import { AiFillGoogleCircle } from 'react-icons/ai';
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./Firebase/AuthProvider";


const Register = () => {

    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    

    const hendleSignIn = e => {
        e.preventDefault()
        const email = e.target.email.value
       
        const password = e.target.password.value
        console.log(email, password);
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset()
                navigate(location?.state ? location?.state : "/")
                
            })
            .catch(error => {
                console.log(error.massage);
            })

    }
   



    return (
        <div className="max-w-screen-xl mx-auto flex justify-center mt-20">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border text-white shadow-lg shadow-pink-500/40">
                    <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
                    Register
                    </h3>
                </div>
                <form
                    onSubmit={hendleSignIn}
                    className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border text-white shadow-lg shadow-pink-500/40">Register</button>
                    </div>
                </form>
                <h1 className="text-center mb-10 ">Don't have an account? <span className="text-pink-500 font-bold"><Link to={"/SignIn"} >Sign In</Link> </span></h1>
                


            </div>
        </div>
    );
};

export default Register;
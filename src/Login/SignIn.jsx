/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillGoogleCircle } from 'react-icons/ai';
import { AuthContext } from "./Firebase/AuthProvider";



const SignIn = () => {
    const { signInUser, SignInWithGoogle } = useContext(AuthContext)
    
    const navigate = useNavigate()

    const hendleSignIn = e => {
        e.preventDefault()
        const email = e.target.email.value
       
        const password = e.target.password.value
        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset()
                navigate("/")
            })
            .catch(error => {
                console.log(error.massage);
            })

    }
    const hendleGoogle =() =>{
        
        SignInWithGoogle()
        .then(result =>{
            console.log(result.user)
            if(result.user){
                navigate("/")
            }
           
            
        })
        .catch(error =>{
            console.log(error.massage);
        });

    }
    



    return (
        <div className="max-w-screen-xl mx-auto flex justify-center mt-20">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <h1 className="text-center ">Don't have an account? <span><Link to={"/Register"} >Sign Up</Link> </span></h1>
                <h1 className="text-center">or</h1>
                <span className="flex justify-center items-center mt-4 mb-10">
                <AiFillGoogleCircle onClick={hendleGoogle} className="text-4xl"></AiFillGoogleCircle>
                </span>


            </div>
        </div>
    );
};

export default SignIn;
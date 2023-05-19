import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from './ProviderRouter';
import { FcGoogle } from "react-icons/fc";
import { useTitle } from '../Hooks/useTitle';

const Register = () => {
    const [user, setUser] = useState('')
    const [sucess, setSuccess] = useState('')
    const { createUser, googleLogin } = useContext(AuthContext);
    useTitle('register')

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password })
        setSuccess('')
        setUser('')
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess("Created Sucsessfully")
            })
            .catch(error => {
                console.log(error.message);
                setUser(error.message)
            })
    }

    const GoogleLogin = () => {
        googleLogin()
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error=>{
            
                console.log(error.message)
            }
        )
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                    <button onClick={GoogleLogin} className='btn btn-warning'><FcGoogle className='text-3xl mr-2' /> Sign in with Google</button>
                        <h1 className="text-5xl font-bold">Register now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                   
                                </label>
                                <h1 className='text-red-500'>{user}</h1>
                                <h1 className='text-green-500'>{sucess}</h1>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name='photoUrl' placeholder="Photo_Url" className="input input-bordered" />
                                <label className="label">
                                   
                                </label>
                                <h1 className='text-red-500'>{user}</h1>
                                <h1 className='text-green-500'>{sucess}</h1>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <h3>New User? <Link to='/login'>login</Link></h3>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
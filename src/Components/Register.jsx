import { useContext,} from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from './ProviderRouter';

const Register = () => {
    // const [user, setUser] = useState('')
    // const [sucess, setSuccess] = useState('')
    const { createUser } = useContext(AuthContext);

    const handleSubmit = event => {
     event.preventDefault();
     const form = event.target;
     const email = form.email.value;
     const password= form.password.value;
     console.log({email, password})

     createUser(email,password)
     .then(result=>{
        const user = result.user;
        console.log(user);
     })
     .catch(error =>{
        console.log(error.message)
     })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Register now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
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
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
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
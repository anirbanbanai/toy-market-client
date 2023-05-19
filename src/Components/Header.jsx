import { useContext } from 'react';
import {Link} from 'react-router-dom'
import { AuthContext } from './ProviderRouter';
const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    const HandleLogout = ()=>{
     logOut()
    }
    return (
        <div className="bg-slate-300 text-center  md:flex items-center justify-center md:justify-between p-2">
            <div className='flex items-center'>
                <img className='w-[100px] mx-auto' src="https://cdn-icons-png.flaticon.com/512/2892/2892758.png" alt="" />
                <h2 className="text-5xl font-black"><span className='text-red-600'>World</span> of <span className='text-blue-600'>Toy</span> Car</h2>
            </div>
            <div className='grid md:flex'> 
                <Link className='text-2xl mr-3 font-bold bg-slate-100 hover:bg-red-400 p-2 rounded-lg' to='/'>Home</Link>
                <Link className='text-2xl mr-3 bg-slate-100 font-bold hover:bg-red-400 p-2 rounded-lg' to='/alltoy'>AllToy</Link>
                <Link className='text-2xl mr-3 bg-slate-100 font-bold hover:bg-red-400 p-2 rounded-lg' to='/mytoy'>MyToy</Link>
                <Link className='text-2xl mr-3 bg-slate-100 font-bold hover:bg-red-400 p-2 rounded-lg' to='/addtoy'>AddToy</Link>
                <Link className='text-2xl mr-3 bg-slate-100 font-bold hover:bg-red-400 p-2 rounded-lg' to='/blog'>Blogs</Link>
            </div>
            <div>
                {!user && <Link className='btn btn-warning mt-5 md:mt-0' to='/login'>Login</Link>}
               {user && <button onClick={HandleLogout} className='btn bg-red-600'> Logout</button>}
            </div>
        </div>
    );
};

export default Header;
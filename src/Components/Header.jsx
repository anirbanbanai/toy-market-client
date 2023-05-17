import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <div className="bg-slate-300 flex items-center justify-between p-2">
            <div>
                {/* <h2 className="text-4xl font-black">Toy-Collection</h2> */}
                <img className='w-[100px]' src="https://cdn-icons-png.flaticon.com/512/2892/2892758.png" alt="" />
            </div>
            <div>
                <Link className='text-2xl mr-3 font-semibold hover:bg-red-400 p-2 rounded-lg' to='/'>Home</Link>
                <Link className='text-2xl mr-3 font-semibold hover:bg-red-400 p-2 rounded-lg' to='/'>All_Toy</Link>
                <Link className='text-2xl mr-3 font-semibold hover:bg-red-400 p-2 rounded-lg' to='/'>My-Toy</Link>
                <Link className='text-2xl mr-3 font-semibold hover:bg-red-400 p-2 rounded-lg' to='/'>Add-Toy</Link>
                <Link className='text-2xl mr-3 font-semibold hover:bg-red-400 p-2 rounded-lg' to='/'>Blogs</Link>
            </div>
            <div>
                <Link className='btn' to='/login'>Login</Link>
                {/* <button className='btn btn-success'>Login</button> */}
            </div>
        </div>
    );
};

export default Header;
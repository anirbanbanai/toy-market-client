import {Link} from 'react-router-dom'

const SubAllToy = ({ main }) => {
    const { _id, name, img, category, price, rating, } = main;
    return (
        <div className="w-[100%] text-center border-2 border-red-500 m-2 rounded-lg ">
            <p className="text-2xl font-semibold">{name}</p>
            <img className="w-3/4 mx-auto" src={img} alt="" />
            <h3 className="text-xl">Price : {price}</h3>
            <h2 className="font-bold">Catagory : {category}</h2>
            <h3 className="text-sm font-semibold ">Rating : {rating}</h3>
            <div className="bottom-0">
                <button className="btn btn-primary ">Buy Now</button>
                <Link to={`/shaw/${_id}`} className="btn btn-warning">Show Details</Link>
            </div>
        </div>
    );
};

export default SubAllToy;
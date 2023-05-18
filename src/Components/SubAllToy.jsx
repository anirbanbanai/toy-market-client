
const SubAllToy = ({main}) => {
    const { name, img, category, price, rating, } = main;
    return (
        <div className="text-center border-2 border-red-500 m-2 rounded-lg">
            <p className="text-2xl font-semibold">{name}</p>
            <img className="w-3/4 mx-auto" src={img} alt="" />
            <h3 className="text-xl">Price : {price}</h3>
            <h2 className="font-bold">Catagory : {category}</h2>
            <h3 className="text-sm font-semibold">Rating : {rating}</h3>
            <div>
            <button className="btn btn-primary">Buy Now</button>
            <button className="btn btn-warning">Show Details</button>
            </div>
        </div>
    );
};

export default SubAllToy;
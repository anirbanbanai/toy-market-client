import { BsStarFill } from "react-icons/bs";

const MySubToy = ({main}) => {
    const { category, img, price, rating,  } = main;
    return (
        <div className="flex justify-between items-center border-2 m-2">
            <img className="w-[100px]" src={img} alt="" />
            <h1 className="font-semibold">{category}</h1>
            <h1>Price :  ${price}</h1>
            
            <h1 className="flex gap-1 items-center"><BsStarFill className="text-yellow-400"/> <BsStarFill className="text-yellow-400"/><BsStarFill className="text-yellow-400"/><BsStarFill className="text-yellow-400"/> {rating}</h1>
           
           
            <button className="btn btn-warning">Edit</button>
            <button className="btn bg-red-600">Delete</button>
        </div>
    );
};

export default MySubToy;

import { useLoaderData } from 'react-router-dom'
import { BsStarFill } from "react-icons/bs";


const ShowDetails = () => {
    const data = useLoaderData()
    console.log(data)
    const { img, name, price, rating, available_quantity } = data;
    return (
        <div className='bg-blue-200 m-5 text-center'>

            <h3 className='text-3xl  font-semibold'>{name}</h3>
           <div className='grid grid-cols-2'>
           <div className='p-5'>
                <img className='w-3/4 mx-auto rounded-xl ' src={img} alt="" />
            </div>
            <div className='text-start flex items-center'>
               <div>
               <h3 className='text-2xl font-semibold'>Price : {price}</h3>
               <h1 className="flex gap-1 items-center"><BsStarFill className="text-yellow-600"/> <BsStarFill className="text-yellow-500"/><BsStarFill className="text-yellow-400"/><BsStarFill className="text-yellow-400"/> {rating}</h1>
                <h3 className='text-xl font-semibold'>Available_quantity: {available_quantity}</h3>
               </div>
            </div>
           </div>
           <button className='btn btn-warning'>Buy Now</button>
        </div>
    );
};

export default ShowDetails;
import { BsStarFill } from "react-icons/bs";
import { RiDeleteBin6Fill } from "react-icons/ri";

const MySubToy = ({main}) => {
    const {_id, category, img, price, rating,  } = main;
   const handleDelete = (id) =>{
      console.log(id);

      fetch(`https://assign11-server.vercel.app/toy/${id}`,{
        method:"DELETE"
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data)
      })
   }
    return (

        <div>
            <div className="flex justify-between items-center border-2 m-2">
            <img className="w-[100px]" src={img} alt="" />
            <h1 className="font-semibold">{category}</h1>
            <h1>Price :  ${price}</h1>
            
            <h1 className="flex gap-1 items-center"><BsStarFill className="text-yellow-400"/> <BsStarFill className="text-yellow-400"/><BsStarFill className="text-yellow-400"/><BsStarFill className="text-yellow-400"/> {rating}</h1>
           
           
            <button className="btn btn-warning">Edit</button>
            <button onClick={()=>handleDelete(_id)} className="btn bg-white hover:bg-white"><RiDeleteBin6Fill  className="text-black  text-2xl"/> </button>
        </div>
        </div>
    );
};

export default MySubToy;

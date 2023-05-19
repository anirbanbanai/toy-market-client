import { BsStarFill } from "react-icons/bs";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import {Link} from 'react-router-dom'

const MySubToy = ({main, setData, datas}) => {
    const {_id, category, img, price, rating,  } = main;
   const handleDelete = (id) =>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
         
        fetch(`https://assign11-server.vercel.app/toy/${id}`,{
            method:"DELETE"
          })
          .then(res => res.json())
          .then( data =>{
            console.log(data)
            if(data.deletedCount > 0){
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
              const remaining = datas.filter(m=>m._id !== _id);
              setData(remaining)
            }
          })
        }
      })

      

   }
    return (

        <div>
            <div className="flex justify-between items-center border-2 m-2">
            <img className="w-[100px]" src={img} alt="" />
            <h1 className="font-semibold">{category}</h1>
            <h1>Price :  ${price}</h1>
            
            <h1 className="flex gap-1 items-center"><BsStarFill className="text-yellow-400"/> <BsStarFill className="text-yellow-400"/><BsStarFill className="text-yellow-400"/><BsStarFill className="text-yellow-400"/> {rating}</h1>
           
           
            <Link to={`/update/${_id}`} className="btn btn-warning">Edit</Link>
            <button onClick={ ()=>handleDelete(_id) } className="btn bg-white hover:bg-white"><RiDeleteBin6Fill  className="text-black  text-2xl"/> </button>
        </div>
        </div>
    );
};

export default MySubToy;


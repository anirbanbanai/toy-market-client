import { BsStarFill } from "react-icons/bs";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import { Link } from 'react-router-dom'

const MySubToy = ({ main, setData, datas }) => {
    const { _id, name, img, price, rating, seller_name} = main;
    const handleDelete = (id) => {
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

                fetch(`https://assign11-server.vercel.app/toy/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = datas.filter(m => m._id !== _id);
                            setData(remaining)
                        }
                    })
            }
        })



    }
    return (

        <div className="grid grid-cols-5">
            <div>
                <img className="w-full md:w-[100px] mx-auto p-3 md:p-0" src={img} alt="" />
            </div>
            <div className="col-span-4 grid grid-cols-3 sm:flex justify-between items-center border-2 m-2 p-2">
                <h1 className="font-semibold mb-2 md:mb-0">{name}</h1>
                <h3>Seller : <b>{seller_name}</b></h3>
                <h1 className="mb-2 md:mb-0">Price :  <b>{price}</b></h1>

                <h1 className="flex gap-1 items-center mb-2 md:mb-0"><BsStarFill className="text-yellow-400" /> <BsStarFill className="text-yellow-400" /><BsStarFill className="text-yellow-400" /><BsStarFill className="text-yellow-400" /> {rating}</h1>


                <Link to={`/update/${_id}`} className="btn btn-warning mr-2 md:mr-0">Edit</Link>
                <button onClick={() => handleDelete(_id)} className="btn bg-white hover:bg-white"><RiDeleteBin6Fill className="text-black  text-2xl" /> </button>
            </div>
        </div>
    );
};

export default MySubToy;


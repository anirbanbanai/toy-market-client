import {useLoaderData} from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const Update = () => {
    const datta = useLoaderData();
    console.log(datta)
    const handleSubmit = event =>{
        event.preventDefault();
       
        const form = event.target;
        const name = form.name.value;
        const catagory = form.catagory.value;
        const sub_catagory = form.sub_catagory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const img = form.photo.value;
        const all = {name, catagory,rating, sub_catagory, img, price};
        console.log(all)

        fetch(`http://localhost:5000/toy/${datta._id}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(all)
        })
        .then(res=>res.json())
        .then(data =>{
         console.log(data);
         if(data.modifiedCount){
            Swal.fire(
                'Updated!',
                'Your file has been Updated.',
                'success'
              )
         }
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}  className="p-4">
            <h1 className="text-4xl font-bold text-center mt-4">Update Toy</h1>
            <div className="card-body grid grid-cols-2">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" defaultValue={datta?.name} name="name" placeholder="name" required className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Catagory</span>
                    </label>
                    <input type="text" required defaultValue={datta?.category} name="catagory" placeholder="catagory" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Sub-Catagory</span>
                    </label>
                    <input type="text" defaultValue={datta?.sub_category} required  name="sub_catagory" placeholder="sub-catagory" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" required name="price" defaultValue={'$' + datta?.price} placeholder="$price" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" defaultValue={datta?.rating} required name="rating" placeholder="rating" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo_Url</span>
                    </label>
                    <input type="text" defaultValue={datta?.img} name="photo" placeholder="photo_url"  required className="input input-bordered" />
                </div>

            </div>
            <div className=" flex justify-center">
                <input  className="btn  btn-warning w-3/4 " type="submit" value="Update Toy" />
                {/* <ToastContainer /> */}
            </div>
        </form >
        </div>
    );
};

export default Update;
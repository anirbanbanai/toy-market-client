// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import { useTitle } from '../Hooks/useTitle';


const AddToy = () => {
    useTitle("Addtoy")
    // const notify = () => toast("Added successfull!");
    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const postedBy = form.email.value;
        const seller_name = form.seller.value;
        const catagory = form.catagory.value;
        const sub_catagory = form.sub_catagory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const img = form.photo.value;
        const all = { name, postedBy, seller_name, catagory, rating, sub_catagory, img, price };
        console.log(all)

        fetch(`https://assign11-server.vercel.app/toy`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(all)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data) {
                    Swal.fire(
                        'Added!',
                        'Your file has been Added.',
                        'success'
                    )
                }
                form.reset()
            })
    }
    return (
        <form onSubmit={handleSubmit} className="p-4">
            <h1 className="text-4xl font-bold text-center mt-4">Add Toy</h1>
            <div className="card-body grid grid-cols-2">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" required className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">PostedBy</span>
                    </label>
                    <input type="email" name="email" placeholder="email" required className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller</span>
                    </label>
                    <input type="text" name="seller" placeholder="seller" required className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Catagory</span>
                    </label>
                    <input type="text" required defaultValue={'Toy'} name="catagory" placeholder="catagory" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Sub-Catagory</span>
                    </label>
                    <input type="text" required name="sub_catagory" placeholder="sub-catagory" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" required name="price" defaultValue={'$'} placeholder="$price" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" required name="rating" placeholder="rating" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Avilable Quantity</span>
                    </label>
                    <input type="text" required name="quantity" placeholder="Quantity" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo_Url</span>
                    </label>
                    <input type="text" name="photo" placeholder="photo_url" required className="input input-bordered" />
                </div>

            </div>
            <div className=" flex justify-center">
                <input className="btn  btn-warning w-3/4 " type="submit" value="Add Toy" />
                {/* <ToastContainer /> */}
            </div>
        </form >
    );
};

export default AddToy;
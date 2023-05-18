
const AddToy = () => {
    const handleSubmit = event =>{
        event.preventDefault();
     
        const form = event.target;
        const name = form.name.value;
        const catagory = form.catagory.value;
        const sub_catagory = form.sub_catagory.value;
        const price = form.price.value;
        const img = form.photo.value;
        const all = {name, catagory, sub_catagory, img, price};
        console.log(all)

        fetch(`http://localhost:5000/toy`,{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(all)
        })
        .then(result=>{
            const user = result.user;
            console.log(user)
        })
        .catch((error=>{
            console.log(error.message)
        }))
    }
    return (
        <form onSubmit={handleSubmit} className="p-4">
            <h1 className="text-4xl font-bold text-center mt-4">Add Toy</h1>
            <div className="card-body grid grid-cols-2">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Catagory</span>
                    </label>
                    <input type="text" defaultValue={'Toy'} name="catagory" placeholder="catagory" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Sub-Catagory</span>
                    </label>
                    <input type="text"   name="sub_catagory" placeholder="sub-catagory" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name="price" defaultValue={'$'} placeholder="$price" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" name="rating" placeholder="rating" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo_Url</span>
                    </label>
                    <input type="text" name="photo" placeholder="photo_url" className="input input-bordered" />
                </div>

            </div>
            <div className=" flex justify-center">
                <input className="btn  btn-warning w-3/4 " type="submit" value="Add Toy" />
            </div>
        </form >
    );
};

export default AddToy;
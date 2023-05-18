
const AddToy = () => {
    return (
        <div className="p-4">
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
                    <input type="text" name="catagory" placeholder="catagory" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Sub-Catagory</span>
                    </label>
                    <input type="text" name="sub-catagory" placeholder="sub-catagory" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name="price" placeholder="price" className="input input-bordered" />
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
        </div>
    );
};

export default AddToy;
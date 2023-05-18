import { useEffect, useState } from "react";
import SubGallary from "./SubGallary";
import { Link } from 'react-router-dom'

const GallarySection = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/toy`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setData(data);
            })
    }, [])
    console.log(data)
    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    data?.map(m => <SubGallary key={m._id} main={m}>

                    </SubGallary>)
                }
            </div>
            <div className="flex justify-center">
                <Link className="btn" to='/alltoy'>Show All</Link>
            </div>
        </div>
    );
};

export default GallarySection;
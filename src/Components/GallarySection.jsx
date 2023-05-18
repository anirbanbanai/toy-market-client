import { useEffect, useState } from "react";
import SubGallary from "./SubGallary";
import { Link } from 'react-router-dom'

const GallarySection = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://assign11-server.vercel.app/toy`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setData(data);
            })
    }, [])
    console.log(data)
    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                {
                    data?.slice(0, 6).map(m => <SubGallary key={m._id} main={m}>

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
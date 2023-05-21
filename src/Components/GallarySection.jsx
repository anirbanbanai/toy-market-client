import { useEffect, useState } from "react";
import SubGallary from "./SubGallary";
import { Link } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";

const GallarySection = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://assign11-server.vercel.app/toy`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setData(data);
            })
    }, [])
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, [data]);
    // console.log(data)
    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    data?.slice(0,20).map(m => <SubGallary key={m._id} main={m}>

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
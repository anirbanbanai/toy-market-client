import { useEffect, useState } from "react";
import SubGallary from "./SubGallary";


const GallarySection = () => {
    const [data, setData ] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/toy`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setData(data);
        })
    },[])
    console.log(data)
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {
                data?.slice(0,8).map(m=><SubGallary key={m._id} main={m}>

                </SubGallary>)
            }
        </div>
    );
};

export default GallarySection;
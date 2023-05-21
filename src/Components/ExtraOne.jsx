import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const ExtraOne = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://assign11-server.vercel.app/toy`)
            .then(res => res.json())
            .then(data=>{
                console.log(data)
                setData(data)
            })
    }, [])
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, [data]);
    return (
        <div>

            <h2 className="text-4xl font-semibold text-center">AOS section</h2>
    {
        data?.slice(0,5).map(m=>(
            <div className="border-2 m-3 p-3" key={m._id}>
                <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                    
            <img className="w-2/4 mx-auto " src={m.img} alt="" />
            </div>
            </div>
        ))
    }
        </div>
    );
};

export default ExtraOne;
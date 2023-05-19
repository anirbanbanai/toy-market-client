import { useLoaderData } from 'react-router-dom'
import MySubToy from './MySubToy';
import { useState } from 'react';
import { useTitle } from '../Hooks/useTitle';


const MyToy = () => {
    useTitle("Mytoy")
    const loaddata = useLoaderData();
    const [datas, setData] = useState(loaddata)
    // console.log(data)
    return (
        <div>

            {
                datas.map(m => <MySubToy
                    setData={setData}
                    datas={datas}
                    key={m._id}
                    main={m}
                ></MySubToy>)
            }
        </div>
    );
};

export default MyToy;
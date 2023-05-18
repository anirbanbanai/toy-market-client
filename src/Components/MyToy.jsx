import {useLoaderData} from 'react-router-dom'
import MySubToy from './MySubToy';


const MyToy = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
        {
            data.map(m=><MySubToy key={m._id} main={m}></MySubToy>)
        }
        </div>
    );
};

export default MyToy;
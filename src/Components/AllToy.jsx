import {useLoaderData} from 'react-router-dom'
import SubAllToy from './SubAllToy';
import { useTitle } from '../Hooks/useTitle';

const AllToy = () => {
    useTitle('Alltoy')
    const alltoy = useLoaderData();
    console.log(alltoy)
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3'>
           {
            alltoy?.map(m=><SubAllToy key={m._id} main={m}></SubAllToy>)
           } 
        </div>
    );
};

export default AllToy;
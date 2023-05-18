import {useLoaderData} from  'react-router-dom'

const ShowDetails = () => {
    const data  = useLoaderData()
    console.log(data)
    const {category, img, name, price, rating} = data;
    return (
        <div className='bg-pink-300 m-5 text-center'>
            <h1>{category}</h1>
            <h3>{name}</h3>
            <img className='w-1/4 mx-auto' src={img} alt="" />
        </div>
    );
};

export default ShowDetails;
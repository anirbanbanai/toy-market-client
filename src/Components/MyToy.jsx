// import { useLoaderData } from 'react-router-dom'
import MySubToy from './MySubToy';
import { useContext, useEffect, useState } from 'react';
import { useTitle } from '../Hooks/useTitle';
import { AuthContext } from './ProviderRouter';


const MyToy = () => {
    useTitle("Mytoy")
    const {user} = useContext(AuthContext);
    console.log(user.email)
    // const loaddata = useLoaderData();
    const [datas, setData] = useState([])
    console.log(datas)
    const [activeTab, setActiveTab] = useState('All')

    useEffect(() => {
        fetch(`https://assign11-server.vercel.app/toy/g/${user?.email}/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [activeTab,user])

    const handleTabClick = (tabname) => {
        setActiveTab(tabname)
    }
    return (
        <div>
            <h1 className='text-center text-3xl font-semibold'>Short by</h1>
            <div className='m-5 flex justify-center'>
                <button onClick={() => handleTabClick('All')} className={`text-2xl mr-5  tab tab2 All ${activeTab == "All" ? "bg-red-600 text-white" : ''}`}>All</button>
                <button onClick={() => handleTabClick('accending')} className={`text-2xl mr-5 px-3  tab tab2 accending ${activeTab == "accending" ? "bg-red-600 text-white" : ''}`}>Accending</button>
                <button onClick={() => handleTabClick('decending')} className={`text-2xl ml-5  tab tab2 decending ${activeTab == "decending" ? "bg-red-600 text-white" : ''}`}>Decending</button>

            </div>
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
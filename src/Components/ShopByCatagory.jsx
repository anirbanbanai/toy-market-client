
import { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { Link } from 'react-router-dom'
const ShopByCatagory = () => {
    const [sport, setSport] = useState([])
    const [polish, setPolsh] = useState([])
    const [regular, setRegular] = useState([])
    const [truck, setTruck] = useState([])
    const [activeTab, setActiveTab] = useState('')

    const handleTabClick = (tabname) => {
        setActiveTab(tabname)
    }
    useEffect(() => {
        fetch(`https://assign11-server.vercel.app/toy/k/Sports_Cars`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSport(data)
            })
    }, [])
    useEffect(() => {
        fetch(`https://assign11-server.vercel.app/toy/k/Polish_Cars`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setPolsh(data)
            })
    }, [])
    useEffect(() => {
        fetch(`https://assign11-server.vercel.app/toy/k/Regular_Cars`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setRegular(data)
            })
    }, [])
    useEffect(() => {
        fetch(`https://assign11-server.vercel.app/toy/k/Truck`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setTruck(data)
            })
    }, [])
    return (
        <div className='m-10 bg-purple-400'>
            <h3 className=' text-4xl text-center mb-5'>Short by Catagory</h3>

            <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
                <TabList id='tt'>
                    <Tab ><button onClick={()=>handleTabClick('polish')} className={`tab tab2 polish ${activeTab=="polish" ? "bg-red-600 text-white" : '' }`}>Polish Car</button></Tab>
                    <Tab><button onClick={()=>handleTabClick('sport')} className={`tab tab2 sport ${activeTab=="sport" ? "bg-red-600 text-white" : '' }`}>Sport Car</button></Tab>
                    <Tab><button onClick={()=>handleTabClick('regular')} className={`tab tab2 regular ${activeTab=="regular" ? "bg-red-600 text-white" : '' }`}>Regular</button></Tab>
                    <Tab><button onClick={()=>handleTabClick('truck')} className={`tab tab2 truck ${activeTab=="truck" ? "bg-red-600 text-white" : '' }`}>Truck</button></Tab>

                </TabList>
                <hr className='border-2 m-3 w-3/4 mx-auto' />

                <div className=' w-3/4 mx-auto text-center mt-5 mb-5'>
                    <TabPanel>
                        <div className='grid md:grid-cols-2'>
                            {
                                polish.map(m => <div className='bg-slate-50 m-3 p-4 rounded-xl' key={m._id}>
                                    <p className='text-xl m-3'>{m.name}</p>
                                    <img className='w-3/4 mx-auto rounded-lg' src={m.img} alt="" />
                                    <div className='mt-5'>
                                        <Link to={`/shaw/${m._id}`} className='btn btn-warning'>Show Details</Link>
                                    </div>
                                </div>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid md:grid-cols-2 '>
                            {
                                sport.map(m => <div className='bg-slate-50 m-3 p-4 rounded-xl' key={m._id}>
                                    <p className='text-xl m-3'> {m.name}</p>

                                    <img className='w-3/4 mx-auto rounded-lg' src={m.img} alt="" />

                                    <div className='mt-5'>
                                        <Link to={`/shaw/${m._id}`} className='btn btn-warning'>Show Details</Link>
                                    </div>
                                </div>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='grid md:grid-cols-2'>
                            {
                                regular.map(m => <div className='bg-slate-50 m-3 p-4 rounded-xl' key={m._id}>
                                    <p className='text-xl m-3'>{m.name}</p>
                                    <img className='w-3/4 mx-auto rounded-lg' src={m.img} alt="" />
                                    <div className='mt-5'>
                                        <Link to={`/shaw/${m._id}`} className='btn btn-warning'>Show Details</Link>
                                    </div>
                                </div>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid md:grid-cols-2'>
                            {
                                truck.map(m => <div className='bg-slate-50 m-3 p-4 rounded-xl' key={m._id}>
                                    <p className='text-xl m-3'>{m.name}</p>
                                    <img className='w-3/4 mx-auto rounded-lg' src={m.img} alt="" />
                                    <div className='mt-5'>
                                        <Link to={`/shaw/${m._id}`} className='btn btn-warning'>Show Details</Link>
                                    </div>
                                </div>)
                            }
                        </div>
                    </TabPanel>
                </div>
            </Tabs>

        </div>
    );
};

export default ShopByCatagory;
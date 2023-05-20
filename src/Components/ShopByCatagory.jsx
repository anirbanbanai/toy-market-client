// import {
//     Tabs,
//     TabsHeader,
//     TabsBody,
//     Tab,
//     TabPanel,
//   } from "@material-tailwind/react";

//   export default function Example() {
//     const data = [
//       {



//         label: "ttt",
//         value: "html",
//         desc: `It really matters and then like it really doesn't matter.
//         What matters is the people who are sparked by it. And the people
//         who are like offended by it, it doesn't matter.`,
//       },
//       {
//         label: "React",
//         value: "react",
//         desc: `Because it's about motivating the doers. Because I'm here
//         to follow my dreams and inspire other people to follow their dreams, too.`,
//       },

//       {
//         label: "Vue",
//         value: "vue",
//         desc: `We're not always in the position that we want to be at.
//         We're constantly growing. We're constantly making mistakes. We're
//         constantly trying to express ourselves and actualize our dreams.`,
//       },

//       {
//         label: "Angular",
//         value: "angular",
//         desc: `Because it's about motivating the doers. Because I'm here
//         to follow my dreams and inspire other people to follow their dreams, too.`,
//       },

//       {
//         label: "Svelte",
//         value: "svelte",
//         desc: `We're not always in the position that we want to be at.
//         We're constantly growing. We're constantly making mistakes. We're
//         constantly trying to express ourselves and actualize our dreams.`,
//       },

//   ];

//   return (

//   <Tabs id="custom-animation" value="html">
//     <TabsHeader>
//       {data.map(({ label, value }) => (
//         <Tab key={value} value={value}>
//           {label}
//         </Tab>
//       ))}
//     </TabsHeader>
//     <TabsBody
//       animate={{
//         initial: { y: 250 },
//         mount: { y: 0 },
//         unmount: { y: 250 },
//       }}
//     >
//       {data.map(({ value, desc }) => (
//         <TabPanel key={value} value={value}>
//           {desc}
//         </TabPanel>
//       ))}
//     </TabsBody>
//   </Tabs>
//   ); }



// import React from 'react';

// const ShopByCatagory = () => {
//     return (
//         <div>
//            <div className="tabs">
//   <a className="tab tab-lg tab-lifted">Large</a> 
//   <a className="tab tab-lg tab-lifted tab-active">Large</a> 
//   <a className="tab tab-lg tab-lifted">Large</a>
// </div>
//         </div>
//     );
// };

// export default ShopByCatagory;

// import React from 'react';
import { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const ShopByCatagory = () => {
    const [sport, setSport] = useState([])
    const [polish, setPolsh] = useState([])
    const [regular, setRegular] = useState([])
    const [truck, setTruck] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/toy/Sports_Cars`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSport(data)
            })
    }, [])
    useEffect(() => {
        fetch(`http://localhost:5000/toy/Polish_Cars`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPolsh(data)
            })
    }, [])
    useEffect(() => {
        fetch(`http://localhost:5000/toy/Regular_Cars`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setRegular(data)
            })
    }, [])
    useEffect(() => {
        fetch(`http://localhost:5000/toy/Truck`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTruck(data)
            })
    }, [])
    return (
        <div className='m-10 bg-pink-400'>
            <h3 className='text-4xl text-center mb-5'>Short by Catagory</h3>
            
            <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
                <TabList id='tt'>
                    <Tab ><button>Sport Car</button></Tab>
                    <Tab><button>Polish Car</button></Tab>
                    <Tab><button>Regular</button></Tab>
                    <Tab><button>Truck</button></Tab>
                  
                </TabList>
                <hr className='border-2 m-3 w-3/4 mx-auto' />

                <div className=' w-3/4 mx-auto text-center mt-5 mb-5'>
                    <TabPanel>
                       <div className='grid md:grid-cols-2 '>
                       {
                            sport.map(m => <div className='bg-slate-50 m-3 p-4 rounded-xl' key={m._id}>
                                <p className='text-xl m-3'>{m.name}</p>
                                <img className='w-3/4 mx-auto rounded-lg' src={m.img} alt="" />
                            </div>)
                        }
                       </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid md:grid-cols-2'>
                       {
                            polish.map(m => <div className='bg-slate-50 m-3 p-4 rounded-xl' key={m._id}>
                                <p className='text-xl m-3'>{m.name}</p>
                                <img className='w-3/4 mx-auto rounded-lg' src={m.img} alt="" />
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
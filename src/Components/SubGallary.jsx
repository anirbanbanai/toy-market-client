

const SubGallary = ({ main }) => {
    const {  img,  } = main;
    return (
        <div className="text-center border-2 border-red-500 m-2 rounded-lg ">
            
            <img className="w-3/4 mx-auto " src={img} alt="" />
            
           
        </div>
    );
};

export default SubGallary;
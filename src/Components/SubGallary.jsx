
const SubGallary = ({ main }) => {
    const { img, } = main;
    return (
        <div className="text-center border-2 border-red-500 m-2 rounded-lg ">
            {/* <div data-aos="fade-down">
            <img className="w-3/4 mx-auto " src={img} alt="" />
            </div> */}
            {/* <div data-aos="zoom-out-left">
            
            </div>
           */}

            <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                    
            <img className="w-3/4 mx-auto " src={img} alt="" />
            </div>

        </div>
    );
};

export default SubGallary;
// import AOS from 'aos';
// import 'aos/dist/aos.css'; 
// AOS.init();
// AOS.init();


// AOS.init({
 
//   disable: false, 
//   startEvent: 'DOMContentLoaded', 
//   initClassName: 'aos-init', 
//   animatedClassName: 'aos-animate', 
//   useClassNames: false,
//   disableMutationObserver: false, 
//   debounceDelay: 50,
//   throttleDelay: 99, 
//   offset: 120,
//   delay: 0,
//   duration: 400,
//   easing: 'ease',
//   once: false, 
//   mirror: false, 
//   anchorPlacement: 'top-bottom', 

// });

const SubGallary = ({ main }) => {
    const {  img,  } = main;
    return (
        <div className="text-center border-2 border-red-500 m-2 rounded-lg ">
            {/* <div data-aos="fade-down"></div> */}
            
            <img className="w-3/4 mx-auto " src={img} alt="" />
            
           
        </div>
    );
};

export default SubGallary;
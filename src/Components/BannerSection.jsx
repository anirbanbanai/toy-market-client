
const BannerSection = () => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ytimg.com/vi/l0w8WFkHBlQ/maxresdefault.jpg" className="w-full h-[450px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://previews.123rf.com/images/kravik93/kravik931804/kravik93180400097/99910500-the-child-is-worried-about-his-safety-in-a-toy-electric-car-and-fastens-himself-with-seat-belts.jpg" className="w-full h-[450px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://instamoz.com/images/d706b6ad8944076fcd36811cd1d7ebb5.jpg" className="w-full h-[450px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://previews.123rf.com/images/kravik93/kravik931804/kravik93180400095/99871254-amusement-park-a-funny-boy-rides-on-a-toy-electric-car-on-a-sunny-summer-day.jpg" className="w-full h-[450px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default BannerSection;
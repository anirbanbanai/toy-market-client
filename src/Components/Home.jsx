import { useTitle } from "../Hooks/useTitle";
import BannerSection from "./BannerSection";
import ExtraOne from "./ExtraOne";
import GallarySection from "./GallarySection";
import ShopByCatagory from "./ShopByCatagory";

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <BannerSection></BannerSection>
            <hr className="border-4 border-purple-600 border-dashed mt-5 mb-5" />
            <GallarySection></GallarySection>
            <ShopByCatagory></ShopByCatagory>
            <ExtraOne></ExtraOne>
        </div>
    );
};

export default Home;
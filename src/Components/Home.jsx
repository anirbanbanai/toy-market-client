import { useTitle } from "../Hooks/useTitle";
import BannerSection from "./BannerSection";
import GallarySection from "./GallarySection";

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <BannerSection></BannerSection>
            <hr className="border-4 border-purple-600 border-dashed mt-5 mb-5" />
            <GallarySection></GallarySection>
        </div>
    );
};

export default Home;
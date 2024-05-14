import Advanture from "../Component/Advanture";
import Banner from "../Component/Banner";
import Comment from "../Component/Comment";
import Newsletter from "../Component/Newsletter";
import RecentBlog from "../Component/RecentBlog";
import ScroolMotion from "../Component/ScroolMotion";

const Home = () => {
    return (
        <div>
            <ScroolMotion></ScroolMotion>
            <Banner></Banner>
            <RecentBlog></RecentBlog>
            <Advanture></Advanture>
            <Newsletter></Newsletter>
            <Comment></Comment>
        </div>
    );
};

export default Home;
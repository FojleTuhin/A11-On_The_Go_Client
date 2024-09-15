import Advanture from "../Component/Advanture";
// import Banner from "../Component/Banner";
import Comment from "../Component/Comment";
import Newsletter from "../Component/Newsletter";
import RecentBlog from "../Component/RecentBlog";
import ScroolMotion from "../Component/ScroolMotion";
import Service from "../Component/Service";
import Statistics from "../Component/Statistics";

const Home = () => {
    return (
        <div className="">

            <ScroolMotion></ScroolMotion>
           
            <div className="max-w-7xl mx-auto bg-[#DDF3FD] ">
                <Statistics></Statistics>
                <RecentBlog></RecentBlog>
                <Service></Service>
                <Advanture></Advanture>
                <Newsletter></Newsletter>
                <Comment></Comment>
            </div>
        </div>
    );
};

export default Home;
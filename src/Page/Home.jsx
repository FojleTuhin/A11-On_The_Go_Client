import Banner from "../Component/Banner";
import Newsletter from "../Component/Newsletter";
import RecentBlog from "../Component/RecentBlog";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentBlog></RecentBlog>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;
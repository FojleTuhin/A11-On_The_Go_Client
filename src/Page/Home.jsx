import Banner from "../Component/Banner";
import Comment from "../Component/Comment";
import Newsletter from "../Component/Newsletter";
import RecentBlog from "../Component/RecentBlog";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentBlog></RecentBlog>
            <Newsletter></Newsletter>
            <Comment></Comment>
        </div>
    );
};

export default Home;
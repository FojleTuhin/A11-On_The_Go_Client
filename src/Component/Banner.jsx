import 'animate.css';
import video from "../../public/dd.mp4"

const Banner = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/GFSbS4m/pexels-dreamypixel-552785.jpg')] h-[600px] bg-cover text-center  ">
            <div className="animate__animated animate__fadeInUp animate__slow">
                <p className="text-2xl pt-20 font-semibold  lg:text-6xl  lg:pt-36 lg:font-bold">EXPLORE.DREAM.DISCOVER</p>
                <p className="text-xl px-6 mt-6 lg:text-2xl lg:px-10 lg:mt-10 text-white">Explore captivating stories, expert advice, and thought-provoking content that fuels your curiosity. Join our community and embark on a journey of discovery today!</p>

                <p className="text-xl mt-8 lg:text-3xl lg:mt-10 text-white   border-2 w-80 px-10 py-4 m-auto font-bold">Start Exploring</p>
            </div>
        </div>
    );
};

export default Banner;
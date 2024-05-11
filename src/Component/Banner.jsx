import 'animate.css';
const Banner = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/GFSbS4m/pexels-dreamypixel-552785.jpg')] h-[510px] bg-cover text-center  ">
            <div className="animate__animated animate__fadeInUp animate__slow">
                <p className="text-6xl  pt-36 font-bold">EXPLORE.DREAM.DISCOVER</p>
                <p className="text-2xl px-10 mt-10 text-white">Explore captivating stories, expert advice, and thought-provoking content that fuels your curiosity. Join our community and embark on a journey of discovery today!</p>

                <p className="text-3xl mt-10 text-white   border-2 w-80 px-10 py-4 m-auto font-bold">Start Exploring</p>
            </div>
        </div>
    );
};

export default Banner;
import CardUi from "./CardUi";


const RecentBlog = () => {
    return (
        <div  className='bg-[#F8F6F1] px-4 md:px-8 lg:px-[70px] pb-10  pt-10 flex justify-center flex-wrap gap-6'>
            <CardUi></CardUi>
            <CardUi></CardUi>
            <CardUi></CardUi>
            <CardUi></CardUi>
        </div>
    );
};

export default RecentBlog;
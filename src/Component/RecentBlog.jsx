import { useQuery } from "@tanstack/react-query";
import CardUi from "./CardUi";
import axios from "axios";


const RecentBlog = () => {




    const { data = [], isLoading } = useQuery({
        queryFn: () => getData(),
        queryKey: ['feature']

    })


    const getData = async () => {
        const { data } = await axios(`https://on-the-go-server.vercel.app/feature`)
        return data
    }



    if (isLoading) {
        return (
            <div className="min-h-screen flex justify-center items-center gap-7">
                <div className="flex w-52 flex-col gap-4">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
                <div className="flex w-52 flex-col gap-4">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
                <div className="flex w-52 flex-col gap-4">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            </div>
        )
    }


    return (
        <div className="px-5">
            <div className='bg-[#D9EFFA] rounded-[32px] px-4 md:px-8 lg:px-[70px] pb-10  pt-20 '>
                <div className="text-center space-y-2 mb-20">
                    <p className="text-2xl font-medium md:text-5xl md:font-semibold text-[#020043]">Latest Stories from Our Blog</p>
                    <p className="text-[18px] font-medium md:text-2xl md:font-semibold text-[#020043]">Explore fresh insights, travel tips, and adventures from around the world</p>
                </div>
                <div className="flex justify-center flex-wrap gap-6">
                    {
                        data.slice(0, 6).map(item => <CardUi key={item._id} item={item}></CardUi>)
                    }
                </div>


            </div>
        </div>
    );
};

export default RecentBlog;
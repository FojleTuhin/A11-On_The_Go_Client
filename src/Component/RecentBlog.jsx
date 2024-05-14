import { useQuery } from "@tanstack/react-query";
import CardUi from "./CardUi";
import axios from "axios";


const RecentBlog = () => {

    const { data = [] } = useQuery({
        queryFn: () => getData(),
        queryKey: ['blogs']

    })
    const getData = async () => {
        const { data } = await axios(`https://on-the-go-server.vercel.app/blogs`)
        return data
    }

    


    return (
        <div className='bg-[#F8F6F1] px-4 md:px-8 lg:px-[70px] pb-10  pt-10 flex justify-center flex-wrap gap-6'>
            {
                data.slice(0,6).map(item => <CardUi key={item._id} item={item}></CardUi>)
            }
        </div>
    );
};

export default RecentBlog;
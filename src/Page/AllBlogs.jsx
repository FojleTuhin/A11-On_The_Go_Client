import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import CardUi from '../Component/CardUi';

const AllBlogs = () => {

    const { data = [] } = useQuery({
        queryFn: () => getData(),
        queryKey: ['blogs']

    })
    const getData = async () => {
        const { data } = await axios(`https://on-the-go-server.vercel.app/blogs`)
        return data
    }

    console.log(data);
    return (
        <div>
            <div className="bg-[#EBFBE5] text-[#3EA570] py-4">
                <h1 className="font-bold text-xl text-center">All Blog</h1>
            </div>
            <div className='bg-[#F8F6F1] px-4 md:px-8 lg:px-[70px] pb-10  pt-10 flex justify-center flex-wrap gap-6'>
                {
                    data.map(item => <CardUi key={item._id} item={item}></CardUi>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;
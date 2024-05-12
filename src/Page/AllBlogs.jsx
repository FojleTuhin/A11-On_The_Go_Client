import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import CardUi from '../Component/CardUi';

const AllBlogs = () => {

    const { data = [] } = useQuery({
        queryFn: () => getData(),
        queryKey: ['blogs']

    })
    const getData = async () => {
        const { data } = await axios(`http://localhost:5000/blogs`)
        return data
    }

    console.log(data);
    return (
        <div>
            <div className='bg-[#F8F6F1] px-4 md:px-8 lg:px-[70px] pb-10  pt-10 flex justify-center flex-wrap gap-6'>
                {
                    data.map(item => <CardUi key={item._id} item={item}></CardUi>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import CardUi from '../Component/CardUi';
import { useState } from 'react';
import img1 from "../../public/pexels-pixabay-65606.jpg"

const AllBlogs = () => {

    const [search, setSearch] = useState('');

    const [filter, setFilter] = useState('');

    const { data } = useQuery({
        queryFn: () => getData(),
        queryKey: ["blogs", filter, search],
        initialData: []

    })
    const getData = async () => {
        const { data } = await axios(`https://on-the-go-server.vercel.app/blogs?filter=${filter}&search=${search}`)
        return data
    }


    const handleSearch = (e) => {
        e.preventDefault()
        const searchText = e.target.title.value;
        setSearch(searchText)
        e.target.reset()
    }


    return (


        <div className=''>
            <img src={img1} className='h-[300px] w-full' alt="" />
            <div className='max-w-6xl mx-auto mb-10  -mt-32 relative '>
                <div className="bg-[#EBFBE5]  text-[#3EA570] py-4 rounded-t-lg">
                    <h1 className="font-bold text-xl text-center">All Blog</h1>
                </div>

                <div className='px-4 md:px-8 lg:px-[100px] pb-6 pt-5 flex justify-between bg-[#F8F6F1]'>
                    <div className="form-control md:w-1/4 ">
                        <label className="label">
                            <span className="label-text text-black font-bold">Search By Category</span>
                        </label>

                        <select
                            onChange={e => setFilter(e.target.value)}

                            className="select w-full bg-none  text-black border-black" name="category" id='category' value={filter}>
                            <option disabled selected> Category</option>
                            <option>City Travel</option>
                            <option>Adventure Travel</option>
                            <option>Wildlife Travel</option>
                            <option>Beach Travel</option>
                            <option>Cultural Travel</option>
                        </select>
                    </div>
                    <form className='flex' onSubmit={handleSearch}>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-black font-bold">Search By Title</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="title" required placeholder="Title" className="input input-bordered w-full bg-none  text-black border-black border-r-0 " />
                            </label>
                        </div>
                        <button className='btn mt-9 -ml-5 text-white border-none bg-pink-700 hover:text-black'>Search</button>
                    </form>



                </div>
                <div className='bg-[#F8F6F1] px-4 md:px-8 lg:px-[70px] pb-10  pt-10 flex justify-center flex-wrap gap-6 rounded-b-lg'>
                    {
                        data.map(item => <CardUi key={item._id} item={item}></CardUi>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllBlogs;
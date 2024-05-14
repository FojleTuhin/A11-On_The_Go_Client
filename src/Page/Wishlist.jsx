import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Firebase/FirebaseProvider";
import WishCard from "../Component/WishCard";

const Wishlist = () => {

    const { user } = useContext(AuthContext)


    const { data = [] } = useQuery({
        queryFn: () => getData(),
        queryKey: ['wishlist']

    })
    const getData = async () => {
        const { data } = await axios(`https://on-the-go-server.vercel.app/wishlist/${user?.email}`)
        return data
    }

    console.log(data);



    return (

        <div>
            <div className="bg-[#EBFBE5] text-[#3EA570] py-4">
                <h1 className="font-bold text-xl text-center">Wishlist</h1>
            </div>
            <div className='bg-[#F8F6F1] px-4 md:px-8 lg:px-[70px] pb-10  pt-10 flex justify-center flex-wrap gap-6'>
                {/* {
                    data.map(item => <CardUi key={item._id} item={item}></CardUi>)
                } */}

                {
                    data.map(item=><WishCard key={item._id} item={item}></WishCard>)
                }

                
            </div>
        </div>
    );
};

export default Wishlist;
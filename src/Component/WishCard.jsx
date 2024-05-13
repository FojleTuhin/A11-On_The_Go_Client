import { Link } from "react-router-dom";

const WishCard = ({item}) => {
    return (
        <div>
            <div className="card w-[300px]  shadow-xl ">
                    <figure className="px-6 pt-6">
                        <img src={item.image} className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <p>{item.category}</p>
                        <h2 className="card-title">{item.title}</h2>
                       

                        <p>{item.shortDescription}</p>

                        <hr className="bg-[#D1D1D1] mt-3 mb-3" />

                        <div className="card-actions flex justify-between">
                            <Link to={`/viewDetails/${item._id}`}><button className="btn bg-[#3EA570] border-none text-white">Read more</button></Link>

                            <button className="btn  bg-[#3EA570] border-none text-white">Remove</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default WishCard;
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const WishCard = ({item}) => {

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://on-the-go-server.vercel.app/wishlists/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                       
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Removed!",
                                text: "Your file has been removed.",
                                icon: "success"
                            });

                            
                        }


                        console.log(data);
                    })
            }
        });
    }

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

                            <button onClick={()=>handleDelete(item._id)} className="btn  bg-[#3EA570] border-none text-white">Remove</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default WishCard;
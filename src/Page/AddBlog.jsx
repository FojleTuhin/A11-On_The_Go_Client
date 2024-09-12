import { useContext } from "react";
import { AuthContext } from "../Firebase/FirebaseProvider";
import Swal from "sweetalert2";
import img1 from "../../public/pexels-life-of-pix-8047.jpg"

const AddBlog = () => {

    const { user } = useContext(AuthContext)

    const handleAddBlog = (e) => {
        e.preventDefault();
        const form = e.target;
        const category = form.category_name.value;
        const title = form.title.value;
        const image = form.image.value;
        const place = form.Place.value;
        const Latitude = form.Place_Latitude.value;
        const Longitude = form.Place_Longitude.value;
        const shortDescription = form.shortDescription.value;
        const longDescription = form.longDescription.value;
        const ownerEmail = user.email;
        const ownerImage = user.photoURL;
        const ownerName = user.displayName;



        const newBlog = {
            category,
            title,
            image,
            shortDescription,
            longDescription,
            ownerEmail,
            ownerImage,
            ownerName,
            BlogPlace: {
                place,
                Latitude,
                Longitude
            }

        }


        //add blog in database
        fetch('https://on-the-go-server.vercel.app/blog', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBlog)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your blog has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

        console.table(newBlog)
        form.reset();
    }

    return (
        <div className="bg-[#f4f3f0] pb-10">
            <img src={img1} alt="" className="h-[300px] w-full -z-10" />
            <div className="px-4 md:px-8 lg:px-[100px] py-10 max-w-6xl mx-auto relative -mt-32 z-20  bg-white ">


                <div className="bg-white ">
                    <h1 className="font-bold text-xl text-center mb-10">Add Blog</h1>
                </div>
                <form onSubmit={handleAddBlog}>
                    {/* 1st div */}
                    <div className="md:flex  gap-4 mb-10">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-black font-bold">Category</span>
                            </label>

                            <select className="select w-full bg-none bg-[#f4f3f0] text-black border-black" name="category_name">
                                <option disabled selected>Pick Your Category</option>
                                <option>City Travel</option>
                                <option>Adventure Travel</option>
                                <option>Wildlife Travel</option>
                                <option>Beach Travel</option>
                                <option>Cultural Travel</option>
                            </select>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-black font-bold">Title</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="title" required placeholder="Title" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                            </label>
                        </div>
                    </div>
                    {/* 2nd div */}
                    <div className="md:flex mb-8 gap-4 ">

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold">Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="image" required placeholder="Image URL" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                            </label>
                        </div>

                    </div>
                    <div className="md:flex mb-8 gap-4 ">

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold">Place</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="Place" required placeholder="Place" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold">Latitude</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="Place_Latitude" required placeholder="Find Latitude from google map" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold">Longitude</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="Place_Longitude" required placeholder="Find Longitude from google map" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                            </label>
                        </div>

                    </div>

                    <div className="md:flex mb-8 gap-4 ">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold"> Short Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="shortDescription" required placeholder="add a short description" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                            </label>
                        </div>

                    </div>
                    <div className="md:flex mb-8 gap-4 ">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold"> Long Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="longDescription" required placeholder="add a long description" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                            </label>
                        </div>

                    </div>

                    <div className="md:flex  ">
                        <button className="btn bg-[#3EA570] border-none text-white w-1/2 justify-center m-auto">Add Blog</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddBlog;
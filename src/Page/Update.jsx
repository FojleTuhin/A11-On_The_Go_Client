import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Update = () => {

    const blog = useLoaderData()
    const { _id, title, image, shortDescription, longDescription } = blog;

    console.log(_id, title);

    const handleUpdate = (e) => {

        e.preventDefault();
        const form = e.target;
        const category = form.category_name.value;
        const title = form.title.value;
        const image = form.image.value;
        const shortDescription = form.shortDescription.value;
        const longDescription = form.longDescription.value;




        const updateBlog = {
            category,
            title,
            image,
            shortDescription,
            longDescription
        }



        //Update blog in database
        fetch(`https://on-the-go-server.vercel.app/updateBlog/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateBlog)
        })

            .then(res => res.json())
            .then(data => {
                
                if (data.modifiedCount > 0) {
                    Swal.fire("Updated Successfully!"); 
                }
                console.log(data)
            })




    }

    return (
        <div className="px-4 md:px-8 lg:px-[100px] pt-20 pb-1 bg-[#F8F6F1] ">
            <div className="bg-[#EBFBE5] text-[#3EA570] py-4">
                <h1 className="font-bold text-xl text-center">Update Blog</h1>
            </div>
            <form onSubmit={handleUpdate}>
                {/* 1st div */}
                <div className="md:flex mb-8 gap-4 ">
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
                            <input type="text" name="title" required defaultValue={title} placeholder="Title" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
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
                            <input type="text" name="image" required defaultValue={image} placeholder="Image URL" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                        </label>
                    </div>

                </div>

                <div className="md:flex mb-8 gap-4 ">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-black font-bold"> Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="shortDescription" required defaultValue={shortDescription} placeholder="add a short description" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                        </label>
                    </div>

                </div>
                <div className="md:flex mb-8 gap-4 ">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-black font-bold"> Long Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="longDescription" required defaultValue={longDescription} placeholder="add a long description" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                        </label>
                    </div>

                </div>

                <div className="md:flex mb-8 ">
                    <button className="btn bg-[#3EA570] border-none text-white w-1/2 justify-center m-auto">Update Blog</button>
                </div>
            </form>
        </div>
    );
};

export default Update;
import { useContext } from "react";
import { AuthContext } from "../Firebase/FirebaseProvider";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { GrUpdate } from "react-icons/gr";

const ViewDetails = () => {

    const { user } = useContext(AuthContext)

    const blog = useLoaderData()

    const { _id } = blog;

    const handleComment = (e) => {

        if (user.email === blog.ownerEmail) {
            return Swal.fire("Can not comment on own blog!");
        }
        e.preventDefault();
        const comment = e.target.comment.value;
        const commentedName = user.displayName;
        const commentedEmail = user.email;
        const userImage = user.photoURL;


        const newComment = {
            comment,
            commentedName,
            commentedEmail,
            userImage,
            _id
        }

        // add comment

        fetch('https://on-the-go-server.vercel.app/comment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newComment)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your comment has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })


        e.target.reset();


    }

    //use tanstack query for get comments 

    const { data = [] } = useQuery({
        queryFn: () => getData(),
        queryKey: ['comments']

    })
    const getData = async () => {
        const { data } = await axios(`https://on-the-go-server.vercel.app/comments`)
        return data
    }

    console.log(blog);


    return (
        <div className="bg-[#F8F6F1] px-4 md:px-8 lg:px-[70px]">
            <div>
                <img className="h-[550px] w-full pt-10 pb-10 " src={blog.image} alt="" />
                <div className="w-[90%] p-6 md:w-[70%] m-auto md:p-12 bg-white relative bottom-32">
                    <p className="text-gray">{blog.category}</p>
                    <p className="text-3xl md:text-5xl">{blog.title}</p>

                    <hr className="w-[20%] border-2 mt-10 mb-10 border-black" />

                    <div className="flex justify-between">
                        <div className="flex gap-6 items-center text-gray mb-10 text-xs">
                            <p>By</p>
                            <img className="h-[40px] w-[40px] rounded-full" src={blog.ownerImage} alt="" />
                            <p>{blog.ownerName} </p>
                        </div>
                        <div className={`${user?.email !== blog.ownerEmail && 'hidden'}`}>
                           
                            <Link to={`/update/${blog._id}`}>
                                <button className="btn font-bold"><GrUpdate /></button>
                            </Link>
                        </div>

                    </div>
                    <hr className="mb-10" />
                    <div className="space-y-10">
                        <p>{blog.shortDescription}</p>

                        <p>{blog.longDescription}</p>
                    </div>

                    <div className="mt-10">
                        <p className="underline font-medium ">View comments</p>

                        {
                            data.filter(item => item._id === blog._id).map(blog =>
                                <div key={blog._id}>
                                    <div className="flex gap-6 mt-8">
                                        <img className="h-[40px] w-[40px] rounded-full" src={blog.userImage} alt="" />
                                        <div>
                                            <p className="font-semibold">{blog.commentedName}</p>
                                            <p>{blog.comment}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>

                    <div className="mt-10 ">
                        <form onSubmit={handleComment} className="flex flex-col space-y-5">

                            <textarea name="comment" id="" className="border-black textarea textarea-bordered" required placeholder="Add a comment"></textarea>
                            <button className="btn">Comment</button>
                        </form>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
import React, { useContext } from 'react';
import { AuthContext } from '../Firebase/FirebaseProvider';
import Swal from 'sweetalert2';
import { data } from 'autoprefixer';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const Comment = () => {
    const { user } = useContext(AuthContext)

    const handleComment = (e) => {
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
        }


        fetch('https://on-the-go-server.vercel.app/homePageComment', {
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
                    Swal.fire("Done");
                }
            })





        e.target.reset();
    }

    const { data = [] } = useQuery({
        queryFn: () => getData(),
        queryKey: ['allComments']

    })
    const getData = async () => {
        const { data } = await axios(`https://on-the-go-server.vercel.app
/homePageComment`)
        return data
    }

    console.log(data);


    return (
        <div className=' px-4 md:px-8 lg:px-[70px] '>




            <div className='mb-20 flex flex-wrap gap-6 justify-center'>
                {
                    data.map((comment, index) =>


                        <div key={index}>
                            <div className=' w-[250px] h-[300px] mt-14'>
                                <div className='w-[100px] h-[100px] m-auto relative top-12'>
                                    <img className='w-[100px] h-[100px] rounded-full' src={comment.userImage} alt="" />
                                </div>
                                <div className=' bg-[#F8F6F1] pt-[80px] pb-[20px] px-[20px] rounded-3xl'>

                                    <div className=''>
                                        <h2 className='text-center font-extrabold text-[#3EA570] mb-5 text-2xl'>{comment.commentedName}</h2>
                                        <p>{comment.comment}</p>

                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
            <div className="mt-10 mb-40">
                <form onSubmit={handleComment} className="flex flex-col space-y-5">

                    <textarea name="comment" id="" className="border-black textarea textarea-bordered" required placeholder="Add a comment"></textarea>
                    <button className="btn">Comment</button>
                </form>
            </div>
        </div>

    );
};

export default Comment;
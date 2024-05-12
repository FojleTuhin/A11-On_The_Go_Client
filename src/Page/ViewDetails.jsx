import { useContext } from "react";
import { AuthContext } from "../Firebase/FirebaseProvider";

const ViewDetails = () => {

    const { user } = useContext(AuthContext)

    const handleComment = (e) => {
        e.preventDefault();
        const comment = e.target.comment.value;
        const commented = user.displayName;
        const userImage = user.photoURL;
        e.target.reset();
    }

    return (
        <div className="bg-[#F8F6F1] px-4 md:px-8 lg:px-[70px]">
            <div>
                <img className="h-[550px] w-full pt-10 pb-10 " src="https://i.ibb.co/qYBT1wN/pexels-silverkblack-23228005.jpg " alt="" />
                <div className="w-[70%] m-auto p-12 bg-white relative bottom-32">
                    <p className="text-gray">Lorem ipsum dolor sit amet.</p>
                    <p className="text-5xl">Thailand’s Top 11 Gems: Must-Visit Thai Destinations</p>

                    <hr className="w-[20%] border-2 mt-10 mb-10 border-black" />

                    <div className="flex gap-6 items-center text-gray mb-10 text-xs">
                        <p>By</p>
                        <img className="h-[40px] w-[40px] rounded-full" src="https://i.ibb.co/qYBT1wN/pexels-silverkblack-23228005.jpg" alt="" />
                        <p>Fojle Tuhin</p>
                    </div>
                    <hr className="mb-10" />
                    <div className="space-y-10">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A explicabo iusto maxime exercitationem, unde enim dolore facere eius inventore voluptatum.</p>

                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro provident culpa ut quae sunt iure doloremque laborum corporis vel a id quo harum libero tenetur rerum mollitia eos, ratione error quaerat natus! Distinctio alias, quo facilis suscipit tenetur laborum numquam fugiat at possimus quis quasi aliquam corporis odit beatae culpa.</p>
                    </div>

                    <div className="mt-10">
                        <p className="underline font-medium mb-8">View comments</p>
                        <div className="flex gap-6">
                            <img className="h-[40px] w-[40px] rounded-full" src="https://i.ibb.co/qYBT1wN/pexels-silverkblack-23228005.jpg" alt="" />
                            <div>
                                <p className="font-semibold">Fojle Tuhin</p>
                                <p>I am from comment</p>

                            </div>
                        </div>

                    </div>

                    <div className="mt-10 ">
                        <form onSubmit={handleComment} className="flex flex-col space-y-5">
                            <textarea name="comment" id="" className="border-black textarea textarea-bordered" placeholder="Add a comment"></textarea>
                            <button className="btn">Comment</button>
                        </form>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
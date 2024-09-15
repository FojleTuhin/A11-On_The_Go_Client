import { MdOutlineArrowOutward } from "react-icons/md";

const Service = () => {
    return (
        <div className="px-5">
            <div className="md:p-8 p-3 bg-[#D9EFFA] md:grid md:grid-cols-2 gap-6 mt-20 rounded-[32px]">
                <div>
                    <button className="btn bg-[#FBFBFB] py-[11px] px-6 rounded-3xl text-[#020043] mb-4 ">Service</button>

                    <p className="text-4xl font-semibold text-[#4D4C7B] mb-4">Exclusive Services for <br /> Every Need.</p>
                    <p className="text-[#4D4C7B] text-[16px]">From tailored strategies to expert execution, our services are designed to provide maximum impact, helping you achieve success while focusing on quality, reliability, and client satisfaction.</p>

                    <button className="btn text-[16px] mb-4 md:mb-0 bg-[#FFC637] rounded-xl py-3 pl-6 pr-4 mt-10 font-medium">Traveling <MdOutlineArrowOutward className="text-[#020043] " /></button>

                </div>
                <div className="bg-[url('https://i.ibb.co.com/N3Vy68G/anders-jilden-c-Yr-MQA7a3-Wc-unsplash.jpg')] bg-no-repeat rounded-[30px]  bg-cover flex items-end p-5 mb-5 md:mb-0">

                    <div className="w-[321px] h-[144px] p-[18px] bg-[#020043] bg-opacity-[0.6] rounded-[20px] flex">
                        <div className="flex-[80%]">
                            <p className="font-semibold text-xl text-[#FFFFF5] opacity-100">Latest Insights and Stories</p>
                            <p className="mt-2 opacity-[0.9] text-[#FFFFF5] text-[12px]">Discover the Most Recent Trends, Expert Opinions, and Captivating Narratives from Around the World.</p>

                        </div>

                        <div className="felx-[20%] flex items-end">
                            <img className="h-12 w-12 opacity-100" src="https://i.ibb.co/J29K3dT/Group-28.png" alt="" />

                        </div>

                    </div>
                </div>
                <div className="bg-[url('https://i.ibb.co.com/T0SqDyx/sorasak-UIN-p-Ff-J7c-unsplash.jpg')] bg-no-repeat bg-cover rounded-[30px] flex items-end p-5 md:h-[320px] mb-5 md:mb-0">

                    <div className="w-[321px] h-[144px] p-[18px] bg-[#020043] bg-opacity-[0.6] rounded-[20px] flex">
                        <div className="flex-[80%]">
                            <p className="font-semibold text-xl text-[#FFFFF5] opacity-100">Fresh From the Blog</p>
                            <p className="mt-2 opacity-[0.9] text-[#FFFFF5] text-[12px]">Explore Fresh Perspectives, Trend Analysis, and Engaging Stories in Our Latest Collection of Insights.</p>

                        </div>

                        <div className="felx-[20%] flex items-end">
                            <img className="h-12 w-12 opacity-100" src="https://i.ibb.co/J29K3dT/Group-28.png" alt="" />

                        </div>

                    </div>
                </div>
                <div className="bg-[url('https://i.ibb.co.com/ynr8Sjt/tianshu-liu-SBK40fd-Kb-Ag-unsplash.jpg')] bg-no-repeat rounded-[30px] bg-cover flex items-end p-5 md:h-[320px]">

                    <div className="w-[321px] h-[144px] p-[18px] bg-[#020043] bg-opacity-[0.6] rounded-[20px] flex">
                        <div className="flex-[80%]">
                            <p className="font-semibold text-xl text-[#FFFFF5] opacity-100">What's New on the Blog?</p>
                            <p className="mt-2 opacity-[0.9] text-[#FFFFF5] text-[12px]">Uncover Cutting-Edge Trends, Expert Insights, and Compelling Stories Shaping Today’s Conversations and Innovations.</p>

                        </div>

                        <div className="felx-[20%] flex items-end">
                            <img className="h-12 w-12 opacity-100" src="https://i.ibb.co/J29K3dT/Group-28.png" alt="" />

                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Service;
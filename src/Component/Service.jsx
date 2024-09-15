import { MdOutlineArrowOutward } from "react-icons/md";

const Service = () => {
    return (
        <div className="px-5">
            <div className="md:p-8 p-3 bg-[#D9EFFA] md:grid md:grid-cols-2 gap-6 mt-40 rounded-[32px]">
                <div>
                    <button className="btn bg-[#FBFBFB] py-[11px] px-6 rounded-3xl text-[#020043] mb-4 ">Service</button>

                    <p className="text-4xl font-semibold text-[#4D4C7B] mb-4">Empowering Health, Enriching Lives</p>
                    <p className="text-[#4D4C7B] text-[16px]">We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.</p>

                    <button className="btn text-[16px] mb-4 md:mb-0 bg-[#FFC637] rounded-xl py-3 pl-6 pr-4 mt-10 font-medium">Appointment <MdOutlineArrowOutward className="text-[#020043] " /></button>

                </div>
                <div className="bg-[url('https://i.ibb.co/v4HfCbV/Rectangle-27-2.png')] bg-no-repeat rounded-[30px]  bg-cover flex items-end p-5 mb-5 md:mb-0">

                    <div className="w-[321px] h-[144px] p-[18px] bg-[#020043] bg-opacity-[0.6] rounded-[20px] flex">
                        <div className="flex-[80%]">
                            <p className="font-semibold text-xl text-[#FFFFF5] opacity-100">Advanced Technology</p>
                            <p className="mt-2 opacity-[0.9] text-[#FFFFF5] text-[12px]">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>

                        </div>

                        <div className="felx-[20%] flex items-end">
                            <img className="h-12 w-12 opacity-100" src="https://i.ibb.co/J29K3dT/Group-28.png" alt="" />

                        </div>

                    </div>
                </div>
                <div className="bg-[url('https://i.ibb.co/tqRhcfq/Rectangle-27-1.png')] bg-no-repeat bg-cover rounded-[30px] flex items-end p-5 md:h-[320px] mb-5 md:mb-0">

                    <div className="w-[321px] h-[144px] p-[18px] bg-[#020043] bg-opacity-[0.6] rounded-[20px] flex">
                        <div className="flex-[80%]">
                            <p className="font-semibold text-xl text-[#FFFFF5] opacity-100">Online Doctor Meet</p>
                            <p className="mt-2 opacity-[0.9] text-[#FFFFF5] text-[12px]">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>

                        </div>

                        <div className="felx-[20%] flex items-end">
                            <img className="h-12 w-12 opacity-100" src="https://i.ibb.co/J29K3dT/Group-28.png" alt="" />

                        </div>

                    </div>
                </div>
                <div className="bg-[url('https://i.ibb.co/37xcNB9/Rectangle-27.png')] bg-no-repeat rounded-[30px] bg-cover flex items-end p-5 md:h-[320px]">

                    <div className="w-[321px] h-[144px] p-[18px] bg-[#020043] bg-opacity-[0.6] rounded-[20px] flex">
                        <div className="flex-[80%]">
                            <p className="font-semibold text-xl text-[#FFFFF5] opacity-100">Consultancy your health</p>
                            <p className="mt-2 opacity-[0.9] text-[#FFFFF5] text-[12px]">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>

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
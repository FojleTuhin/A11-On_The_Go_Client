


const Statistics = () => {
    return (
        <div className="flex py-20 px-10 gap-5  flex-col-reverse md:flex-row z-50">

            <div className="md:w-[20%]">
                <div className=" border-[0.5px] rounded-3xl bg-white border-[#02004333] p-5 h-[330px] ">

                    <p className="text-[#020043] font-semibold text-[40px]">90%</p>
                    <p className="opacity-[0.8] mb-6 mt-2 text-[#020043] text-[14px]">User satisfaction rate, reflecting our commitment.</p>
                    <img className="h-[130px] w-[130px] mx-auto items-end" src='https://i.ibb.co/NWjf8ND/Group-12.png' alt="" />

                </div>

            </div>

            <div className="md:w-[80%] md:flex gap-5 ">
                <div className="md:w-[74%]">

                    <div>
                        <p className="text-center text-2xl font-medium md:text-5xl md:font-semibold text-[#020043]">Your Source for Knowledge and Inspiration</p>
                    </div>
                    <div className="md:grid md:grid-cols-3 gap-5 items-end">
                        <div className='mt-5 mb-5 md:mb-0'>
                            <div className=" border-[0.5px] rounded-3xl bg-[#FFFFF5] border-[#02004333] p-5">
                                <p className="text-[#020043] font-semibold text-[40px]">500+</p>
                                <p className="text-[#343268] text-[14px]">Board-certified <br /> blogers.</p>

                                <div className="flex justify-end">
                                    <img className="w-[90px] h-[71px]" src='https://i.ibb.co/zVNcL0v/contract-1-1.png' alt="" />
                                </div>

                            </div>
                        </div>


                        <div>
                            <div className=" border-[0.5px] rounded-3xl bg-[#FBFBFB] border-[#02004333] p-5">
                                <div className="flex gap-[11px] items-center">
                                    <p className="text-[#020043] font-semibold text-[40px]">4.8</p>
                                    <img className="h-8 w-8" src="https://i.ibb.co/HDFW56Q/fi-sr-star.png" alt="" />
                                </div>

                                <p className="text-[#020043] text-[14px] opacity-[0.8] mb-5">Over 20,000 Bloger</p>


                                <div className="flex ">
                                    <img className="w-[35px] h-[35px]" src='https://i.ibb.co/gVSZwDB/Ellipse-2.png' alt="" />
                                    <img className="w-[35px] h-[35px] -ml-4" src='https://i.ibb.co/YZwnYC4/Ellipse-4.png' alt="" />
                                    <img className="w-[35px] h-[35px] -ml-4" src='https://i.ibb.co/nfjhCBJ/Ellipse-5.png' alt="" />
                                    <img className="w-[35px] h-[35px] -ml-4" src='https://i.ibb.co/SyjdvQp/Ellipse-3.png' alt="" />
                                </div>

                            </div>
                        </div>



                        <div className='mt-5 mb-5 md:mb-0'>
                            <div className=" border-[0.5px] rounded-3xl bg-[#FFFFF5] border-[#02004333] p-5">
                                <p className="text-[#020043] font-semibold text-[40px]">$5000</p>
                                <p className="text-[#343268] text-[14px]">Money spend <br />
                                    for Traveling</p>

                                <div className="flex justify-end">
                                    <img className="w-[90px] h-[71px]" src='https://i.ibb.co/db7Wmt5/Group-1.png' alt="" />
                                </div>

                            </div>
                        </div>




                    </div>
                </div>


                <div className="md:w-[26%]">
                    <div className=" border-[0.5px] rounded-3xl bg-white border-[#02004333] p-5 h-[330px] ">

                        <p className="text-[#020043] font-semibold text-[40px]">50+</p>
                        <p className="opacity-[0.8] mb-[45px] mt-2 text-[#020043] text-[14px]">Free guide video
                            for bloger.</p>
                        <img className="h-[130px] w-[130px] mx-auto items-end" src='https://i.ibb.co/hVbgKyx/Group.png' alt="" />

                    </div>

                </div>

            </div>


        </div>
    );
};

export default Statistics;
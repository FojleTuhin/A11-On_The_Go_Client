
const Advanture = () => {
    return (
        <div className="px-4 md:px-12 lg:px-[120px] mt-12">
            <div className="md:grid md:grid-cols-2 gap-0">
                <div className="w-full mx-auto">
                    {/* <img className="bg-cover h-[500px] w-full rounded-2xl" src="https://i.ibb.co/z88mz2y/pexels-aronvisuals-1743165.jpg" alt="" /> */}
                    {/* <div>
                        <iframe width="500" height="315" src="https://www.youtube.com/embed/_Nd2i4OpbdU?si=ZjtrHbY6_4a1-amc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div> */}

                    <div className="relative w-full pb-[56.25%]">
                        <iframe className="absolute top-0 left-0 w-full h-full" width="500" height="315" src="https://www.youtube.com/embed/_Nd2i4OpbdU?si=ZjtrHbY6_4a1-amc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                </div>
                <div className="flex items-center mt-5 md:mt-0">
                   
                        <p className="lg:text-5xl md:text-3xl text-xl font-bold text-center ">One of the most famous Travel Bloger from Bangladesh</p>
                   
                </div>
            </div>
        </div>
    );
};

export default Advanture;
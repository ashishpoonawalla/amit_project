import banner from "../assets/banner.svg";

const Home = () => {
    return (
        <div className="md:px-14 p-4 max-w-screen-2xl mx-auto mt-20">
            <div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
                <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
                    {/* banner Image */}
                    <div>
                        <img src={banner} alt="" className="lg:h-[386px]" />
                    </div>
                    {/* banner content */}
                    <div className="md:w-3/5">
                        <h2 className="md:text-6xl text-4xl font-bold text-white mb-6 leading-[110.4px]">Develop your skills without diligence</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div>
                            <button>Get Started</button>
                            <button>Discover</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
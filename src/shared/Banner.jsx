import banner from "../assets/banner.svg";

const Banner = () => {
  return (
    
            <div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
                <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
                    {/* banner Image */}
                    <div>
                        <img src={banner} alt="" className="lg:h-[386px]" />
                    </div>
                    {/* banner content */}
                    <div className="md:w-3/5">
                        <h2 className="md:text-6xl text-4xl font-bold text-white mb-6 leading-relaxed">call me 7276116725. Expert need in Business process</h2>
                        <p className="text-[#EBEBEB] text-2xl mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="space-x-5 space-y-4">
                            <button className="btnPrimary">Get Started</button>
                            <button className="btnPrimary">Discover</button>
                        </div>
                    </div>

                </div>
            </div>
       
  )
}

export default Banner
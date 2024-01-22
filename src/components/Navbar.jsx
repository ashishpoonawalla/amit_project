import logo from "../assets/react.svg";

const Navbar = () => {
    const navItems=[
        {link: "Overview", path: "home"},
        {link: "Feature", path: "feature"},
        {link: "About", path: "about"},
        {link: "Pricing", path: "pricing"},
    ]
    return (
        <nav>
            <div className="text-xl">
                <div>
                    <a href="/" className="text-2xl font-semibold flex items-center space-x-3 text-primary">
                        <img src={logo} alt="" className="w-10 inline-block items-center"/><span>XYZ</span>
                    </a>

                    {/* nav items */}
                    <ul className="md:flex space-x-12">
                        {
                            navItems.map(({link, path})=> <a key={link} href={path} className="block hover:text-gray-300">{link}</a>)
                        }
                    </ul>
                </div>

                  {/* language & signup */}
                  <div className="space-x-12 hidden md:flex items-center">
                        <a href="/">Language</a>
                        <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded
                         hover:text-white hover:bg-indigo-600">Sign up</button>
                  </div>
            </div>
        </nav>
    )
}

export default Navbar
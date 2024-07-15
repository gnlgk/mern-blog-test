import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

export default function Header() {
    return (
        <header id='header' className="bg-black text-white">
            <div className="flex  justify-between items-center p-4">
                <nav>
                    <IoMdMenu className="size-5" />
                    <ul className="bg-white text-black p-4 absolute top-0 left-0 hidden">
                        <li className="border-b border-black pr-20 py-2 text-xl">Menu</li>
                        <li className="pr-20 py-2 text-xl text-gray-400">Home</li>
                        <li className="pr-20 py-2 text-xl text-gray-400">SignIn</li>
                        <li className="pr-20 py-2 text-xl text-gray-400">SignUp</li>
                    </ul>
                </nav>
                <h1 className="text-2xl font-['EliceDigitalBaeum-Bd']">
                    <Link href='/'><span className="font-bold">GNLGK</span> Blog</Link>
                </h1>
                <div>
                    <button className="px-2">
                        <FaSearch className="size-5" />
                    </button>
                    {/* <button className="px-2">
                        signin
                    </button>
                    <button className="px-2">
                        signup
                    </button> */}
                </div>

            </div>
        </header >
    )
}

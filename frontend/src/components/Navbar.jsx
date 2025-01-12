import { useState } from 'react';
import logo from '../assets/img/123.png'
import { FaCaretDown } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        click ? setClick(false) : setClick(true)
    }

    return (
        <div className="flex justify-between w-full">
            <div className="w-24">
                <img src={logo} alt="" />
            </div>
            <div>
                <button onClick={handleClick} className="relative border-[1px] flex items-center gap-5 p-2 pr-3 border-[#333333] rounded-[.9em] hover:border-[#888888]">
                    <div className="flex items-center gap-1">
                        <MdAccountCircle style={{ fontSize: "24px" }} />
                        <span className="max-sm:hidden">Chlomi</span>
                    </div>
                    <FaCaretDown style={{ color: "#555555" }} />
                    <div className={` ${click ? 'flex' : 'hidden'} flex-col bg-[#0C0C0C] border-[1px] overflow-hidden border-[#333333] hover:border-[#888888] rounded-2xl absolute top-[115%] right-0`}>
                        <div className="p-3  pl-14 pr-4 w-max hover:bg-[#EEEEEE] hover:text-black transition duration-300">
                            <span>My Campaigns</span>
                        </div>
                        <div className="p-3 pl-14 text-end pr-4 hover:bg-[#EEEEEE] hover:border-[#EEEEEE] hover:text-black transition duration-300">
                            <span>Logout</span>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Navbar;
import { useEffect, useState } from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";

const CompaignsDetails = () => {
    const [campaign, setCampaign] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const fetchDetails = async () => {
            const response = await fetch("http://localhost:5000/api/campaigns/" + id)
            const json = await response.json()

            if (response.ok) {
                setCampaign(json)
            }
        }

        fetchDetails()
    }, [])
    return (
        <div className="mt-10 w-full">
            <Link to='/'>
                <div className="flex items-center gap-2">
                    <button><FaCircleArrowLeft style={{ fontSize: "28px" }} /></button>
                    <span className="text-xl">Back</span>
                </div>
            </Link>
            {campaign &&
                <div>
                    <div className="flex justify-between items-center mt-4">
                        <span className="text-3xl font-thin">{ campaign.title }</span>
                        <div className={`bg-green-500 p-2 px-4 text-sm rounded-xl`}>{ campaign.status}</div>
                    </div>
                    <div className="w-full mt-5 font-mono">
                        { campaign.description }
                    </div>
                </div>
            }
            <form className="flex border-[1px] border-[#333333] focus-within:border-[#888888] rounded-xl overflow-hidden p-2 h-max pl-3 mt-6">
                <input type="text" className="bg-transparent outline-none w-full font-light" placeholder="Add content link..." />
                <button className="p-2 px-4 bg-white text-black font-medium rounded-lg">Submit</button>
            </form>
        </div>
    );
}

export default CompaignsDetails;
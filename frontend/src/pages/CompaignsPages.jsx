import { useEffect, useState } from "react";
import { Campaign } from "../components/Campaign";
import { Link } from "react-router-dom";

const CompaignsPages = () => {
    const [campaigns, setCampaigns] = useState([])

    useEffect(() => {
        const fetchCampaigns = async () => {
            const response = await fetch('http://localhost:5000/api/campaigns')
            const json = await response.json()

            if (response.ok) {
                setCampaigns(json)
            }
        }


        fetchCampaigns()
    }, [])

    console.log(campaigns)

    return (
        <div className="mt-10 w-full">
            <span className="text-3xl font-thin">Campaigns</span>
            <div className="flex flex-wrap gap-[10px] mt-3 justify-between">
                {campaigns && campaigns.map((compaign) => (
                    <Link to={"/campaign/" + compaign._id}>
                        <Campaign key={compaign._id} data={compaign} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default CompaignsPages;
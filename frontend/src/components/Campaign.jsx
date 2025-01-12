import React from 'react'
import { formatDistanceToNow, parseISO } from 'date-fns';

export const Campaign = ({ data }) => {
    return (
        <div className='cursor-pointer w-[395px] border-[1px] border-[#333333] p-3 rounded-2xl'>
            <div className="flex justify-between">
                <div className="title">{ data.title }</div>
                <div className={`${data.status == 'Active' ? 'bg-green-400' : 'bg-red-400'} p-2 text-xs rounded-lg`}>{ data.status }</div>
            </div>
            <div>
                <span className="text-[#FFFFFF30] font-light">Ends {formatDistanceToNow(parseISO(data.deadline), { addSuffix: true })}</span>
            </div>
        </div>
    )
}

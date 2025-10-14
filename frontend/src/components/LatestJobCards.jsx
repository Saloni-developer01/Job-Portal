import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const LatestJobCards = ({job}) => {
    const navigate = useNavigate();
    return (
        <div onClick={()=> navigate(`/description/${job._id}`)} className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
            <div>
                <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
                <p className='text-sm text-gray-500'>India</p>
            </div>
            <div>
                <h1 className='font-extrabold text-gray-800  text-lg my-2'>{job?.title}</h1>
                <p className='text-sm text-gray-600'>{job?.description}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'px-3 py-1 text-xs font-medium text-teal-700 bg-teal-50 rounded-md'} variant="ghost">{job?.position} Positions</Badge>
                <Badge className={'px-3 py-1 text-xs font-medium text-white bg-green-500 rounded-md shadow-md'} variant="ghost">{job?.jobType}</Badge>
                <Badge className={'px-3 py-1 text-xs font-bold text-cyan-700 bg-cyan-100 rounded-md'} variant="ghost">{job?.salary}LPA</Badge>
            </div>

        </div>
    )
}

export default LatestJobCards

import React, { useEffect, useMemo } from 'react';
import Navbar from './shared/Navbar';
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';


const Browse = () => {
    useGetAllJobs();
    const { allJobs, searchedQuery } = useSelector(store => store.job); 
    const dispatch = useDispatch();

    useEffect(()=>{
        return ()=>{
            dispatch(setSearchedQuery(""));
        }
    },[])
    
    const filteredJobs = useMemo(() => {
        if (!searchedQuery) {
            return allJobs;
        }

        const lowerCaseQuery = searchedQuery.toLowerCase().trim();

        return allJobs.filter(job => {
            const titleMatch = job?.title?.toLowerCase().includes(lowerCaseQuery);
            const descriptionMatch = job?.description?.toLowerCase().includes(lowerCaseQuery);
            const companyMatch = job?.company?.name?.toLowerCase().includes(lowerCaseQuery); 
            
            return titleMatch || descriptionMatch || companyMatch;
        });
    }, [allJobs, searchedQuery]); 

    if (searchedQuery && filteredJobs.length === 0) {
        return (
            <div>
                <Navbar />
                <div className='max-w-7xl mx-auto my-10 text-center p-10 bg-white rounded-lg shadow-lg'>
                    <h1 className='font-bold text-2xl text-red-500'>🥲 Sorry! no jobs were found for "{searchedQuery}".</h1>
                    <p className='text-gray-600 mt-2'>Please check your spelling or try searching for a different keyword.</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto my-10'>
                <h1 className='font-bold text-xl my-10 text-[#624746]'>
                    {searchedQuery ? `Showing results for "${searchedQuery}"` : "All Available Jobs"} ({filteredJobs.length})
                </h1>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        filteredJobs.map((job) => {
                            return (
                                <Job key={job._id} job={job}/>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default Browse;

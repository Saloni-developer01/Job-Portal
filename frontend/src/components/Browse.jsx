import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';


const Browse = () => {
    useGetAllJobs();
    const {allJobs} = useSelector(store=>store.job);
    const dispatch = useDispatch();
    useEffect(()=>{
        return ()=>{
            dispatch(setSearchedQuery(""));
        }
    },[])


    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto my-10'>
                <h1 className='font-bold text-xl my-10 text-[#624746]'>Search Results ({allJobs.length})</h1>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        allJobs.map((job) => {
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

export default Browse











// import React, { useEffect, useMemo } from 'react'; // 🛑 useMemo import kiya
// import Navbar from './shared/Navbar';
// import Job from './Job';
// import { useDispatch, useSelector } from 'react-redux';
// import { setSearchedQuery } from '@/redux/jobSlice';
// import useGetAllJobs from '@/hooks/useGetAllJobs';


// const Browse = () => {
//     useGetAllJobs();
//     // 🛑 Change 1: Redux se searchedQuery bhi fetch kiya
//     const { allJobs, searchedQuery } = useSelector(store => store.job); 
//     const dispatch = useDispatch();

//     // Jab component unmount ho, toh search query clear ho jaati hai
//     useEffect(()=>{
//         return ()=>{
//             dispatch(setSearchedQuery(""));
//         }
//     },[])
    
//     // 🛑 Change 2: Filtering Logic using useMemo
//     const filteredJobs = useMemo(() => {
//         if (!searchedQuery) {
//             // Agar koi search query nahi hai, toh saare jobs dikhao
//             return allJobs;
//         }

//         const lowerCaseQuery = searchedQuery.toLowerCase().trim();

//         // Jobs array ko filter karo based on title, description, ya company name
//         return allJobs.filter(job => {
//             const titleMatch = job?.title?.toLowerCase().includes(lowerCaseQuery);
//             const descriptionMatch = job?.description?.toLowerCase().includes(lowerCaseQuery);
//             // Assuming job object mein company ka name bhi available hai
//             const companyMatch = job?.company?.name?.toLowerCase().includes(lowerCaseQuery); 
            
//             return titleMatch || descriptionMatch || companyMatch;
//         });
//     }, [allJobs, searchedQuery]); // Dependencies mein allJobs aur searchedQuery

//     // 🛑 Change 3: Conditional Display (No Results Found)
//     // Agar user ne kuch search kiya aur result 0 aaya
//     if (searchedQuery && filteredJobs.length === 0) {
//         return (
//             <div>
//                 <Navbar />
//                 <div className='max-w-7xl mx-auto my-10 text-center p-10 bg-white rounded-lg shadow-lg'>
//                     <h1 className='font-bold text-2xl text-red-500'>🥲 Sorry! no jobs were found for "{searchedQuery}".</h1>
//                     <p className='text-gray-600 mt-2'>Please check your spelling or try searching for a different keyword.</p>
//                 </div>
//             </div>
//         );
//     }

//     // 🛑 Change 4: Main Render
//     return (
//         <div>
//             <Navbar />
//             <div className='max-w-7xl mx-auto my-10'>
//                 {/* Agar searchedQuery hai, toh filtered count dikhao */}
//                 <h1 className='font-bold text-xl my-10 text-[#624746]'>
//                     {searchedQuery ? `Showing results for "${searchedQuery}"` : "All Available Jobs"} ({filteredJobs.length})
//                 </h1>
//                 <div className='grid grid-cols-3 gap-4'>
//                     {/* 🛑 Change 5: filteredJobs ko map karo */}
//                     {
//                         filteredJobs.map((job) => {
//                             return (
//                                 <Job key={job._id} job={job}/>
//                             )
//                         })
//                     }
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Browse;

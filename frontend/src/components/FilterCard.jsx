// import React, { useEffect, useState } from 'react'
// import { RadioGroup, RadioGroupItem } from './ui/radio-group'
// import { Label } from './ui/label'
// import { useDispatch } from 'react-redux'
// import { setSearchedQuery } from '@/redux/jobSlice'

// const fitlerData = [
//     {
//         fitlerType: "Location",
//         array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
//     },
//     {
//         fitlerType: "Industry",
//         array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
//     },
//     {
//         fitlerType: "Salary",
//         array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
//     },
// ]

// const FilterCard = () => {
//     const [selectedValue, setSelectedValue] = useState('');
//     const dispatch = useDispatch();
//     const changeHandler = (value) => {
//         setSelectedValue(value);
//     }
//     useEffect(()=>{
//         dispatch(setSearchedQuery(selectedValue));
//     },[selectedValue]);
//     return (
//         <div className='w-full bg-white p-3 rounded-md'>
//             <h1 className='font-bold text-lg'>Filter Jobs</h1>
//             <hr className='mt-3' />
//             <RadioGroup value={selectedValue} onValueChange={changeHandler}>
//                 {
//                     fitlerData.map((data, index) => (
//                         <div>
//                             <h1 className='font-bold text-lg text-[#624746]'>{data.fitlerType}</h1>
//                             {
//                                 data.array.map((item, idx) => {
//                                     const itemId = `id${index}-${idx}`
//                                     return (
//                                         <div className='flex items-center space-x-2 my-2'>
//                                             <RadioGroupItem value={item} id={itemId} className="text-[#03AF75] rounded-sm" />
//                                             <Label htmlFor={itemId} className="text-[#444746]">{item}</Label>
//                                         </div>
//                                     )
//                                 })
//                             }
//                             <input type='text' placeholder='search here'/>
//                         </div>
//                     ))
//                 }
//             </RadioGroup>
//         </div>
//     )
// }

// export default FilterCard


















import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'

// Yeh dummy data hai. Hum isko use karenge.
const fitlerData = [
    {
        fitlerType: "Location",
        array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
    },
    {
        fitlerType: "Industry",
        array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
    },
    {
        fitlerType: "Salary",
        array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
    },
]

const FilterCard = () => {
    // Radio button ke liye state
    const [selectedValue, setSelectedValue] = useState('');
    
    // Har filter section ke search input ke liye state
    const [searchQueries, setSearchQueries] = useState({
        Location: '',
        Industry: '',
        Salary: '',
    });

    const dispatch = useDispatch();

    const changeHandler = (value) => {
        // Jab koi radio button select ho toh
        setSelectedValue(value);
    }
    
    // Input field change hone par yeh function call hoga
    const handleSearchChange = (type, value) => {
        setSearchQueries(prev => ({
            ...prev,
            [type]: value // Jaise Location: 'delhi'
        }));
        // Search query ko Redux mein bhi dispatch kar dein for main job list filtering
        dispatch(setSearchedQuery(value)); 
        
        // NOTE: Agar aap multiple search terms Redux mein bhejna chahte hain, 
        // toh setSearchedQuery mein aapko pura searchQueries object bhejna padega.
        // Abhi ke liye, hum sirf latest search value dispatch kar rahe hain.
    };

    useEffect(()=>{
        // Agar radio button select ho toh uski value dispatch karein
        if(selectedValue){
            dispatch(setSearchedQuery(selectedValue));
        }
    },[selectedValue, dispatch]);

    // **IMPORTANT:** Filtered list banane ka function
    const getFilteredArray = (data) => {
        const query = searchQueries[data.fitlerType].toLowerCase();
        if (!query) {
            return data.array; // Agar search blank hai toh sab dikhao
        }
        // Array ko filter karo
        return data.array.filter(item => 
            item.toLowerCase().includes(query)
        );
    }

    return (
        <div className='w-full bg-white p-3 rounded-md'>
            <h1 className='font-bold text-lg'>Filter Jobs</h1>
            <hr className='mt-3' />
            <RadioGroup value={selectedValue} onValueChange={changeHandler}>
                {
                    fitlerData.map((data, index) => {
                        // Filtered array use karein
                        const filteredArray = getFilteredArray(data); 

                        return (
                            <div key={index} className='mb-6'>
                                <h1 className='font-bold text-lg text-[#624746]'>{data.fitlerType}</h1>
                                
                                {/* Search Input Field */}
                                <input 
                                    type='text' 
                                    placeholder={`Search ${data.fitlerType} here...`}
                                    value={searchQueries[data.fitlerType]}
                                    onChange={(e) => handleSearchChange(data.fitlerType, e.target.value)}
                                    className='w-full p-2 mt-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#03AF75]'
                                />

                                {/* Radio Buttons List */}
                                {
                                    filteredArray.length > 0 ? (
                                        filteredArray.map((item, idx) => {
                                            const itemId = `id${index}-${idx}`
                                            return (
                                                <div key={itemId} className='flex items-center space-x-2 my-2'>
                                                    {/* Radio Button */}
                                                    <RadioGroupItem 
                                                        value={item} 
                                                        id={itemId} 
                                                        // Ye classes apke square radio button aur green tick mark ke liye hain
                                                        className="h-4 w-4 rounded-sm border border-gray-400 data-[state=checked]:border-[#03AF75] data-[state=checked]:text-[#03AF75]"
                                                    />
                                                    <Label htmlFor={itemId} className="text-[#444746]">{item}</Label>
                                                </div>
                                            )
                                        })
                                    ) : (
                                        <p className='text-sm text-gray-500'>No results found.</p>
                                    )
                                }
                                
                            </div>
                        )
                    })
                }
            </RadioGroup>
        </div>
    )
}

export default FilterCard

import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'
import { Button } from './ui/button' 

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
    const [selectedValue, setSelectedValue] = useState('');
    
    const [searchQueries, setSearchQueries] = useState({
        Location: '',
        Industry: '',
        Salary: '',
    });

    const dispatch = useDispatch();

    const changeHandler = (value) => {
        setSelectedValue(value);
        const type = fitlerData.find(data => data.array.includes(value))?.fitlerType;
        if (type) {
            setSearchQueries(prev => ({
                ...prev,
                [type]: ''
            }));
        }
    }
    
    const handleSearchChange = (type, value) => {
        setSearchQueries(prev => ({
            ...prev,
            [type]: value 
        }));
        dispatch(setSearchedQuery(value)); 
        setSelectedValue(''); 
    };

    const resetHandler = () => {
        setSelectedValue('');
        
        setSearchQueries({
            Location: '',
            Industry: '',
            Salary: '',
        });
        
        dispatch(setSearchedQuery(""));
    }

    useEffect(()=>{
        if(selectedValue){
            dispatch(setSearchedQuery(selectedValue));
        }
    },[selectedValue, dispatch]);

    const getFilteredArray = (data) => {
        const query = searchQueries[data.fitlerType].toLowerCase();
        if (!query) {
            return data.array; 
        }
        return data.array.filter(item => 
            item.toLowerCase().includes(query)
        );
    }

    return (
        <div className='w-full bg-white p-3 rounded-md'>
            <div className='flex justify-between items-center mb-3'> 
                <h1 className='font-bold text-lg'>Filter Jobs</h1>
                <Button 
                    onClick={resetHandler}
                    variant="ghost" 
                    className="text-sm text-red-500 hover:bg-red-50 hover:text-red-600 p-1 h-auto"
                >
                    Clear All
                </Button>
            </div>
            
            <hr className='mt-3' />
            <RadioGroup value={selectedValue} onValueChange={changeHandler}>
                {
                    fitlerData.map((data, index) => {
                        const filteredArray = getFilteredArray(data); 

                        return (
                            <div key={index} className='mb-6'>
                                <h1 className='font-bold text-lg text-[#624746] mt-4'>{data.fitlerType}</h1>
                                
                                <input 
                                    type='text' 
                                    placeholder={`Search ${data.fitlerType} here...`}
                                    value={searchQueries[data.fitlerType]}
                                    onChange={(e) => handleSearchChange(data.fitlerType, e.target.value)}
                                    className='w-full p-2 mt-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#03AF75]'
                                />

                                {
                                    filteredArray.length > 0 ? (
                                        filteredArray.map((item, idx) => {
                                            const itemId = `id${index}-${idx}`
                                            return (
                                                <div key={itemId} className='flex items-center space-x-2 my-2'>
                                                    <RadioGroupItem 
                                                        value={item} 
                                                        id={itemId} 
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

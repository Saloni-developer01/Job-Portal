import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';
import "../App.css";

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center heroSection'>
            <div className='flex flex-col gap-5 my-10'>
                
                <h1 className='text-5xl text-white font-bold'>Find The Perfect Job <br /> That You Deserved</h1>
                <p className='text-white w-[50%] ml-[300px] mt-[10px] mb-[10px] text-bolder text-shadow-md font-md'>Stop searching and start finding. Your dream company is hiring now. Access thousands of verified openings across the tech, finance, and Web3 sectors.</p>
                <div className='flex shadow-lg items-center gap-4 mx-auto'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none h-[40px] rounded-md pl-3  w-[25rem]'

                    />
                    <Button onClick={searchJobHandler} className="rounded-r-md bg-[#03AF75] hover:bg-[#03AF75]">
                        <Search className='h-5 w-5' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
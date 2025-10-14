import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer",
    "Mern Stack Developer"
]

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='bg-[#03AF75] category'>
            <Carousel className="w-full max-w-xl mx-auto my-10">
                <CarouselContent className="w-[450px]">
                    {
                        category.map((cat, index) => (
                            <CarouselItem className="md:basis-1/2 lg-basis-1/3">
                                <Button onClick={()=>searchJobHandler(cat)} variant="outline" className="rounded-md  w-[200px]">{cat}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious className="rounded-sm bg-[#299DFC] outline-none text-white border-none h-[40px] w-[40px]"/>
                <CarouselNext className="rounded-sm bg-[#299DFC] outline-none text-white border-none h-[40px] w-[40px]"/>
            </Carousel>
        </div>
    )
}

export default CategoryCarousel

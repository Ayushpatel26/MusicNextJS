'use client';

import courseData from '@/data/music_courses.json';
import Link from 'next/link';
import { BackgroundGradient } from './ui/background-gradient';

interface Course{
    "id": number,
    "title": string,
    "slug": string,
    "description": string,
    "price": number,
    "instructor": string,
    "isFeatured": boolean,
}

const FeaturedCourses = () => {
    const featuredCourses = courseData.courses.filter((coursewa:Course) => coursewa.isFeatured)

  return (
    <div className='bg-gray-900 py-12 min-h-screen'>
       <div className="text-center">
        <h2 className='text-xl font-semibold text-teal-600 uppercase'>FEATURED COURSES</h2>
        <p className='mt-2 text-4xl font-bold'>
            Learn with the Best
        </p>
       </div>

       <div className="mt-10">
        <div className="grid gap-8 justify-center md:grid-cols-3 md:gap-10 p-5 sm:grid-cols-2">
        {featuredCourses.map((coursewa: Course) => (
            <div key={coursewa.id} className="flex flex-col">
                <BackgroundGradient
                className='dark:bg-zinc-900 flex flex-col h-full max-w-sm rounded-3xl text-center overflow-hidden'
                >
                    <div className='p-2 sm:p-6 flex flex-col flex-grow items-center'>
                        <p className='text-lg font-semibold m-1'>
                            {coursewa.title}
                        </p>
                        <p className="mx-1">
                            {coursewa.description}
                        </p>
                        <Link href={`/courses/${coursewa.slug}`} className='text-center text-teal-300'>
                            Learn More
                        </Link>
                    </div>
                </BackgroundGradient>
            </div>
        ))}
        </div>
       </div>

       <div className="mt-10 text-center">
        <Link
        href={'/courses'}
        className='px-4 py-2 bg-white text-black font-semibold rounded'
        >
            View all courses
        </Link>
       </div>
    </div>
  )
}

export default FeaturedCourses

import React from 'react'
import Link from 'next/link'
import { Spotlight } from './ui/Spotlight';
import { Button } from "@/components/ui/moving-border";

const HeroSection = () => {
  return (
    <div className='min-h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
        <Spotlight
        className="top-0 left-0 sm:-top-10 sm:left-0 md:left-10 md:-top-150 lg:-top-10 lg:left-60 xl:-top-350 xl:left-100"
        fill="white"
      />
      <div className="p-1 w-full text-center md:p-4">
        <h1 className='mt-20 sm:mt-32 md:mt-40 lg:mt-25 xl:mt-15 text-3xl xs:text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-bold bg-clip-text'>Master the art of Music</h1>

        <p className='mt-4 md:text-lg xl:text-xl xs:w-3/4 md:w-1/2 px-5 mx-auto'>
            Dive into our comprehensive music courses and transform your musical journey today. Whether you are a beginner or looking to refine your skill, join us to unlock your potential.
        </p>

        <div className="mt-30 sm:mt-10 md:mt-13 lg:mt-15">
            <Link href='/courses'>
            <Button
            borderRadius='1.75rem'
            className='dark:border-slate-800 font-medium'
            >
                Explore courses
            </Button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

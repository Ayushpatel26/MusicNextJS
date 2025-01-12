'use client';
import React from 'react'
import Link from 'next/link'
import { HoverEffect } from "./ui/card-hover-effect";

const UpcomingWebinars = () => {
    const featuredWebinars = [
        {
          title: 'Understanding Music Theory',
          description:
            'Dive deep into the fundamentals of music theory and enhance your musical skills.',
          slug: 'understanding-music-theory',
          isFeatured: true,
        },
        {
          title: 'The Art of Songwriting',
          description:
            'Learn the craft of songwriting from experienced musicians and songwriters.',
          slug: 'the-art-of-songwriting',
          isFeatured: true,
        },
        {
          title: 'Mastering Your Instrument',
          description:
            'Advanced techniques to master your musical instrument of choice.',
          slug: 'mastering-your-instrument',
          isFeatured: true,
        },
        {
          title: 'Music Production Essentials',
          description:
            'Get started with music production with this comprehensive overview.',
          slug: 'music-production-essentials',
          isFeatured: true,
        },
        // Added two more webinars
        {
          title: 'Live Performance Techniques',
          description:
            'Enhance your live performance skills with expert tips and strategies.',
          slug: 'live-performance-techniques',
          isFeatured: true,
        },
        {
          title: 'Digital Music Marketing',
          description:
            'Learn how to promote your music effectively in the digital age.',
          slug: 'digital-music-marketing',
          isFeatured: true,
        },
      ];

  return (
    <div className='p-12 bg-gray-900'>
      <div>
        <div className="text-center">
            <h2 className='text-xl text-teal-500 font-semibold tracking-wide'>FEATURED WEBINARS</h2>
            <p className="m-1 text-4xl font-bold">Enhance your Musical Journey</p>
        </div> 

        <div className="">
            <HoverEffect items={featuredWebinars.map(webinarwa => (
                {
                    title: webinarwa.title,
                    description: webinarwa.description,
                    link: `/${webinarwa.slug}`
                }
            ))} />
        </div>

        <div className="m-2 text-center">
            <Link
            href={'/'}
            className='px-4 py-2 bg-white text-black rounded font-semibold'
            >
                View All Webinars
            </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars

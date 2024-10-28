import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            <div className="md:w-1/2 sm:w-3/4 flex flex-col gap-2 lg:w-3/4 xl:w-1/2">
                <h2 className="text-white text-lg font-semibold">About Us</h2>
                <p className="">
                Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
                </p>
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="text-lg text-white font-semibold">Quick Links</h2>
                <ul>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/'}>About</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Courses</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Contact Us</Link>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="text-lg text-white font-semibold">Follow Us</h2>
                <ul>
                    <li>
                        <Link href={'#'}>Twitter</Link>
                    </li>
                    <li>
                        <Link href={'#'}>Facebook</Link>
                    </li>
                    <li>
                        <Link href={'#'}>Instagram</Link>
                    </li>
                </ul>
            </div>

            <div className="w-3/4">
                <h2 className="text-lg text-white font-semibold">Contact Us</h2>
                <p>
                    New Delhi, India Delhi 10001 Email: info@musicschool.com Phone: +91 6394501194
                </p>
            </div>
        </div>
        <p className="text-center text-sm py-5">
            © 2024 Music School. All rights reserved.
        </p>
    </footer>
  )
}

export default Footer

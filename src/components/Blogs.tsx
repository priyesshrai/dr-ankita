import { Heading, Subheading, Wrapper } from '@/utils/Section';
import { Calendar, MoveRight, MoveUpRight, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Blog {
    title: string;
    content: string;
    image: string;
    link: string;
    date: string;
}

export default function Blogs() {
    const blog: Blog[] = [
        {
            title: 'Understanding PCOS: Symptoms, Diagnosis, and Treatment Options',
            content: 'Polycystic Ovary Syndrome affects millions of women worldwide. Learn about the symptoms, how it\'s diagnosed, and the various treatment approaches available to manage this condition effectively.',
            image: '/images/blog/blog-1.png',
            link: '#',
            date: 'June 15, 2025'
        },
        {
            title: 'Preparing for Pregnancy: A Complete Preconception Checklist',
            content: 'Getting ready to welcome a new life begins long before conception. This guide walks you through essential health checks, lifestyle tips, and emotional readiness steps to ensure a healthy pregnancy journey......',
            image: '/images/blog/blog-2.png',
            link: '#',
            date: 'June 15, 2025'
        },
        {
            title: 'Postpartum Care: Why Healing After Birth Deserves More Attention',
            content: 'Recovery after childbirth is just as important as prenatal care. Discover how post-delivery rehabilitation supports physical healing, emotional well-being, and a smoother transition into motherhood.........',
            image: '/images/blog/blog-3.png',
            link: '#',
            date: 'June 15, 2025'
        },
        {
            title: '5 Early Signs of Fertility Issues You Shouldn’t Ignore',
            content: 'Fertility challenges are more common than many realize, and early detection can make a significant difference. In this post, we explore the subtle signs that may indicate fertility concerns—and when it’s time to consult a specialist.......',
            image: '/images/blog/blog-4.png',
            link: '#',
            date: 'June 15, 2025'
        },
    ]

    return (
        <section className='bg-[#F9FAFB]'>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            Health <span className='!font-open-sans text-primary-color'>Blog & Resources</span>
                        </Heading>
                        <Subheading className='mx-auto max-w-2xl'>
                            Stay informed with our latest articles on women&apos;s health, written by medical professionals to help you make informed decisions about your healthcare.
                        </Subheading>
                    </div>

                    <div className='bg-white relative w-full grid lg:grid-cols-[500px_1fr] lg:gap-5 md:grid-cols-[300px_1fr] grid-cols-1 gap-1 md:gap-3 shadow rounded-2xl overflow-hidden'>
                        <div className="w-full h-full">
                            <Image src={blog[0].image} width={500} height={500} alt='blog'
                                className='w-full h-[400px] object-cover object-center'
                            />
                        </div>
                        <div className="w-full h-full md:p-10 p-4 ">
                            <Link href='#' className='w-full relative font-bold md:text-2xl text-base text-secondry-color'>
                                {blog[0].title}
                            </Link>
                            <Subheading className='mt-5'>
                                {blog[0].content}
                            </Subheading>
                            <div className='mt-5 w-full flex items-center gap-8'>
                                <div className='relative flex gap-2 items-center'>
                                    <User className='text-neutral-500 md:w-5 w-3' />
                                    <span className='md:text-base text-xs text-light'>Dr. G. Nikila</span>
                                </div>
                                <div className='relative flex gap-2 items-center'>
                                    <Calendar className='text-neutral-500 md:w-5 w-3' />
                                    <span className='md:text-base text-xs text-light'>{blog[0].date}</span>
                                </div>
                            </div>
                            <Link href={blog[0].link} className='md:mt-10 mt-5 w-max !font-montserrat bg-primary-color text-white md:px-4 md:py-3 md:rounded-lg px-2 py-1.5 rounded flex lg:gap-2 gap-1 items-center font-semibold hover:bg-primary-hover transition-all duration-200 ease-linear md:text-base text-xs'>
                                Read More
                                <MoveRight className='md:w-6 w-4' />
                            </Link>
                        </div>
                    </div>

                    <div className='relative w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-5 gap-3'>
                        {
                            blog.map((blog, idx) => {
                                if (idx === 0) {
                                    return;
                                }
                                return (
                                    <div key={idx} className='w-full h-full shadow rounded-2xl overflow-hidden bg-white'>
                                        <div className='w-full relative'>
                                            <Image src={blog.image} width={300} height={300} alt={blog.title} className='w-full' />
                                        </div>
                                        <div className='w-full relative md:p-5 p-3'>
                                            <Link href={blog.link} className='font-bold md:text-lg text-base text-secondry-color'>
                                                {blog.title}
                                            </Link>
                                            <Subheading className='!font-normal'>
                                                {blog.content}
                                            </Subheading>
                                            <div className='mt-5 w-full flex items-center gap-8'>
                                                <div className='relative flex gap-2 items-center'>
                                                    <User className='text-neutral-500 md:w-5 w-3' />
                                                    <span className='md:text-base text-xs text-light'>Dr. G. Nikila</span>
                                                </div>
                                                <div className='relative flex gap-2 items-center'>
                                                    <Calendar className='text-neutral-500 md:w-5 w-3' />
                                                    <span className='md:text-base text-xs text-light'>{blog.date}</span>
                                                </div>
                                            </div>

                                            <Link href={blog.link} className='mt-5 w-max !font-montserrat flex gap-2 items-center text-blue-500 text-sm ml-auto hover:underline'>
                                                Read More
                                                <MoveUpRight className='w-4' />
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </Wrapper>
        </section>
    )
}

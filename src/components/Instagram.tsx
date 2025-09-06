import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import React from 'react'

export default function Instagram() {
    const instaPost: string[] = [
        "/images/insta/insta-1.png",
        "/images/insta/insta-2.png",
        "/images/insta/insta-3.png",
        "/images/insta/insta-4.png"
    ]
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            Follow us on <span className='!font-open-sans text-primary-color'>Instagram</span>
                        </Heading>
                        <Subheading className='mx-auto max-w-lg'>
                            Stay connected with daily health tips, behind-the-scenes content, and inspiring stories from our community.
                        </Subheading>
                    </div>

                    <div className='flex-1 w-full relative grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3'>
                        {
                            instaPost.map((data, idx) => (
                                <div key={idx} className='w-full h-full relative'>
                                    <Image src={data} alt='Instagram Post' width={300} height={500} className='w-full cursor-pointer' />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}

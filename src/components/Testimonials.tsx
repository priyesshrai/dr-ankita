'use client';
import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import { useRef, useState } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import { Star, User } from 'lucide-react';

interface Testimonial {
    user: string;
    avatar: string;
    comment: string;
    rating: number;
    time: string;
}

export default function Testimonials() {
    const testimonialData: Testimonial[] = [
        {
            user: 'Chandan Agn',
            avatar: '/images/testimonials/user.png',
            comment: 'I visited Dr Monica\'s clinic few days ago.i got my teeth cleaning done there.the clinic is clean & tidy. Doctor Monica is knowledgeable & positive person.Her assistant doctors were good & supporting. Overall the experience was good & pain less. I highly recommend this clinic for any teeth related issues.',
            rating: 5,
            time: '1 month ago'
        },
        {
            user: 'Vyomika Bansal',
            avatar: '/images/testimonials/user.png',
            comment: 'I visited Dr Monica\'s clinic few days ago.i got my teeth cleaning done there.the clinic is clean & tidy. Doctor Monica is knowledgeable & positive person.Her assistant doctors were good & supporting. Overall the experience was good & pain less. I highly recommend this clinic for any teeth related issues.',
            rating: 5,
            time: '2 month ago'
        },
        {
            user: 'Priyank Rai',
            avatar: '/images/testimonials/user.png',
            comment: 'I visited Dr Monica\'s clinic few days ago.i got my teeth cleaning done there.the clinic is clean & tidy. Doctor Monica is knowledgeable & positive person.Her assistant doctors were good & supporting. Overall the experience was good & pain less. I highly recommend this clinic for any teeth related issues.',
            rating: 5,
            time: '1 month ago'
        },
        {
            user: 'Vinay Mishra',
            avatar: '/images/testimonials/user.png',
            comment: 'I visited Dr Monica\'s clinic few days ago.i got my teeth cleaning done there.the clinic is clean & tidy. Doctor Monica is knowledgeable & positive person.Her assistant doctors were good & supporting. Overall the experience was good & pain less. I highly recommend this clinic for any teeth related issues.',
            rating: 5,
            time: '1 year ago'
        },
        {
            user: 'Sudeep kumar',
            avatar: '/images/testimonials/user.png',
            comment: 'I visited Dr Monica\'s clinic few days ago.i got my teeth cleaning done there.the clinic is clean & tidy. Doctor Monica is knowledgeable & positive person.Her assistant doctors were good & supporting. Overall the experience was good & pain less. I highly recommend this clinic for any teeth related issues.',
            rating: 5,
            time: '4 month ago'
        },
        {
            user: 'Sangam Sarees',
            avatar: '/images/testimonials/user.png',
            comment: 'I visited Dr Monica\'s clinic few days ago.i got my teeth cleaning done there.the clinic is clean & tidy. Doctor Monica is knowledgeable & positive person.Her assistant doctors were good & supporting. Overall the experience was good & pain less. I highly recommend this clinic for any teeth related issues.',
            rating: 5,
            time: '6 month ago'
        },
        {
            user: 'Priyanka Saxena',
            avatar: '/images/testimonials/user.png',
            comment: 'I visited Dr Monica\'s clinic few days ago.i got my teeth cleaning done there.the clinic is clean & tidy. Doctor Monica is knowledgeable & positive person.Her assistant doctors were good & supporting. Overall the experience was good & pain less. I highly recommend this clinic for any teeth related issues.',
            rating: 5,
            time: '1 month ago'
        },
        {
            user: 'Naveen Kumar P G',
            avatar: '/images/testimonials/user.png',
            comment: 'I visited Dr Monica\'s clinic few days ago.i got my teeth cleaning done there.the clinic is clean & tidy. Doctor Monica is knowledgeable & positive person.Her assistant doctors were good & supporting. Overall the experience was good & pain less. I highly recommend this clinic for any teeth related issues.',
            rating: 5,
            time: '3 years ago'
        }
    ]
    const [api, setApi] = useState<CarouselApi>()
    const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }))
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            What Our <span className='!font-open-sans text-primary-color'>Patients Say</span>
                        </Heading>
                        <Subheading className='mx-auto max-w-lg'>
                            Read testimonials from women who have experienced our compassionate, comprehensive care.
                        </Subheading>
                    </div>
                </div>
            </Wrapper>

            <div className='relative w-full h-full overflow-hidden mt-12'>
                <Carousel className="w-full h-full"
                    plugins={[plugin.current]}
                    opts={{
                        loop: true,
                        dragFree: true
                    }}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    setApi={setApi}
                >
                    <CarouselContent className='items-center gap-5 pl-6 p-2'>
                        {
                            testimonialData.map((data, index) => (
                                <CarouselItem key={index}
                                    className='max-w-[380px] w-full shrink-0 cursor-pointer bg-white rounded-2xl shadow p-0 border border-zinc-300'>
                                    <div className='relative w-full h-full p-4'>
                                        <div className='relative w-full flex items-center justify-between'>
                                            <Image src='/images/svg/test.svg' width={50} height={50} alt='' />
                                            <div className='flex '>
                                                {
                                                    Array.from({ length: data.rating }).map((_, idx) => (
                                                        <Star fill='yellow' className='text-yellow-300' key={idx} />
                                                    ))
                                                }
                                            </div>
                                        </div>

                                        <div className='mt-7 relative w-full'>
                                            <span className='text-sm text-zinc-500 font-normal'>
                                                {data.comment}
                                            </span>
                                        </div>

                                        <div className='relative w-full mt-10 flex gap-3 items-center '>
                                            <div className='w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-neutral-100'>
                                                <User size={24} />
                                            </div>
                                            <div className='relative'>
                                                <h3 className='font-semibold text-base text-secondry-color leading-[1]'
                                                >
                                                    {data.user}
                                                </h3>
                                                <span className='text-sm text-zinc-500'>{data.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                    <CarouselPrevious
                        onClick={() => {
                            api?.scrollPrev();
                            plugin.current?.reset();
                        }}
                        className='w-11 h-11 bg-primary-color text-white left-5  text-3xl cursor-pointer hover:bg-primary-hover hover:text-white'
                    />
                    <CarouselNext
                        onClick={() => {
                            api?.scrollNext();
                            plugin.current?.reset();
                        }}
                        className='w-11 h-11 bg-primary-color text-white text-3xl right-5 cursor-pointer hover:bg-primary-hover hover:text-white'
                    />
                </Carousel>
            </div>
        </Section>
    )
}

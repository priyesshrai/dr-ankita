import { Section, Wrapper } from '@/utils/Section'
import Image from 'next/image';
import React from 'react'

interface Data {
    title: string;
    short: string;
    icon: string;
}

export default function AboutPageStrip() {
    const data: Data[] = [
        {
            title: '10+ Years',
            short: 'Experience',
            icon: '/images/svg/stp-1.svg'
        },
        {
            title: '98% Success',
            short: 'Rate',
            icon: '/images/svg/stp-2.svg'
        },
        {
            title: '1K+ Happy',
            short: 'Patient',
            icon: '/images/svg/stp-3.svg'
        },
        {
            title: '50+ Variety',
            short: 'Services',
            icon: '/images/svg/stp-4.svg'
        },

    ]
    return (
        <Section>
            <Wrapper>
                <div className="relative w-full flex flex-wrap gap-5 items-center ">
                    {
                        data.map((items, idx) => (
                            <div className='flex-1 min-w-[200px] flex gap-3 items-center shadow-lg px-5 py-4 rounded-lg' key={idx}>
                                <div className='shrink-0'>
                                    <Image src={items.icon} width={56} height={56} alt={items.title} />
                                </div>
                                <div className='flex-1 flex flex-col'>
                                    <h3 className='font-bold text-secondry-color text-xl'>
                                        {items.title}
                                    </h3>
                                    <p className='text-sm text-zinc-600'>
                                        {items.short}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Wrapper>
        </Section>
    )
}

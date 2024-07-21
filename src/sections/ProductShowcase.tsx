"use client"
import productImage from '@/assets/product-image.png'
import pyrimideImage from '@/assets/pyramid.png'
import tubeImage from '@/assets/tube.png'
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { constrainedMemory } from 'process';

export const ProductShowcase = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end','end start']
  })

  const translateY =useTransform(scrollYProgress, [0,1], [150, -150])

  return (
    <section ref={sectionRef} className='overflow-x-clip bg-gradient-to-b from-[#FFFF] to-[#D2DCFF] py-24'>
      <div className="container">
        <div className='section-heading'>
        <div className='flex justify-center'>
          <div className='tag'>
            Boost your productivity
          </div>
        </div>
        <h2 className='section-title mt-5'>
          A more effctive way to track progress
        </h2>
        <p className='section-desc mt-5 '>
          Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.
        </p>
        </div>
        <div className='relative'>
        <Image src={productImage} alt='ProductImg' className='mt-10' />
        <motion.img src={pyrimideImage.src} style={{translateY}} alt='Pytimide' height={262} width={260} className='absolute -right-36 -top-32 hidden md:block' />
        <motion.img src={tubeImage.src} alt='tube' style={{translateY}} height={248} width={248} className='absolute bottom-24 -left-36 hidden md:block' />
        </div>
      </div>
    </section>
  )
};

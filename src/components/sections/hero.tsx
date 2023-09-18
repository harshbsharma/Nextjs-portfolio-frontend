'use client';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import Lottie from "lottie-react";


import SagarHeadshot from '/public/images/sagar-headshot.jpg';
import animation from '@/assets/animation.json';
import animation1 from "@/assets/hletter.json"
import animation2 from "@/assets/hletter2.json"
import animation3 from "@/assets/slowh.json"

import SocialIcons from '@/components/data-display/social-icons';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const HeroSection = () => {
  return (
    <Container id="hero">
      <div className="flex flex-col gap-12 md:flex-row">
        {/* Image */}
        <div className="flex items-center justify-center md:order-first md:flex-grow md:justify-end">
          <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
            {/* <Image
              src={SagarHeadshot}
              alt="Headshot of Sagar"
              className="absolute z-10 h-[280px] w-[240px] border-8 border-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
              style={{ objectFit: 'cover' }}
            ></Image> */}

            {/* <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div> */}
            <Lottie animationData={animation3}
            
            className=''/>


          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-last md:items-start md:justify-center 2xl:gap-12">
          <div className="flex flex-col gap-2">
            <Typography variant="h1">
              Hi, I&apos;m Harsh{' '}
              <span className="inline-block animate-waving-hand">👋</span>
            </Typography>
            <Typography>
              {/* I&apos;m a full stack developer (React.js & Node.js) with a focus
              on creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new. */}
              Hey there, I&apos;m Harsh Sharma, your go-to Full Stack Developer with a passion for 
              crafting seamless digital experiences. With a keyboard as my paintbrush 
              and code as my canvas   💻🎨, I transform ideas into stunning, functional websites
              and applications.
              
            </Typography>
            <Typography>
            My playground is the MERN (MongoDB, Express.js, React, Node.js) stack, where
              I weave the magic of data-driven, user-centric solutions. Whether it&apos;s creating
              dynamic front-end interfaces or building robust back-end systems, I thrive on
              turning complex concepts into elegant code.
            </Typography>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <MapPin className="stroke-gray-600" />
              <Typography>Jaipur, Rajasthan, India</Typography>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
              </div>
              <Typography>Available for Work</Typography>
            </div>
          </div>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;

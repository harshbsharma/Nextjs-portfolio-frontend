'use client';
import Image from 'next/image';
import Lottie from "lottie-react";

import SagarFullPose from '/public/images/sagar-full-pose.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

import working from "@/assets/working.json"

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            {/* <Image
              src={SagarFullPose}
              alt="Fullpose of Sagar"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div> */}
            <Lottie
            animationData={working}
            className=''
            />

            </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            {/* I&apos;m a passionate,{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.FIGMA}
            >
              self-proclaimed designer
            </Link>{' '}
            who specializes in full stack development (React.js & Node.js). I am
            enthusiastic about bringing the technical and visual aspects of
            digital products to life. User experience, pixel perfect design, and
            writing clear, readable, highly performant code matters to me. */}
            Greetings! I'm Harsh Sharma, a dynamic Full Stack Web Developer 🧑‍💻, specializing 
            in the <a className='font-semibold text-base'>MERN</a> (MongoDB, Express.js, React, Node.js) stack.
            I'm currently in my junior year of pursuing&nbsp; 
            <a className='font-semibold text-base'>B.Tech in Computer Science</a>, 
            I've spent a solid two years delving deep into the world of MERN. 
            My passion for learning and hands-on experience in hackathons and competitions 
            have helped me to sharp my skills.
          </Typography>
          <Typography>
            {/* I began my journey as a web developer in 2015, and since then,
            I&apos;ve continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I&apos;m building cutting-edge web applications using
            modern technologies such as Next.js, TypeScript, Nestjs,
            Tailwindcss, Supabase and much more. */}

            Outside of coding, I find solace in the art of storytelling through cinema. 
            I have a keen appreciation for movies that are crafted with care, capturing 
            human emotions and experiences through the lens 🎥.
            <br/>
            You'll often find me immersed in finance and economics literature. It's not 
            just an interest; it's a valuable lens through which I understand the broader 
            impact of technology on our society and economy.
          </Typography> 
          {/* <Typography>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
            
          </Typography> */}
          <Typography>
            {/* When I&apos;m not in full-on developer mode, you can find me
            hovering around on twitter or on indie hacker, witnessing the
            journey of early startups or enjoying some free time. You can follow
            me on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.TWITTER}
            >
              Twitter
            </Link>{' '}
            where I share tech-related bites and build in public, or you can
            follow me on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              GitHub
            </Link>
            . */}

            I'm eager to connect with like-minded individuals who share a passion for 
            technology and its real-world applications. If you're looking for a driven 
            Full Stack Developer who's genuinely enthusiastic about contributing to 
            meaningful projects, I'd love to chat. Ping me on{' '}  
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.INSTAGRAM}
            >Instagram</Link>{' '}
            or{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.TWITTER}
            >Twitter</Link>

          </Typography>
          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                B.Tech in Computer Science & Engineering
              </Typography>
              <Typography component="li">Passion For Proble Solving</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">2+ year of Experience</Typography>
              <Typography component="li">Interested in Web 3.0</Typography>
            </ul>
          </div>
          <Typography>
            One last thing, I&apos;m available for freelance work, so feel free
            to reach out and say hello! 
            I'm not saying I code in my sleep, but I've been known to wake up with 
            solutions written in my dreams. Talk about 'REM' programming!
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;

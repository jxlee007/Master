// import React from 'react';
import { SITE_TITLE, SITE_TAGLINE, SITE_DESCRIPTION } from '../consts.jsx';
import BaseLayout from '../layouts/BaseLayout';
import Ava from '../assets/img/ava.png';
import Prose from '../components/Prose';
import { projects } from './projects';
import ProjectList from '../layouts/components/ProjectList';
// import Image from 'next/image'; // Assuming you are using Next.js for image optimization

const top6Projects = projects.slice(0, 6);

const Home = () => {
  return (
    <BaseLayout title={`${SITE_TITLE} - ${SITE_TAGLINE}`} description={SITE_DESCRIPTION}>
      <div className='container'>
        <div className='w-full md:flex md:items-center gap-16 mb-10'>
          <div className="text-pretty leading-9">
            <h1 className="text-4xl font-bold mb-4">Hi There 👋, Jxlee Here!</h1>
            <Prose>
              <div className="text-lg">
                <p>A Creative Front-end web developer with Good understanding of Modern-day Approach who thrive on creating inventive and User-Friendly web solutions, collaborating on exciting projects, and using my expertise to craft visually appealing and responsive web interfaces.</p>
              </div>
            </Prose>
          </div>
          <Image src={Ava} alt="Jagmohan Singh Malhi" width={300} loading="eager" className="rounded-3xl rotate-3 mx-4 md:mx-0" />
        </div>
        <main>
         
          <div>
            <div className="flex justify-between gap-2 mb-1">
              <h2 className="text-lg font-bold mb-3">My Projects</h2>
              <a href="/projects/" className="inline-block py-2 underline text-zinc-950">All projects &raquo;</a>
            </div>
            <ProjectList projects={top6Projects} />
          </div>
        </main>
      </div>
    </BaseLayout>
  );
};

export default Home;
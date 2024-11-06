import React from 'react';
import Image from 'next/image'; // Assuming you are using Next.js for image optimization
import Ava from '@src/assets/img/ava.png';

type PicSize = 'sm' | 'md' | 'lg';

interface Props {
  picSize: PicSize;
}

const Author: React.FC<Props> = ({ picSize }) => {
  return (
    <div className='flex gap-4 items-center leading-tight not-prose'>
      <a
        href='https://github.com/jxlee007'
        target='_blank'
        rel='noopener noreferrer'
        className={`rounded-full overflow-hidden shrink-0 ${
          picSize === 'sm' ? 'w-12 h-12' : picSize === 'md' ? 'w-[70px] h-[70px]' : 'w-[90px] h-[90px]'
        }`}
      >
        <Image src={Ava} alt='Jagmohan Singh Malhi' />
      </a>
      <div>
        <div>
          <a
            href='https://github.com/jxlee007'
            className='block font-bold text-inherit hover:text-[var(--link-color)]'
            target='_blank'
            rel='noopener noreferrer'
          >
            Jagmohan Singh Malhi
          </a>
        </div>
        <small className='avatar__subtitle'>Frontend Engineer</small>
      </div>
    </div>
  );
};

export default Author;
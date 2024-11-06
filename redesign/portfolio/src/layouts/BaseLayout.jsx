// import React from 'react';
import BaseHead from './components/BaseHead';
import Header from './components/Header';
import Footer from './components/Footer';

const BaseLayout = ({ title, description, image, children }) => {
  return (
    <html lang='en'>
      <head>
        <BaseHead title={title} description={description} image={image} />
      </head>
      <body className="bg-white dark:bg-zinc-900 dark:text-zinc-100 pt-16 sm:pt-0">
        <Header />
        <div className='py-8 min-h-[calc(100vh-160px)]'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default BaseLayout;
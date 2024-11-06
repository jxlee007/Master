// import React from 'react';
import '../styles/global.css';
import Favicon from 'assets/img/icon.png';

const BaseHead = ({ title, description, image = '/icon.png', url, generator }) => {
  const canonicalURL = new URL(url.pathname, url.origin);

  return (
    <>
      {/* Global Metadata */}
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width,initial-scale=1' />
      <link rel='icon' href={Favicon.src} />
      <meta name='generator' content={generator} />

      {/* Canonical URL */}
      <link rel='canonical' href={canonicalURL} />

      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name='title' content={title} />
      <meta name='description' content={description} />

      {/* Open Graph / Facebook */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content={url.href} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={new URL(image, url.origin)} />

      {/* Twitter */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={url.href} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={new URL(image, url.origin)} />
    </>
  );
};

export default BaseHead;
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function RandomImageApiPage() {
  const [category, setCategory] = useState('');
  const [width, setWidth] = useState(640);
  const [height, setHeight] = useState(480);
  const [imageSrc, setImageSrc] = useState('');
  const [imageError, setImageError] = useState('');
  const [imageLoading, setImageLoading] = useState(false);

  const fetchRandomImage = async () => {
    setImageLoading(true);
    setImageError('');
    try {
      const url = new URL('https://api.api-ninjas.com/v1/randomimage');
      if (category) url.searchParams.append('category', category);
      url.searchParams.append('width', width);
      url.searchParams.append('height', height);

      const response = await fetch(url, {
        headers: {
          'X-Api-Key': 'O0uUXd+SnKUkR5a7Si1QlA==cjhygQaqg8ZhghsQ',
          Accept: 'image/jpg',
        },
      });

      if (!response.ok) throw new Error('Failed to fetch the image.');

      const blob = await response.blob();
      const imageObjectURL = URL.createObjectURL(blob);
      setImageSrc(imageObjectURL);
    } catch (err) {
      setImageError(err.message || 'An error occurred while fetching the image.');
    } finally {
      setImageLoading(false);
    }
  };

  return (
    <div>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div className="container px-5">
          <a className="navbar-brand" href="#page-top">
            <Image src="/logo.png" alt="Logo" width={40} height={40} className="d-inline-block align-text-top" />
          </a>
          <a className="navbar-brand" href="/">My Website</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/portfolio">Portfolio</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/contact">Contact</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/blog">Blog</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="masthead text-center text-white">
        <div className="masthead-content">
          <div className="container px-5">
            <h1 className="masthead-heading mb-0">Random Image API</h1>
            <h2 className="masthead-subheading mb-0">Generate a Random Image</h2>
          </div>
        </div>
        <div className="bg-circle-1 bg-circle"></div>
        <div className="bg-circle-2 bg-circle"></div>
        <div className="bg-circle-3 bg-circle"></div>
        <div className="bg-circle-4 bg-circle"></div>
      </header>

      {/* Random Image API Section */}
      <section id="scroll" className="container px-5">
        <h2>Generate Random Image</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetchRandomImage();
          }}
        >
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Any</option>
              <option value="nature">Nature</option>
              <option value="city">City</option>
              <option value="technology">Technology</option>
              <option value="food">Food</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="width">Width:</label>
            <input
              type="number"
              id="width"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              min="1"
              max="5000"
            />
          </div>
          <div className="form-group">
            <label htmlFor="height">Height:</label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              min="1"
              max="5000"
            />
          </div>
          <button type="submit" disabled={imageLoading}>
            {imageLoading ? 'Loading...' : 'Generate Image'}
          </button>
        </form>
        {imageError && <p className="error">{imageError}</p>}
        {imageSrc && !imageError && !imageLoading && (
          <div>
            <Image src={imageSrc} alt="Random Image" width={width} height={height} />
          </div>
        )}
        
  <h4>Navigate Between APIs</h4>
        <div className="d-flex flex-column align-items-center gap-3 mt-4">
          <Link href="/portfolio/api1">
            <button className="btn btn-primary btn-xl rounded-pill">API 1: SEC Data</button>
          </Link>
          <Link href="/portfolio/api2">
            <button className="btn btn-primary btn-xl rounded-pill">API 2: Random Image</button>
          </Link>
          <Link href="/portfolio/api3">
            <button className="btn btn-primary btn-xl rounded-pill">API 3: News</button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5 bg-black">
        <div className="container px-5">
          <p className="m-0 text-center text-white small">Copyright &copy; My Website 2024</p>
        </div>
      </footer>
    </div>
  );
}

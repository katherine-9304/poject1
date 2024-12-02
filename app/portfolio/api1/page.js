'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SecApiPage() {
  const [ticker, setTicker] = useState('');
  const [filing, setFiling] = useState('');
  const [secData, setSecData] = useState([]);
  const [secError, setSecError] = useState('');
  const [secLoading, setSecLoading] = useState(false);

  const fetchSecData = async () => {
    setSecLoading(true);
    setSecError('');
    try {
      const url = new URL('https://api.api-ninjas.com/v1/sec');
      url.searchParams.append('ticker', ticker);
      url.searchParams.append('filing', filing);

      const response = await fetch(url, {
        headers: {
          'X-Api-Key': 'O0uUXd+SnKUkR5a7Si1QlA==cjhygQaqg8ZhghsQ',
        },
      });

      if (!response.ok) throw new Error('Failed to fetch SEC data.');

      const data = await response.json();
      setSecData(data);
    } catch (err) {
      setSecError(err.message || 'An error occurred while fetching SEC data.');
    } finally {
      setSecLoading(false);
    }
  };

  return (
    <div>
      {/* Navigation */}
      {/* Reutiliza el navbar */}
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
            <h1 className="masthead-heading mb-0">SEC Filings API</h1>
            <h2 className="masthead-subheading mb-0">Access Public Filings by Companies</h2>
          </div>
        </div>
        <div className="bg-circle-1 bg-circle"></div>
        <div className="bg-circle-2 bg-circle"></div>
        <div className="bg-circle-3 bg-circle"></div>
        <div className="bg-circle-4 bg-circle"></div>
      </header>

      {/* SEC API Section */}
      <section id="scroll" className="container px-5">
        <h2>Search SEC Filings</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetchSecData();
          }}
        >
          <div className="form-group">
            <label htmlFor="ticker">Ticker:</label>
            <input
              type="text"
              id="ticker"
              value={ticker}
              onChange={(e) => setTicker(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="filing">Filing Type:</label>
            <select
              id="filing"
              value={filing}
              onChange={(e) => setFiling(e.target.value)}
              required
            >
              <option value="">Select Filing Type</option>
              <option value="10-K">10-K</option>
              <option value="10-Q">10-Q</option>
              <option value="8-K">8-K</option>
              <option value="DEF14A">DEF14A</option>
            </select>
          </div>
          <button type="submit" disabled={secLoading}>
            {secLoading ? 'Loading...' : 'Fetch SEC Data'}
          </button>
        </form>
        {secError && <p className="error">{secError}</p>}
        <ul>
          {secData.map((item, index) => (
            <li key={index}>
              <strong>{item.ticker}</strong> - {item.form_type} ({item.filing_date}) -{' '}
              <a href={item.filing_url} target="_blank" rel="noopener noreferrer">
                View Filing
              </a>
            </li>
          ))}
        </ul>
        <h2>Navigate Between APIs</h2>
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

'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function PortfolioPage() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div className="container px-5">
          <a className="navbar-brand" href="#page-top">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
          </a>
          <a className="navbar-brand" href="/">My Website</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
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
            <h1 className="masthead-heading mb-0">Portfolio</h1>
            <h2 className="masthead-subheading mb-0">Explore APIs Demonstration</h2>
          </div>
        </div>
        <div className="bg-circle-1 bg-circle"></div>
        <div className="bg-circle-2 bg-circle"></div>
        <div className="bg-circle-3 bg-circle"></div>
        <div className="bg-circle-4 bg-circle"></div>
      </header>

      {/* Main Section */}
      <section className="container px-5">
        <h2>APIs Available</h2>
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

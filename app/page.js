import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        {/* Bootstrap core JS */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        
        {/* Core theme JS */}
        <script src="/js/scripts.js"></script>
      </Head>

      {/* Top Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div className="container px-5">
          <a className="navbar-brand" href="#page-top">
            <Image src="/logo.png" alt="Logo" width={40} height={40} className="d-inline-block align-text-top" />
          </a>
          <a className="navbar-brand" href="#page-top">My Website</a>
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
            <h1 className="masthead-heading mb-0">Welcome to My Website</h1>
            <h2 className="masthead-subheading mb-0">Where Passion Meets Innovation</h2>
            <a className="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll">Explore More</a>
          </div>
        </div>
        <div className="bg-circle-1 bg-circle"></div>
        <div className="bg-circle-2 bg-circle"></div>
        <div className="bg-circle-3 bg-circle"></div>
        <div className="bg-circle-4 bg-circle"></div>
      </header>

      {/* Main Content */}
      <section id="scroll">
        <div className="container px-5">
          <h1 className="display-4 mb-3">Step into a World of Creativity</h1>
          <p className="lead">
            Welcome to my portfolio! This project is developed using the Next.js framework, designed to showcase my skills in web development using JavaScript frameworks. On this website, you'll explore multiple pages, each reflecting a different aspect of my work and passion for technology.

            The <strong>About</strong> page shares insights into my journey as a developer, my goals, and the technologies I work with. 

            In the <strong>Portfolio</strong> section, I have included three unique APIs I have built, which demonstrate my technical capabilities. You'll see how I create dynamic, interactive applications by working with various back-end technologies, ensuring efficient communication with databases and external services.

            The <strong>Blog</strong> page features three informative articles discussing web development topics, the latest trends in JavaScript, and tips for aspiring developers. It's a space where I express my thoughts on programming, design, and how the tech industry is evolving.

            Whether you're here to explore my projects, read insightful articles, or get in touch, this website serves as a hub of my work, offering a glimpse into my creative and technical expertise. 

            I hope you enjoy your visit and feel inspired to connect!
          </p>
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

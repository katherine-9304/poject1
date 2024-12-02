import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div>
      {/* Top Navigation */}
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
            <h1 className="masthead-heading mb-0">About Me</h1>
            <h2 className="masthead-subheading mb-0">Where Passion Meets Innovation</h2>
            <a className="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll">Learn More</a>
          </div>
        </div>
        <div className="bg-circle-1 bg-circle"></div>
        <div className="bg-circle-2 bg-circle"></div>
        <div className="bg-circle-3 bg-circle"></div>
        <div className="bg-circle-4 bg-circle"></div>
      </header>

      {/* About Me Content */}
      <section id="scroll">
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <div className="p-5">
                <Image src="/image1.jpeg" alt="Katherine Hincapie" width={500} height={500} className="img-fluid rounded-circle" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-5">
                <h2 className="display-4">Hi, I'm Katherine Hincapie</h2>
                <p>Hello, I’m Katherine Hincapie, a passionate Computer Programming student currently in my final semester at Georgian College. I’m excited to be nearing the end of my academic journey and can’t wait to see what comes next! Originally from Colombia, I now live in Toronto, where I’m soaking up the vibrant city life while pursuing my dream in tech.</p>
                <p>I have a strong passion for design and creativity, always striving to craft visually appealing and user-friendly experiences. I’m eager to learn, explore new technologies, and apply my knowledge to create innovative solutions. This project is a perfect example of how I blend my technical skills with my creative vision.</p>
                <p>Stay tuned for more of my work, as I continue to grow as a developer and make my mark in the tech world.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5 bg-black">
        <div className="container px-5">
          <p className="m-0 text-center text-white small">Copyright &copy; My Website 2024</p>
        </div>
      </footer>

      {/* Bootstrap core JS */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      {/* Core theme JS */}
      <script src="js/scripts.js"></script>
    </div>
  );
}

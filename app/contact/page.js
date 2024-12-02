import Link from 'next/link';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
<div className="container px-5">
  {/* Logo with text */}
  <a className="navbar-brand" href="/">
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


      {/* Header Section */}
      <header className="masthead text-center text-white">
        <div className="masthead-content">
          <div className="container px-5">
            <h1 className="masthead-heading mb-0">Contact Me</h1>
            <h2 className="masthead-subheading mb-0">Let’s Connect!</h2>
            <a className="btn btn-primary btn-xl rounded-pill mt-5" href="#contact-info">Get in Touch</a>
          </div>
        </div>
        <div className="bg-circle-1 bg-circle"></div>
        <div className="bg-circle-2 bg-circle"></div>
        <div className="bg-circle-3 bg-circle"></div>
        <div className="bg-circle-4 bg-circle"></div>
      </header>

      {/* Contact Information Section */}
      <section id="contact-info">
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <div className="p-5">
                <h2 className="display-4">Reach Out</h2>
                <p>If you’d like to connect, collaborate, or just chat about technology or something else, feel free to reach out:</p>
                <ul>
                  <li>Email: <a href="mailto:kjhc2212@gmail.com">kjhc2212@gmail.com</a></li>
                  <li>LinkedIn: <a href="https://www.linkedin.com/in/katherine-hincapie-c0420/">linkedin.com/in/katherine-hincapie</a></li>
                  <li>GitHub: <a href="https://github.com/Katherinejhc">github.com/katherine-hincapie</a></li>
                </ul>
                <p>Let’s create something beautiful!</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-5">
                <Image src="/contact.jpg" alt="Contact Image" width={500} height={500} className="img-fluid rounded-circle" />
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

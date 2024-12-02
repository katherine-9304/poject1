"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPage() {
  const [expandedArticle, setExpandedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: 'How AI is Transforming Web Development',
      intro:
        'Artificial Intelligence (AI) is reshaping web development by making the process faster, smarter, and more efficient. Developers now use AI-powered tools like GitHub Copilot and ChatGPT to write cleaner code, debug more efficiently, and generate reusable components with ease. These tools save time by automating repetitive tasks and offering intelligent suggestions, allowing developers to focus on more creative aspects of their work. Additionally, AI enhances website functionality through personalized content recommendations, automated testing, and advanced analytics...',
      fullText:
        'Artificial Intelligence (AI) is reshaping web development by making the process faster, smarter, and more efficient. Developers now use AI-powered tools like GitHub Copilot and ChatGPT to write cleaner code, debug more efficiently, and generate reusable components with ease. These tools save time by automating repetitive tasks and offering intelligent suggestions, allowing developers to focus on more creative aspects of their work. Additionally, AI enhances website functionality through personalized content recommendations, automated testing, and advanced analytics, ensuring sites are not only engaging but also optimized for performance and scalability.\n\nAI is also revolutionizing web design and user interaction. Tools like Adobe Firefly simplify the creation of visually stunning and responsive designs, while AI-driven systems power chatbots, voice interfaces, and augmented or virtual reality experiences. These innovations turn static websites into dynamic, interactive platforms tailored to individual user needs. As AI continues to evolve, its role in web development grows, driving innovation and enabling developers to create more user-centric, high-performing websites than ever before.',
      image: '/image1.png',
      alt: 'AI in Web Development',
    },
    {
      id: 2,
      title: '5 Trends in Cybersecurity You Should Know About',
      intro:
        'Cybersecurity continues to be a top priority in the tech world. In this article, we explore the top five trends in cybersecurity, including AI-driven security measures and blockchain technology...',
      fullText:
        'Recent trends highlight the rise of Zero Trust architecture, AI-driven intrusion detection systems, and the integration of blockchain to enhance data integrity. These technologies help mitigate evolving threats, ensuring that organizations remain secure in an increasingly complex and dynamic cyber threat landscape. As cybersecurity becomes more proactive with the use of machine learning, AI systems are capable of identifying threats faster and more accurately. The integration of blockchain is particularly helpful in maintaining the integrity of data and reducing fraud risks. AI and machine learning have also contributed to detecting and mitigating ransomware attacks in real-time, making them crucial tools in cybersecurity defense.',
      image: '/image2.png',
      alt: 'Cybersecurity Trends',
    },
    {
      id: 3,
      title: 'The Rise of Cloud Computing in Business',
      intro:
        'Cloud computing has revolutionized how businesses store data and run applications. In this article, we dive into the benefits of cloud adoption and why it\'s becoming indispensable for modern businesses...',
      fullText:
        'Cloud platforms like AWS and Azure provide scalable solutions that enable companies to reduce costs while enhancing performance. Hybrid cloud models are also gaining popularity for their flexibility in storing data and applications across multiple environments. Cloud computing allows businesses to adopt flexible storage solutions, increase computational power without investing in physical infrastructure, and ensure business continuity by using distributed networks that are resilient to outages. The cloud has also democratized access to powerful computing resources for businesses of all sizes, which has had a transformative effect on smaller companies that previously couldn\'t afford robust on-premise solutions.',
      image: '/image3.jpg',
      alt: 'Cloud Computing',
    },
  ];

  const toggleArticle = (id) => {
    setExpandedArticle((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      {/* Top Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div className="container px-5">
        <a className="navbar-brand" href="#page-top">
      <Image src="/logo.png" alt="Logo" width={40} height={40} className="d-inline-block align-text-top" />

       
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
            <h1 className="masthead-heading mb-0">Tech Articles</h1>
            <h2 className="masthead-subheading mb-0">The Latest in Web Development</h2>
            <a className="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll">Learn More</a>
          </div>
        </div>
        <div className="bg-circle-1 bg-circle"></div>
        <div className="bg-circle-2 bg-circle"></div>
        <div className="bg-circle-3 bg-circle"></div>
        <div className="bg-circle-4 bg-circle"></div>
      </header>

      {/* Blog Section */}
      <section id="scroll">
        <div className="container px-5">
          {articles.map((article) => (
            <div className="row gx-5 align-items-center my-5" key={article.id}>
              <div className={`col-lg-6 ${article.id % 2 === 0 ? '' : 'order-lg-2'}`}>
                <div className="p-5">
                  <Image
                    src={article.image}
                    alt={article.alt}
                    width={1000}
                    height={800}
                    layout="responsive"  // Responsive image rendering
                  />
                </div>
              </div>
              <div className={`col-lg-6 ${article.id % 2 === 0 ? '' : 'order-lg-1'}`}>
                <div className="p-5">
                  <h2 className="display-4">{article.title}</h2>
                  <p>{expandedArticle === article.id ? article.fullText : article.intro}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => toggleArticle(article.id)}
                  >
                    {expandedArticle === article.id ? 'Show Less' : 'Read More'}
                  </button>
                </div>
              </div>
            </div>
          ))}
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

// ZohoRecruitPages.jsx
import React, { useState } from 'react';
import './ZohoRecruitPages.css';

const ZohoRecruitPages = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const Header = () => (
    <header className="main-header">
      <div className="header-container">
        <div className="header-left">
          <div className="logo-section">
            <div className="logo-boxes">
              <div className="logo-box red"></div>
              <div className="logo-box green"></div>
              <div className="logo-box blue"></div>
              <div className="logo-box yellow"></div>
            </div>
            <span className="logo-text">ZOHO</span>
          </div>
          <nav className="main-nav">
            <a href="#">CRM</a>
            <a href="#">People</a>
            <a href="#">Creator</a>
            <a href="#">Sign</a>
            <a href="#">Payroll</a>
            <a href="#">Mail</a>
            <a href="#" className="dropdown-link">
              All Products
              <svg className="icon-small" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </nav>
        </div>
        <div className="header-right">
          <svg className="icon-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <div className="language-selector">
            <svg className="icon-small" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>English</span>
          </div>
          <div className="user-avatar">
            <svg className="icon-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );

  const RecruitHeader = () => (
    <div className="recruit-header">
      <div className="header-container">
        <div className="recruit-logo">
          <div className="recruit-icon">
            <div className="recruit-icon-inner"></div>
          </div>
          <div>
            <div className="recruit-subtitle">Zoho</div>
            <div className="recruit-title">Recruit</div>
          </div>
        </div>
        <nav className="recruit-nav">
          <button onClick={() => setCurrentPage('home')} className="nav-button">
            Features
            <svg className="icon-small" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <button className="nav-button">
            Solutions
            <svg className="icon-small" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <button className="nav-button">Pricing</button>
          <button className="nav-button">Customers</button>
          <button className="nav-button">Partners</button>
          <button onClick={() => setCurrentPage('branding')} className="nav-button">
            Resources
            <svg className="icon-small" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </nav>
      </div>
    </div>
  );

  if (currentPage === 'home') {
    return (
      <div className="page-home">
        <Header />
        <RecruitHeader />
        <div className="content-container">
          <div className="two-column-grid">
            <div className="text-content">
              <h1 className="main-heading">
                Build a <span className="highlight-red">career site</span><br />
                with zero code
              </h1>
              <p className="description">
                Your company career site is a single point of communication for potential job applicants. Here is where candidates come to look for open jobs and learn more about what it is like to work for your company. Zoho Recruit can help recruiters build a highly functional, customized career page without any code.
              </p>
              <button className="cta-button">ACCESS ZOHO RECRUIT</button>
            </div>
            <div className="demo-section">
              <div className="shape shape-yellow"></div>
              <div className="shape shape-blue"></div>
              <div className="shape shape-orange"></div>
              
              <div className="demo-card">
                <div className="demo-header">
                  <div className="demo-nav">
                    <div className="demo-brand">ZYLKER</div>
                    <div className="demo-links">
                      <a href="#">Home</a>
                      <a href="#">Jobs</a>
                    </div>
                    <button className="demo-signin">Sign in / Register</button>
                  </div>
                  <div className="demo-hero">
                    <h2 className="demo-title">We're more than just a<br />workplace. We're a family.</h2>
                    <button className="demo-cta">View Openings</button>
                  </div>
                </div>
                
                <div className="demo-jobs">
                  <div className="jobs-header">
                    <h3>Join us</h3>
                    <span className="jobs-count">Current Openings</span>
                  </div>
                  <div className="jobs-category">
                    <span className="category-title">Accounting</span>
                    <span className="category-count">6 jobs</span>
                  </div>
                  <div className="jobs-grid">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="job-card">
                        <div className="job-title">Accountant</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="edit-badge">Edit Text</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-branding">
      <Header />
      <RecruitHeader />
      <div className="content-container">
        <div className="two-column-grid">
          <div className="text-content">
            <h1 className="main-heading">
              Bring out your<br />
              <span className="highlight-red">brand's personality</span>
            </h1>
            <p className="description">
              A recruitment website is a great space to showcase your employer brand. Whether it's through visuals, your job descriptions, day-in-the-life videos, or buttons linking to your social media pages, take your recruitment marketing efforts one step further and give candidates more than just a rundown of the jobs you're offering.
            </p>
            <p className="description">
              Every company has a unique employer value proposition (EVP) and culture. We want to make sure that yours is expressed beautifully and provide numerous options for customization. Create the best first impression by:
            </p>
          </div>
          <div className="features-section">
            <div className="feature-card">
              <div className="feature-icon red-icon">
                <div className="icon-shape"></div>
              </div>
              <div>
                <h3 className="feature-title">Choosing your favorite layout and theme</h3>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon blue-icon">
                <div className="icon-shape"></div>
              </div>
              <div>
                <h3 className="feature-title">Selecting colors that reflect your company's brand</h3>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon orange-icon">
                <div className="icon-shape filled"></div>
              </div>
              <div>
                <h3 className="feature-title">Getting creative with your background's display</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="demo-button">
        <button className="request-demo">
          <span className="play-icon">▶</span>
          <div>
            <div className="demo-label">Request</div>
            <div className="demo-text">demo</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ZohoRecruitPages;
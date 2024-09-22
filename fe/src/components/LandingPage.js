// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const featuredCourses = [
  { id: 1, title: "Financial Accounting", image: "/images/financial-accounting.jpg" },
  { id: 2, title: "Business Economics", image: "/images/business-economics.jpg" },
  { id: 3, title: "Corporate Finance", image: "/images/corporate-finance.jpg" },
  { id: 4, title: "Marketing Management", image: "/images/marketing-management.jpg" },
];

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="brand">
              <img src="/images/brand-logo.png" alt="LearnMyWay logo" className="brand-logo" />
              <h1 className="brand-name">LearnMyWay</h1>
            </div>
            <div className="hero-text">
              <div className="cta-buttons">
                <Link to="/login" className="cta-button login">Log In</Link>
                <Link to="/signup" className="cta-button signup">Get Started</Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="featured-courses">
        <div className="container">
          <h2 className="section-title">Featured Courses</h2>
          <div className="course-grid">
            {featuredCourses.map(course => (
              <Link to={`/course/${course.id}`} key={course.id} className="course-card">
                <img src={course.image} alt={course.title} className="course-image" />
                <div className="course-info">
                  <h3 className="course-title">{course.title}</h3>
                  <span className="course-cta">Learn More</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Add more sections as needed */}
    </div>
  );
}

export default LandingPage;
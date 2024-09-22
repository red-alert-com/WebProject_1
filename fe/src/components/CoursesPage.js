import React from 'react';
import './CoursesPage.css';
import { Link } from 'react-router-dom';

function CoursesPage() {
  return (
    <div>
      <h1>My Courses</h1>
      <div>
        <Link to="/course/CA2025">
          <div>
            <img src="course-thumbnail.jpg" alt="Course Thumbnail" />
            <p>CA2025</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CoursesPage;
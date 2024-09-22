import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import './CourseDetailPage.css';

const coursesData = {
  1: {
    name: "Finance Accounting ",
    modules: [
      {
        title: "Opening Techniques",
        videos: [
          { id: 1, title: "Sicilian Defense", videoId: "6IegDENuxU4", thumbnail: "/images/accountancy_image_1.jpg", locked: false },
          { id: 2, title: "Queen's Gambit", videoId: "FHyNwUK3bnM", thumbnail: "/images/Cash_flow_statement.jpg", locked: true },
        ]
      },
      {
        title: "Middlegame Tactics",
        videos: [
          { id: 3, title: "Fork and Pin", videoId: "9mhLQOZKVQs", thumbnail: "/images/business-economics.jpg", locked: false },
          { id: 4, title: "Discovered Attack", videoId: "y3xW-5o2Z9Y", thumbnail: "/images/corporate-finance.jpg", locked: true },
        ]
      }
    ]
  },
  // Add more courses as needed
};

function CourseDetailPage() {
  const { id } = useParams();
  const course = coursesData[id];
  const [activeModule, setActiveModule] = useState(0);
  const [activeTab, setActiveTab] = useState('videos');
  const [activeVideo, setActiveVideo] = useState(null);

  if (!course) {
    return <div>Course not found</div>;
  }

  const handleVideoClick = (video) => {
    if (!video.locked) {
      setActiveVideo(video);
    } else {
      alert("This video is locked. Purchase the course to unlock.");
    }
  };

  const closeVideoModal = () => {
    setActiveVideo(null);
  };

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="course-detail">
      <div className="course-header">
        <h1>{course.name}</h1>
      </div>
      <div className="course-content">
        <div className="sidebar">
          <h2>Modules</h2>
          <ul className="module-list">
            {course.modules.map((module, index) => (
              <li key={index}>
                <button 
                  onClick={() => setActiveModule(index)}
                  className={activeModule === index ? 'active' : ''}
                >
                  {module.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="main-content">
          <div className="tab-buttons">
            <button onClick={() => setActiveTab('videos')} className={activeTab === 'videos' ? 'active' : ''}>Videos</button>
            <button onClick={() => setActiveTab('docs')} className={activeTab === 'docs' ? 'active' : ''}>Documents</button>
            <button onClick={() => setActiveTab('tests')} className={activeTab === 'tests' ? 'active' : ''}>Tests</button>
          </div>
          <div className="tab-content">
            {activeTab === 'videos' && (
              <div className="video-grid">
                {course.modules[activeModule].videos.map(video => (
                  <div key={video.id} className={`video-item ${video.locked ? 'locked' : ''}`} onClick={() => handleVideoClick(video)}>
                    <img src={video.thumbnail} alt={video.title} />
                    <h3>{video.title}</h3>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'docs' && <p>Documents content coming soon...</p>}
            {activeTab === 'tests' && <p>Tests content coming soon...</p>}
          </div>
        </div>
      </div>
      {activeVideo && (
        <div className="video-modal" onClick={closeVideoModal}>
          <div className="video-modal-content" onClick={e => e.stopPropagation()}>
            <YouTube videoId={activeVideo.videoId} opts={opts} />
            <button className="close-modal" onClick={closeVideoModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseDetailPage;
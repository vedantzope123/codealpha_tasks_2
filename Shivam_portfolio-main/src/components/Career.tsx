import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* College */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech - Computer Engineering</h4>
                <h5>Trinity College</h5>
              </div>
              <h3>2025 – 2029</h3>
            </div>
            <p>
              Currently pursuing my degree with a strong focus on software
              development, artificial intelligence, and real-world project building.
            </p>
          </div>

          {/* AI Intern */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Artificial Intelligence Intern</h4>
                <h5>Codec Technology</h5>
              </div>
              <h3>2025 – Present</h3>
            </div>
            <p>
              Working on AI-driven solutions and machine learning projects. Gaining
              hands-on experience with AI technologies and contributing to real-world
              applications.
            </p>
          </div>

          {/* Frontend Developer Intern */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer Intern</h4>
                <h5>CodeAlpha</h5>
              </div>
              <h3>2025 – Present</h3>
            </div>
            <p>
              Developing responsive and user-friendly web applications. Improving
              skills in modern frontend technologies and best practices.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
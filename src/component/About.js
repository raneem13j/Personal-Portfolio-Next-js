import Image from "next/image";

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-square">
        <div>
          <Image
            src="/about.png"
            alt="profile image"
            className="profile-image1"
            width="650"
            height="350"
          />
        </div>
        <div className="about-container-details">
        <div>About Me</div>
        <div>Why hire me for your next project?</div>
        <div>A Full-Stack Developer experienced with popular frameworks and libraries such as React, Laravel, and NodeJs. Attended Codi-Tech, a web development boot-camp where I learned new technical and soft skills including new languages, group work, managing a team, and following the AGILE Methodology in every project. In addition, I am interested in designing and structuring wireframes.</div>
        </div>
      </div>
    </div>
  );
};

export default About;

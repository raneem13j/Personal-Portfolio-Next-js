import Image from "next/image";
import "../app/globals.css"

const Home = () => {
  return (
    <>
    <div className="home-container">
      <div className="home-container-details">
        <div>Hello, I&apos;m</div>
        <div>Raneem Al Jamal</div>
        <div>Full Stack Web Developer</div>
      </div>
      <div className="profile-image-container" >
        <div  className="profile-image">
          </div>
      </div>
    </div>
    </>
  );
};

export default Home;


// <Image src="/profile.png" alt="profile image" className="profile-image" width="450" height="500"/>
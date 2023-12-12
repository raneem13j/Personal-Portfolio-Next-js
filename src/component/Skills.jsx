import Image from "next/image";
const Skills = () => {
  const imageContainer = [
    { id: "1", image: "/css.png" },
    {
      id: "2",
      image: "/docker.png",
    },
    {
      id: "3",
      image: "/figma.png",
    },
    {
      id: "4",
      image: "/github.png",
    },
    {
      id: "5",
      image: "/html.png",
    },
    {
      id: "6",
      image: "/laravel.png",
    },
    {
      id: "7",
      image: "/materialui.png",
    },
    {
      id: "8",
      image: "/mongodb.png",
    },
    {
      id: "9",
      image: "/mysql.png",
    },
    {
      id: "10",
      image: "/next.png",
    },
    {
      id: "11",
      image: "/node.png",
    },
    {
      id: "12",
      image: "/php.png",
    },
    {
      id: "13",
      image: "/postman.png",
    },
    {
      id: "14",
      image: "/react.png",
    },
    {
      id:"15",
      image: "/redux.png",
    },
    {
      id: "16",
      image: "/sas.png",
    },
    {
      id: "17",
      image: "/sql.png",
    },
    {
      id: "18",
      image: "/typescript.png",
    },
    {
      id: "19",
      image: "/git.png",
    },
    {
      id: "20",
      image: "/javascript2.png",
    },
    {
      id: "21",
      image: "/wordpress.png",
    },
  ];
  return (
    <>
    <div className="main-skills-container" id="skills">
      
      <div className="main-skills-container-title">
        <h2>Skills</h2>
      </div>
      <div className="skills-container">
        {imageContainer.map((item) => {
          
          return(
            
            <div key={item.id} className="image-container">
              <Image
                
                src={item.image}
                alt={`Skill ${item.id + 1}`}
                width={60}
                height={60}
              />
            </div>
          )
          })}
      </div>
    </div>
    </>
  );
};

export default Skills;

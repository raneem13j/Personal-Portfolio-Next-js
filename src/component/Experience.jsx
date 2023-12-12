import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Experience = () => {
  const educationData = [
    {
      id: "1",
      date: "Nov 2022 - Jul 2023",
      company: "Codi-Tech Organization",
      position: "Full Stack Web Developer",
    },
    {
      id: "2",
      date: "Feb 2008 - Jul 2012",
      company: "Patra University - Jordan",
      position: "Pharmacy",
    },
    {
      id: "3",
      date: "June 2018",
      company: "Syrian University",
      position: "Chemistry",
    },
  ];
  const experienceData = [
    {
      id: "1",
      date: "Nov 2022- Jul 2023",
      company: "Codi-Tech",
      position: "Full Stack Web Developer Intern",
    },
    {
      id: "2",
      date: "Jun 2016 - Feb 2020",
      company: "Pharm Amal Pharmacy",
      position: "Senior Pharmacist",
    },
    {
      id: "3",
      date: "Apr 2013- Jun 2016 ",
      company: "Pharm Amal Pharmacy",
      position: "Junior Pharmacist",
    },
  ];
  return (
    <>
      <div className="experience-container" id="experience">
        <div className="experience-details">
          <h3>Experience</h3>
          <div className="experience-square">
            {experienceData.map((item) => {
              return (
                <Card
                  key={item.id}
                  sx={{
                    maxWidth: 400,
                    width: 600,
                    backgroundColor: "#2c304b",
                    border: "solid 1px #fec576",
                    color: "white",
                    borderRadius: "5px",
                    marginRight: "20px",
                  }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14, color: "white" }}
                      gutterBottom
                    >
                      {item.date}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {item.position}
                    </Typography>
                    <Typography
                      sx={{ mb: 1.5, fontSize: 20, color: "#fec576" }}
                    >
                      {item.company}
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="experience-details">
          <h3>Education</h3>
          <div className="experience-square">
            {educationData.map((item) => {
              return (
                <Card
                  key={item.id}
                  sx={{
                    maxWidth: 400,
                    width: 600,
                    backgroundColor: "#2c304b",
                    border: "solid 1px #fec576",
                    color: "white",
                    borderRadius: "7px",
                    marginRight: "20px",
                  }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14, color: "white" }}
                      gutterBottom
                    >
                      {item.date}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {item.position}
                    </Typography>
                    <Typography
                      sx={{ mb: 1.5, fontSize: 20, color: "#fec576" }}
                    >
                      {item.company}
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;

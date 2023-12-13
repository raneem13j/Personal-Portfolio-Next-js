import React from "react";
import Card from "@mui/material/Card";
import { Icon } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FaGithub, FaEnvelope, FaPhone, FaLinkedinIn, FaMapMarkedAlt ,FaInstagram} from 'react-icons/fa'

const ContactUs = () =>{
    const socialLinksData = [
        {
          id: "1",
          icon: <><FaGithub/></>,
          link: "https://github.com/raneem13j?tab=repositories",
          social: "GitHub"
          
        },
        {
            id: "2",
            icon: <><FaLinkedinIn/></>,
            link: "https://www.linkedin.com/in/raneem-al-jamal/",
            social: "LinkedIn"
        },
        {
            id: "3",
            icon: <><FaInstagram/></>,
            link: "https://www.instagram.com/ranemjamal/",
            social: "Instagram"
        },
        {
            id: "4",
            icon: <><FaPhone/></>,
            link: "tel:+096176707301",
            social: "Phone Number"
        },
        {
            id: "5",
            icon: <><FaEnvelope/></>,
            link: "mailto:aljamal.raneem@gmail.com",
            social: "Email"
        },
        {
            id: "6",
            icon: <><FaMapMarkedAlt/></>,
            link: "#",
            social: "Beirut, Lebanon"
        },
      ];
  return (
    <>
    <div className="contact-main-container" id='contact'>
     <div className="contact-container" >
      <h2>Contact Me</h2>
      <p>Let&apos;s Be Friends</p>
      <div className="contact-square">
      {socialLinksData.map((item) => {
           return(  
              
              <a key={item.id} href={item.link}>
                <Card key={item.id}  sx={{ minWidth: 100,width:350 , height:70,
                backgroundColor: "#2c304b", border: "solid 1px #fec576", 
                 borderRadius:"5px", 
                "&:hover": {
                  backgroundColor: "#fec576",
                  color: "#22273b",
                  "& .MuiTypography-root": {
                    color: "#22273b",
                  },
                  "& .MuiIcon-root": {
                    color: "#22273b",
                  },
                }, }} >
                  <CardContent   sx={{ display:"flex", flexDirection:"row", justifyContent: "space-evenly", alignItems:" center",  }}>
                    <Typography sx={{ fontFamily:"serif", fontSize:"35px",color:"white" }}>
                    {item.social}
                    </Typography>
                    <Icon sx={{ color: "#fec576" }} >{item.icon}</Icon>
                  </CardContent>
                </Card>
                </a>
               
           )
              
               } )}
      </div>
      </div>
    </div>
    </>
  )
}

export default ContactUs

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Icon from "./Imgs/icon.png"; 


export default function Home() {

  const Header = () =>{
    return(
      <div
      style = {{
        backgroundColor: "lightgrey",
        padding: "2vh",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "2vh",
        marginRight: "34%",
         marginLeft: "34%"
      }}>
        <div
        style = {{
          height: "fit-content",
          width: "fit-content",
          backgroundColor: "none",
          width: "100%",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          display: "grid",
          gridTemplateColumns: "auto auto auto",

        }}>

          <div
          style = {{
            height: "fit-content",
            width: "fit-content",
            borderRadius: "50%",
            overflow: "hidden",
            gridColumnStart: 2,
            gridCOlumnEnd: 2,


          }}>
          <Image src = {Icon} placeholder = {"blur"} quality = {0} height = {100} width = {100} layout = {"fixed"} objectFit = {"cover"} /> 
        </div>

        </div>
        <h1>Anderson Blanco</h1>
      </div>

    )
  }



  const AboutMe = () =>{
    return(
      <div
      style = {{
        backgroundColor: "lightgrey",
        height: "",
        width: "",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        padding: "2vh",
        borderRadius: "4vh",
        marginTop: "5vh",
      }}>

        <div
        style = {{
          width: "100%",
         height: "10vh",
         backgroundColor: "none", 
        }}>
        <h2
        style = {{
          float: "left",
          fontSize: "4vh",

        }}>About Me..</h2>
        </div>

        
        <p
        style = {{
           fontSize: "2.5vh",
          
        
        }}>
          Hello, my name is Anderson Blanco. I am a highschool sophmore full-stack software developer; focused on
          both front-end and back-end development. Apart from being a full-stack developer, i also 
          develope in AI (Artificial Intelligence) and Data Science + Data Analytics. 

        </p>

      </div>
    )
  }


  const Background = () =>{
    return(
      <div
      style = {{
        backgroundColor: "lightgrey",
        height: "",
        width: "50%",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        padding: "2vh",
        borderRadius: "4vh",
        marginTop: "5vh",
        marginRight: "1vh"

      }}>


      <h2
      style = {{
       textAlign: "left",
       fontSize: "4vh",

      }}>Background</h2>
 
         <p
         style = {{
          fontSize: "2.5vh",
  
         }}>
            My background consists on discipline, dedication, determination, and resilience.
            With a great background in the sport of Boxing; with a goal and a dream to be the 2nd Greatest Boxer of all Time, and win a gold medal in 
            the Boxing Olympics for United States of America / Dominican Republic. A dream and goal to make a great impact in the world, inf fields of; 
            Biology, Technology, Chemistry, Aero-Space, Politics, Economics, and Health. 
            
            <h2
            style = {{
              textAlign: "left",
              marginTop: "5vh",
            textDecoration: "underline"

            }}>Education</h2>
              
              <ul
              style = {{
                width: "100%",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                listStylePosition: "inside",
                fontSize: "2vh",
                fontWeight: "bold",
           fontSize: "2.5vh",

              }}>
                <li>Highschool: Lynn Vocational Tech Institute </li>
                <li>Collage: MIT (Awaiting Highschool grad) </li>
  
         </ul>
         </p>
      </div>
    )
  }


  const PersonalProjects = () =>{
    return(
      <div
      style = {{
        backgroundColor: "lightgrey",
        height: "",
        width: "50%",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        padding: "2vh",
        borderRadius: "4vh",
        marginTop: "5vh",
        marginLeft: "1vh",
        fontSize: "2.5vh",
      }}>
          <h2
          style = {{
            fontSize: "3.4vh",
            textAlign: "center",
            textDecoration: "underline" 
          }}>Personal Projects</h2>
 
      <ul
      style = {{
        listStylePosition: "inside"
      }}>
        <li
        style = {{
        
        }}>CubePals website: 
        
        <a
        style = {{
          color: "purple"
        }}
        href = "http://cubepalsnft.com/">cubepalsnft.com</a>
        </li>

        <li>
          Notes app: <a style = {{color: "purple"}} href = "https://snack.expo.dev/@anderson913/expo-knotev2">Knote</a>
        </li>
        </ul>
        </div>
    )
  }
  return (
    <div className={styles.container}
    >



    <Header />
  <AboutMe />

<div
style = {{
  flexDirection: "row",
  display: "flex"
}}>
  <Background />
  <PersonalProjects />
</div>

    </div>
  )
}

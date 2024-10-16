// colleges
import { ReactNode } from "react"
import Binayak from "../assets/BinayakClg.jpg"
import Dura from "../assets/DuraClg.webp"
import Nist from "../assets/Nist.jpg"
import PortfollioContext, { college, project, Frontend, Backend, Other } from "./PortfollioContext"
//project images
import Weather from "../assets/weatherimg.png"
import Dicegame from "../assets/Dicegameimg.png"
import Currency from "../assets/currencyconvertorimg.png"
import Com from "../assets/com.png"
// Skill image links
import Adobe from "../assets/adobe-xd-logo-svgrepo-com.svg"
import Bootstrap from "../assets/bootstrap-fill-svgrepo-com.svg"
import Css from "../assets/css-3-svgrepo-com.svg"
import Figma from "../assets/figma-svgrepo-com.svg"
import Git from "../assets/git-svgrepo-com.svg"
import Html from "../assets/html-5-svgrepo-com.svg"
import Js from "../assets/js-official-svgrepo-com.svg"
import Material from "../assets/material-ui-svgrepo-com.svg"
import Mongo from "../assets/mongodb-svgrepo-com.svg"
import Mysql from "../assets/mysql-logo-svgrepo-com.svg"
import Next from "../assets/next-js-svgrepo-com.svg"
import Node from "../assets/nodejs-svgrepo-com.svg"
import Redux from "../assets/redux-svgrepo-com.svg"
import Tailwind from "../assets/tailwind-css-svgrepo-com.svg"
import react from "../assets/react.svg"
import Express from "../assets/express-svgrepo-com.svg"
import vs from "../assets/vscode-svgrepo-com.svg"

interface props {
    children: ReactNode
}

function PortfollioContextProvider({ children }: props) {

    const education: college[] = [
        { logo: Nist, clgname: "National Institute of Science and Technology,Berhampur", course: "MCA(Master in Computer Application)", year: "2022-2024", Grade: 8.4, text: "I am currently pursuing a Master Of Computer Application." },
        { logo: Binayak, clgname: "Binayak Acharya Degree College,Berhampur", course: "Physics", year: "2019-2022", Grade: 7.28, text: "I completed Bachelor Of Science in Physics at Berhampur University, Berhampur." },
        { logo: Dura, clgname: "Rama Narayan Degree College,Dura", course: "+2", year: "2017-2019", Grade: 64.5, text: "I completed my intermediate(12th) at Ramnarayan Degree College, Berhampur." }
    ]

    const projects: project[] = [
        { name: "Currency Convertor", pic: Currency, text: "A Currency Converter website built with React enables users to seamlessly convert currencies in real-time. It features an intuitive UI, fetches exchange rates from an API, and offers responsive design for all devices.",link:"https://rakeshkumarsahu2001.github.io/Currency-Convertor/" ,tools: ["Tailwind", "React js", "Rest API"] },
        { name: "Weather Detection", pic: Weather, text: "A Weather Detection website built with React provides real-time weather updates, utilizing APIs to display temperature, conditions, and forecasts, offering a responsive and user-friendly interface for seamless weather tracking across devices.",link:"#" ,tools: ["Tailwind", "React js", "Rest API"] },
        { name: "Dice Game", pic: Dicegame, text: "A Dice Game website built with React challenges players to guess the number rolled by the dice. Simple, interactive, and engaging, it enhances user experience with instant feedback and sleek design.",link:"https://rakeshkumarsahu2001.github.io/Dice-Game/" ,tools: ["Tailwind", "React js"] },
        { name: "Contact Management System", pic: Com, text: "A Contact Management System website built with React, Node, Express, and MongoDB allows users to securely store, manage, and update contacts efficiently, providing an intuitive interface for easy contact management.",link:"#" ,tools: ["React js", "Node js", "Express", "MongoDB", "JWT"] }

    ];

    // skills
    const Frontend: Frontend = {
        react: react,
        next: Next,
        bootstrap: Bootstrap,
        css: Css,
        materialui: Material,
        html: Html,
        javascript: Js,
        redux: Redux,
        tailwind: Tailwind
    }
    const Backend: Backend = {
        mongoDB: Mongo,
        mySql: Mysql,
        nodeJS: Node,
        expressjs: Express
    }
    const Other: Other = {
        figma: Figma,
        git: Git,
        vscode: vs,
        adobe: Adobe
    }



    return (
        <PortfollioContext.Provider value={{ education, projects, Frontend, Backend, Other }}>
            {
                children
            }
        </PortfollioContext.Provider>
    )
}

export default PortfollioContextProvider
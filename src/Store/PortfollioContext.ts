import { createContext } from "react";

export interface college {
    logo: string,
    clgname: string,
    course: string,
    year: string,
    Grade: number,
    text: string,

}

export interface project {
    name: string,
    pic: string,
    text: string,
    link:string
    tools: string[]
}


export interface Frontend {
    react: string,
    next: string,
    bootstrap: string,
    css: string,
    materialui: string,
    html: string,
    javascript: string,
    redux: string,
    tailwind: string,
}


export interface Backend{
    mongoDB: string,
    mySql:string,
    nodeJS: string,
    expressjs: string,
}
export interface Other{
    figma:string,
    git:string,
    vscode:string,
    adobe:string,
}

interface PortfollioContextType {
    education: college[],
    projects: project[],
    Frontend:Frontend,
    Backend: Backend,
    Other:Other
}



const PortfollioContext = createContext<PortfollioContextType>({ education: [], projects: [],Frontend:{} as Frontend,Backend:{} as Backend,Other:{} as Other })
export default PortfollioContext
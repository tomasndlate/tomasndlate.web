import React, { ReactNode } from "react";

export interface Profile {
    name: string,
    role: string,
    description: string,
    summary: ReactNode,
    linkedIn: string,
    github: string
}
export const profile: Profile = {
    name: "Tomas Ndlate",
    role: "Software Engineer",
    description: "Exploring the world of AI, Cloud, and Software.",
    summary: (<>
        I&apos;m a Software Engineer with a degree in Computer Science and experience at Fidelity Investments.
        <br />
        <br />
        Currently pursuing a Master&apos;s in Artificial Intelligence at the University of Galway,
        I&apos;m passionate about merging software development with AI to drive innovation.
    </>),
    linkedIn: "https://www.linkedin.com/in/tomasndlate/",
    github: "https://github.com/tomasndlate"
}

export interface Experience {
    id: number,
    role: string,
    company: string,
    startDate: string,
    endDate: string,
    summary: ReactNode,
    skills: string[],
    linkedIn: string
}
export const experience: Experience[] = [
    {
        id: 0,
        role: "Software Engineer",
        company: "Fidelity Investments",
        startDate: "Jan 2023",
        endDate: "Present",
        summary: (<>
            Software engineer focused on frontend and backend development,
            improving the account opening experience for 3M+ users annually by
            enhancing UI responsiveness and streamlining backend processes.
        </>),
        skills: ["Typescript", "Angular", "Java", "Spring Boot", 
            "GitHub", "Jira", "Datadog", "Jenkins"],
        linkedIn: "https://www.linkedin.com/company/fidelity-investments/"
    },
    {
        id: 1,
        role: "Summer Intern",
        company: "EDP",
        startDate: "Jul 2022",
        endDate: "Aug 2022",
        summary: (<>
            Hands-on experience in Microsoft Planner, doing 
            automations to Excel with VBA.
        </>),
        skills: ["Visual Basic", "Excel"],
        linkedIn: "https://www.linkedin.com/company/edp/"
    }
]

export interface Education {
    id: number,
    degree: string,
    university: string,
    startDate: string,
    endDate: string,
    summary: ReactNode,
    skills: string[],
    linkedIn: string
}
export const education: Education[] = [
    {
        id: 0,
        degree: "MSc in Artificial Intelligence",
        university: "University of Galway",
        startDate: "Sep 2024",
        endDate: "Aug 2026",
        summary: (<>
            Focus on advanced machine learning, data science, and AI applications.
        </>),
        skills: ["Machine Learning", "Sk-Learn", "Deep Learning", "Python"],
        linkedIn: "https://www.linkedin.com/school/universityofgalway/posts/?feedView=all"
    },
    {
        id: 1,
        degree: "BSc in Computer Science",
        university: "University of Lisbon",
        startDate: "Sep 2019",
        endDate: "Jul 2022",
        summary: (<>
            Projects I enjoyed: E-commerce website - React, CSS, Node.js, MongoDB -
            delivery drone algorithm Python, and a chess game Java, JUnit.
        </>),
        skills: [],
        linkedIn: "https://www.linkedin.com/school/universidade-de-lisboa/"
    }
]

export interface Certification {
    id: number,
    name: string,
    issuedBy: string,
    date: string,
    linkedIn: string
}
export const certifications: Certification[] = [
    {
        id: 0,
        name: "AWS Cloud Certified Practitioner",
        issuedBy: "Amazon Web Services",
        date: "Sep 2024",
        linkedIn: "https://www.linkedin.com/company/amazon-web-services/"
    },
    {
        id: 1,
        name: "AWS AI Certified Practitioner",
        issuedBy: "Amazon Web Services",
        date: "Feb 2025",
        linkedIn: "https://www.linkedin.com/company/amazon-web-services/"
    }
]

export interface Project {
    id: number,
    slug: string,
    name: string,
    category: string,
    image: string,
    description: ReactNode,
    technologies: string[]
    link: string,
    github: string
}
export const projects: Project[] = [
    {
        id: 0,
        slug: "#",
        name: "Experiment.AI",
        category: "Full-stack & Machine Learning project",
        image: "/images.projects/ml-experiment-ai.png",
        description: (<>
            Full-stack web app that allows users to interact with AI models. 
            It features a Next.js frontend, AI models deployed as AWS Lambda functions, 
            and a PostgreSQL database. Stripe handles payments, and Auth.js manages authentication.
        </>),
        technologies: ["Next.js", "Stripe", "Auth.js", "Prisma", "Python", "Sk-Learn", "AWS Lambda", "AWS API Gateway", "Tailwind"],
        link: "https://ml-experiment-ai.vercel.app/",
        github: "https://github.com/tomasndlate/ml-experiment.ai"
    },
    {
        id: 1,
        slug: "#",
        name: "ML Spam Detection",
        category: "Full-stack & Machine Learning project",
        image: "/images.projects/ml-spam-detector-demo.png",
        description: (<>
            A machine learning-powered spam detection system with a React frontend, 
            a serverless AWS Lambda API, and a scikit-learn model. It enables users to 
            classify text as spam or not, leveraging scalable cloud deployment 
            and Infrastructure as Code with Terraform.
        </>),
        technologies: ["React", "Python", "Sk-Learn", "AWS Lambda", "AWS API Gateway", "Terraform"],
        link: "https://tomasndlate.github.io/ml-spam-detector/",
        github: "https://github.com/tomasndlate/ml-spam-detector"
    },
    {
        id: 2,
        slug: "#",
        name: "Web Chess Platform",
        category: "Full-stack project",
        image: "/images.projects/web-chess-platform-demo.png",
        description: (<>
            A turn-based chess game with a Java backend and an HTML frontend. 
            It implements core game mechanics, move validation, and 
            checkmate detection while providing a smooth user experience.
        </>),
        technologies: ["Java", "HTML", "CSS", "Javascript"],
        link: "#",
        github: "https://github.com/tomasndlate/web-chess-game"
    },
    {
        id: 3,
        slug: "#",
        name: "Web Memory Game",
        category: "Frontend project",
        image: "/images.projects/web-memory-game.png",
        description: (<>
            Web-based game built with HTML, JavaScript, and CSS. It includes 
            multiple game modes, dynamic language switching, multiplayer functionality, 
            and an interactive canvas-based map with animations and Easter Eggs.
        </>),
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://tomasndlate.github.io/web-memory-game/",
        github: "https://github.com/tomasndlate/web-memory-game"
    },
    {
        id: 4,
        slug: "#",
        name: "Resume Builder",
        category: "Frontend project",
        image: "/images.projects/resume-builder-demo.png",
        description: (<>
            The Resume Builder App is a web tool for creating professional resumes easily. 
            Users input personal details, work experience, education, and skills to 
            generate a formatted, downloadable resume.
        </>),
        technologies: ["Angular", "CSS"],
        link: "https://tomasndlate.github.io/resume-builder/dashboard",
        github: "https://github.com/tomasndlate/resume-builder"
    },
    {
        id: 5,
        slug: "#",
        name: "ToDo App",
        category: "Frontend project",
        image: "/images.projects/to-do-app-demo.png",
        description: (<>
            A simple and intuitive task management application built with Angular. 
            Users can create, update, and organize their daily tasks with a clean UI, 
            responsive design, and essential task management features.
        </>),
        technologies: ["Angular", "CSS"],
        link: "https://tomasndlate.github.io/web-to-do-app/",
        github: "https://github.com/tomasndlate/web-to-do-app"
    }
]
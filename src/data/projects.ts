import counter from '../assets/projectsImages/Counters.png'
import portfolio from '../assets/projectsImages/portfolio.png'
import todolist from '../assets/projectsImages/Todo_List.png'
import img1 from "../assets/projectsImages/1.png";
import img2 from "../assets/projectsImages/3.png";
import img3 from "../assets/projectsImages/4.png";

export type ProjectType = {
    img: string,
    title: string,
    text: string,
    livePreviewURL: string,
    viewCodeURL: string,
    technologies: string
}

export const projectsItems: ProjectType[] = [
    {
        img: counter,
        title: 'Counter',
        text: "The \"Counter\" page allows users to increment a starting value up to a user-defined maximum. It gracefully handles invalid input, ensuring smooth interaction. With a simple interface, users can effortlessly manage the counter with all necessary functionalities.",
        livePreviewURL: 'https://pasosh12.github.io/counters/',
        viewCodeURL: "https://github.com/pasosh12/counters",
        technologies: 'TypeScript, React, Redux'
    },
    {
        img: portfolio,
        title: 'Portfolio',
        text: "The \"Portfolio\" landing page features stunning visuals, smooth scrolling, and engaging animations. Users can send form submissions via EmailJS with Toastify notifications. All styles are crafted using Styled Components for a cohesive design",
        livePreviewURL: 'https://pasosh12.github.io/portfolio/',
        viewCodeURL: "https://github.com/pasosh12/portfolio",
        technologies: 'Styled Components, React, RWD'
    },
    {
        img: todolist,
        title: 'Todo List',
        text: "The \"Todo List\" app allows users to create new todo lists and add tasks for each one. It supports all CRUD operations: creating, updating titles, changing task statuses, and deleting tasks. The entire design uses Material UI for a sleek and modern look, enhancing user experience.",
        livePreviewURL: 'https://pasosh12.github.io/todolist/',
        viewCodeURL: "https://github.com/pasosh12/todolist",
        technologies: 'Material UI, TypeScript, React'
    },
    {
        img: img1,
        title: 'Social Network',
        text: "This is sample project description random things are here in description his is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        livePreviewURL: '',
        viewCodeURL: '',
        technologies: ''
    },
    {
        img: img2,
        title: 'Timer',
        text: "This is sample project description random things are here in description his is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        livePreviewURL: '',
        viewCodeURL: '',
        technologies: ''
    },
    {
        img: img3,
        title: 'Shopify',
        text: "This is sample project description random things are here in description his is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        livePreviewURL: '',
        viewCodeURL: '',
        technologies: ''
    },

]


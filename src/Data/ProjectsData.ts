import elzero from '../assets/projects/elzero.webp'
import kasper from '../assets/projects/kasper.webp'
import dash from '../assets/projects/dash.webp'
import villa from '../assets/projects/task3-villa.webp'
import js from '../assets/projects/hcjs.webp'
import medicano from '../assets/projects/m1.webp'
import blog from '../assets/projects/task6-blog-dark.webp'
import AIBlog from "../assets/projects/grad-blog.webp"
import tours from "../assets/projects/tours1.webp"



export type Project = {
    id: number;
    img: string;
    name: string;
    type: string; 
    description: string;
    demo:string;
    code:string;
  };
  
  export const projects: Project[] = [
    { 
        id: 1,
        img:elzero, 
        name: 'Elzero Website', 
        type: 'html & css', 
        description: 'using only html and css',
        demo:"https://github.com/Batoul7/Template-Elzero",
        code:"https://github.com/Batoul7/Template-Elzero",
    },
    { 
        id: 2, 
        img:kasper, 
        name: 'Kasper Website', 
        type: 'html & css', 
        description: 'using only html and css' ,
        demo:"https://github.com/Batoul7/template-kasper",
        code:"https://github.com/Batoul7/template-kasper",
    },
    { 
        id: 3, 
        img:dash, 
        name: 'Dashboard', 
        type: 'html & css', 
        description: 'using only html and css' ,
        demo:"https://github.com/Batoul7/Dashboard-html-css",
        code:"https://github.com/Batoul7/Dashboard-html-css",
    },
    { 
        id: 4, 
        img:js, 
        name: 'javascript exercises', 
        type: 'javascript', 
        description: 'using only html, css and javaScript' ,
        demo:"https://github.com/Batoul7/JavaScript-Exercises",
        code:"https://github.com/Batoul7/JavaScript-Exercises",
    },
    { 
        id: 5, 
        img:villa, 
        name: 'Villa ', 
        type: 'react', 
        description: 'Multiple pages design for villas website using react' ,
        demo:"https://batoul7.github.io/task3-villa/",
        code:"https://github.com/Batoul7/task3-villa",
    },
    { 
        id: 6, 
        img:medicano, 
        name: 'Medicano ', 
        type: 'react', 
        description: 'Landing page design for medicio website using bootstrap and react' ,
        demo:"https://batoul7.github.io/task4-medicio/",
        code:"https://github.com/Batoul7/task4-medicio",
    },
    { 
        id: 7, 
        img:blog, 
        name: 'blog', 
        type: 'react', 
        description: 'Blog using React, Redux and Tailwind' ,
        demo:"https://batoul7.github.io/task6-blog/",
        code:"https://github.com/Batoul7/task6-blog",
    },
    { 
        id: 8, 
        img:AIBlog, 
        name: 'AI blog', 
        type: 'react', 
        description: 'AI Blog using React, Redux, TypeScript and TailwindCss' ,
        demo:"https://batoul7.github.io/Graduation-Project/",
        code:"https://github.com/Batoul7/Graduation-Project",
    },
    { 
        id: 9, 
        img:tours, 
        name: 'Tours Website', 
        type: 'next', 
        description: 'Tours Website using Next.js, TypeScript and TailwindCss' ,
        demo:"https://github.com/Batoul7/task7-tours",
        code:"https://github.com/Batoul7/task7-tours",
    },
  ];
  
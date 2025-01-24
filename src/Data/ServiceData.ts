import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faCode } from "@fortawesome/free-solid-svg-icons";
import serv1 from '../assets/serv1.webp'
import serv2 from '../assets/serv3.webp'

export const servData = [ 
    {
        img:serv1,
        icon:faCode,
        title:"Web Design and Development",
        desc:"Professional web design and development with React for responsive, user-friendly web applications",
        items: [
           "Interactive React applications.",
            "Performance enhancement.",
            "Mobile responsiveness.",
            "Excellent user experience.",
        ]
    },
    {
        img:serv2,
        icon:faFile,
        title:"Office Applications Support",
        desc:"Expert support for Microsoft Office applications",
        items: [
            "Document formatting",
            "Data analysis in Excel",
            "PowerPoint presentations",
            "Training sessions"
        ]
    },
]
import project01 from "./01t.png"
import Project2 from "./02t.png"
import Project3 from "./project3.jpg"
import proj1_im1 from "./01.png"
import proj1_im2 from "./03.png"
import proj2_img1 from './p202.png'
import proj2_img2 from './p202.png'
import proj2_img3 from './p203.png'
import proj2_img4 from './p204.png'
import javascript from "./javascript.png"
import proj2_img5 from './p205.png'
import proj2_img6 from './p206.png'
import proj2_img7 from './p207.png'
import proj2_img8 from './p208.png'
import proj2_img9 from './p209.png'
import proj2_img10 from './p210.png'
import img2_proj3 from "./img2_proj.jpg"
import img2_proj4 from "./img3_proj.jpg"
import img2_proj5 from "./img5_proj.jpg"
import img2_proj6 from "./img6_proj.jpg"
import img2_proj7 from "./img7_proj.jpg"
import L2 from "./image2.png"
import L1 from "./l1.png"
import E2 from "./E2.jpg"
import E1 from "./E1.jpg"
import E3 from "./E3.jpg"
import E4 from "./E4.jpg"
import E5 from "./E5.jpg"
import E6 from "./E6.jpg"
import T1 from "./T1.jpeg"
import T2 from "./T2.jpeg"
import T3 from "./T3.jpeg"
import T4 from "./T4.jpeg"
import T5 from "./T5.jpeg"
import K1 from "./K1.jpeg"
import K2 from "./K2.jpeg"
import K3 from "./K3.jpeg"
import K4 from "./K4.jpeg"
import K5 from "./K5.jpeg"
import K6 from "./K6.jpeg"

export const images = {
  javascript, project01, L1, L2, Project2, proj1_im1, E2,E1,E3,E4,E5,E6,proj1_im2, Project3, img2_proj3, img2_proj4, img2_proj5, img2_proj6, img2_proj7,
  proj2_img1, proj2_img2, proj2_img3, proj2_img4, proj2_img5, proj2_img6, proj2_img7, proj2_img8, proj2_img9, proj2_img10,T1
}
export const ProjectThambnel = [
  {
    name: "proj4",
    projectName: "HeathShield Vaccination Trcaker",
    themabaiimg: L1,
    tech: [
      { techno: "React.js", },
      { techno: "Tailwind CSS", },
      { techno: "Node.js", },
      { techno: "Express.js", },
      { techno: "MongoDB (Mongoose)", },
      { techno: "LeafLet.js" },
      { techno: "RazorPay" },
    ]
  },
  
  
  {
    name: "proj1",
    projectName: "Chat Web App",
    themabaiimg: project01,
    tech: [
      { techno: "React.js", },
      { techno: "Tailwind CSS", },
      { techno: "Node.js", },
      { techno: "Express.js", },
      { techno: "MongoDB (Mongoose)", },
      { techno: "Socket.IO" },
    ]
  },
  {
    name: "proj3",
    projectName: " Education Platfrom",
    themabaiimg: Project3
    ,
    tech: [
      { techno: "React.js", },
      { techno: "Tailwind CSS", },
      { techno: "Node.js", },
      { techno: "Express.js", },
      { techno: "MongoDB (Mongoose)", },
    ]
    
  },
  {
    name: "proj2",
    projectName: "Grocery Web Application",
    themabaiimg: Project2
    ,
    tech: [
      { techno: "React.js", },
      { techno: "Tailwind CSS", },
      { techno: "Node.js", },
      { techno: "Express.js", },
      { techno: "MongoDB (Mongoose)", },
      { techno: "Socket.IO" },
      { techno: "RazorPay" },
    ]
    
  },
  {
    name: "proj6",
    projectName: "Twitter Architecture Clone",
    themabaiimg: T1, // Assuming T1 is your Twitter thumbnail import
    tech: [
      { techno: "Next.js" },
      { techno: "GraphQL" },
      { techno: "Prisma.js" },
      { techno: "Nodejs" },
      { techno: "Expeesjs" },
      { techno: "Kafka" },
      { techno: "Redis" },
      { techno: "PostgreSQL" },
      { techno: "Socket.IO" }
    ]
  },
  {
    name: "proj5",
    projectName: "E-Commers Platfrom Kesula Mens Brand hub",
    themabaiimg: K2
    ,
    tech: [
      { techno: "Reactjs", },
      { techno: "Tailwind CSS", },
      { techno: "Typescript", },
      { techno: "Reactjs Query", },
      { techno: "MongoDB (Mongoose)", },
    ]

  },
]

export const projetcs = [

  {
  name: "proj6",
  tittle: "Twitter Clone – Social Media Platform",
    liveproject: "https://twitter-frontend-gamma-three.vercel.app/",
  description:
    "This project is a full-stack Twitter clone built to replicate core social media features with a strong focus on scalability, real-time communication, and performance optimization for high-traffic usage.",
 projectImage: [T1, T3,T4,T5,T2],
 whybuild: [
  { text: "To understand how large-scale social media platforms work" },
  { text: "To build a real-world application with real-time communication" },
  { text: "To implement scalable systems using Kafka and Redis" },
  { text: "To improve skills in GraphQL, PostgreSQL, and backend performance optimization" }
]
,
  keyfaeture: [
    { text: "Google OAuth authentication" },
    { text: "Follow and unfollow users" },
    { text: "Create and post tweets" },
    { text: "Real-time community messaging using Socket.IO" },
    { text: "Scalable notifications and event streaming using Kafka" }
  ],

  techTASK: [
    {
      frontend: [
        { text: "Next.js, React Query (TanStack)" }
      ]
    },
    {
      Backend: [
        { text: "Node.js, Express.js" }
      ]
    },
    {
      API: [
        { text: "GraphQL" }
      ]
    },
    {
      Database: [
        { text: "PostgreSQL, Prisma ORM" }
      ]
    },
    {
      RealTime: [
        { text: "Socket.IO" }
      ]
    },
    {
      Caching: [
        { text: "Redis" }
      ]
    },
    {
      Messaging: [
        { text: "Kafka" }
      ]
    }
  ]
}
,
  {
    name: "proj1",
    tittle: "QuickChat – Real-Time Chat Application",
    description: "QuickChat is a modern real-time chat application built using the MERN stack and Socket.IO for instant bi-directional communication. It allows users to chat live with others, see online statuses, and enjoy a smooth, responsive UI – all without page reloads.",
    github: "https://github.com/kiran04-code/QuickChats.com.git",
    liveproject: "https://quickchats-com-5.onrender.com/",
    whybuild: [
      { text: "To deepen my understanding of WebSockets and Socket.IO" },
      { text: "To build a real-world app demonstrating real-time data flow" },
      { text: "To tackle challenges like multi-user chat and status tracking" },
      { text: "To improve frontend/backend synchronization skills" }
    ],
    keyfaeture: [
      { text: "Real-time messaging using Socket.IO" },
      { text: "Online/offline user status" },
      { text: "Clean and responsive UI" },
      { text: "Scalable code architecture" },
      { text: "User-friendly chat interface" }
    ],
    projectImage: [proj1_im1, proj1_im2],
    techTASK: [
      {
        frontend: [
          { text: "React, Tailwind CSS, React Router" }
        ]
      },
      {
        Backend: [
          { text: "Node.js Express.js" }
        ],
      },
      {
        RealTime: [
          { text: "Scket.IO" }
        ]
      },
      {
        Database: [
          { text: "MongoDB" }
        ]
      },
      {
        Deployment: [
          { text: "vite + Render" }
        ]
      },
    ]
  },
  {
    name: "proj4",
    tittle: "HeathShield – Complete Healthcare & Vaccination Platform",
    description: "HeathShield is a comprehensive healthcare platform built using the MERN stack. It allows users to search nearby vaccinations, book slots, consult doctors via video calls, and lets doctors and admins manage hospital profiles and appointments efficiently.",
    github: "https://github.com/kiran04-code/Lifeshield.git",
    liveproject: "https://lifeshield.onrender.com/",
    whybuild: [
      { text: "To simplify access to healthcare services and vaccination tracking" },
      { text: "To create a platform for real-time doctor-patient video consultations" },
      { text: "To enable hospitals and doctors to manage appointments and profiles efficiently" },
      { text: "To integrate search and booking functionalities in a single platform" }
    ],
    keyfaeture: [
      { text: "Search nearby vaccination centers" },
      { text: "Book vaccination slots with ease" },
      { text: "Video consultation with doctors" },
      { text: "Admin panel to create hospital profiles and manage doctors" },
      { text: "Online/offline user status" },
      { text: "Clean and responsive UI" },
      { text: "Scalable code architecture" },
      { text: "User-friendly interface for parents, doctors, and admins" }
    ],
    projectImage: [L1, L2],
    projectvIDEO: [],
    techTASK: [
      {
        frontend: [
          { text: "React, Tailwind CSS, React Router, Framer Motion" }
        ]
      },
      {
        backend: [
          { text: "Node.js, Express.js, REST API" }
        ]
      },
      {
        realTime: [
          { text: "ZegoCloud for video consultations ,LeafLet.js for Map" },
          { text: "LeafLet.js for Map" }
        ]
      },
      {
        database: [
          { text: "MongoDB" }
        ]
      },
      {
        Payments: [
          { text: "Razorpay Integration" }
        ]
      },
      {
        deployment: [
          { text: "Vite + Render" }
        ]
      }
    ]
  },
  {
    name: "proj5",
    tittle: "E-Commerce website",
    description: "Kesula is a React.js-powered e-commerce platform offering a seamless shopping experience with secure checkout and real-time order tracking.",
    liveproject: "https://kusala-threads.onrender.com",
whybuild: [
  { text: "To support my brother’s new clothing business by creating a strong online presence" },
  { text: "To make trendy and affordable fashion easily accessible to customers" },
  { text: "To provide a smooth and secure online shopping experience" },
  { text: "To help the business grow with features like search, filters, and personalized recommendations" }
]

,
    keyfaeture: [
      { text: "Browers All Cloths " },
      { text: "Buy Cloth Using Razorpay" },
      { text: "Admin panel For Owner " },
      { text: "List Product " },
      { text: "See all Orders and Make Products Instack or OutStock" },
      { text: "Clean and responsive UI" },
      { text: "Scalable code architecture" },
      { text: "User-friendly interface for Owner, Users" }
    ],
    projectImage: [K1,K3,K4,K5,K2,K6],
    projectvIDEO: [],
    techTASK: [
      {
        frontend: [
          { text: "Reactjs, Framer Motion" }
        ]
      },
      {
        backend: [
          { text: "Nodejs" },
          { text: "Expressjs" }
        ]
      },
      
      {
        database: [
          { text: "MongoDB" }
        ]
      },
      {
        Payments: [
          { text: "Razorpay Integration" }
        ]
      },
      {
        deployment: [
          { text: "Vite + Vercal" }
        ]
      }
    ]
  },
  
  {
    name: "proj2",
    tittle: "🛒 GreenCart –  Grocery Web Application",
    description: "GreenCart is a full-stack grocery e-commerce application built using the MERN stack with integrated real-time features. It allows users to browse, order groceries, and make secure online payments, while enabling shopkeepers to manage products and communicate with users in real-time.",
    github: "https://github.com/kiran04-code/green-2cart.git",
    liveproject: "https://greencart-kiran-dev.onrender.com/",
    whybuild: [
      { text: "To create a practical, real-world e-commerce platform" },
      { text: "To integrate online payment processing using Razorpay" },
      { text: "To implement an admin dashboard for product and order management" },
      { text: "To strengthen my MERN stack and deployment skills" }
    ],
    projectImage: [proj2_img1, proj2_img2, proj2_img3, proj2_img4, proj2_img5, proj2_img6, proj2_img7, proj2_img8, proj2_img9, proj2_img10],
    keyfaeture: [
      { text: "Browse groceries with a smooth and responsive UI" },
      { text: "Real-time order status updates" },
      { text: "Online/offline shopkeeper status indicator" },
      { text: "Live chat with shopkeepers using Socket.IO" },
      { text: "Razorpay-powered secure payment gateway" }
    ],
    techTASK: [
      {
        frontend: [
          { text: "React, Tailwind CSS, React Router" }
        ]
      },
      {
        Backend: [
          { text: "Node.js, Express.js" }
        ],
      },
      {
        RealTime: [
          { text: "Socket.IO" }
        ]
      },
      {
        Database: [
          { text: "MongoDB (Mongoose)" }
        ]
      },
      {
        Deployment: [
          { text: "Vite + Render" }
        ]
      },
      {
        Payments: [
          { text: "Razorpay Integration" }
        ]
      },
    ]
  },
  {
    name: "proj3",
    tittle: "🎓 VITAcademic – Unofficial Academic Web Platform for VIT Pune Students",
    description: "VITAcademic is a full-stack academic support platform built using the MERN stack, designed specifically for students of VIT Pune.It provides organized access to lecture videos, handwritten notes, and previous year question papers (PYQs), making the academic journey smoother and more structured — especially for first-year students. 🟢 This is a student-led initiative and is not officially affiliated with the institute.",
    github: "https://github.com/kiran04-code/vitAcadamic.git",
    liveproject: "https://vitacadeemic.onrender.com",
    whybuild: [
      { text: "To help VIT Pune students who miss lectures or need revision material" },
      { text: "To bring together resources like concept-wise YouTube videos, unit-wise PYQs, and handwritten notes" },
      { text: "To provide a login-based system for securely accessing materials" },
      { text: "To strengthen my MERN stack skills through a real-world educational project" }
    ],
    projectImage: [Project3, img2_proj3, img2_proj4, img2_proj5, img2_proj6, img2_proj7],
    keyfaeture: [
      { text: "📺 Browse concept-wise YouTube lecture videos" },
      { text: "📝 Access and download handwritten notes" },
      { text: "📚 Explore unit-wise & NIT-wise previous year question papers" },
      { text: "🔐 Secure login to access academic content" },
      { text: "🗂 Organized semester-wise & subject-wise content structure" }
    ],
    techTASK: [
      {
        frontend: [
          { text: "React, Tailwind CSS, React Router" }
        ]
      },
      {
        Backend: [
          { text: "Node.js, Express.js" }
        ],
      },
      {
        Database: [
          { text: "MongoDB (Mongoose)" }
        ]
      },
      {
        Deployment: [
          { text: "Vite + Render" }
        ]
      },
    ]
  },

]
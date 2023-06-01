import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    avas,
    creative,
    steph,
    kaiser,
    fithub,
    jobit,
    dogs,
    threejs,
    opl,
    sportrait,
    n_cdisney,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "3:5Creative[s]",
      icon: creative,
      iconBg: "#E6DEDD",
      date: "April 2023 - Present",
      points: [
        "Creating new HTML templates, CSS stylesheets, Javascript code, and other programming languages as needed to support the functionality of the website being created.",
        "Testing web pages for functionality and usability, including conducting user testing sessions with customers or clients.",
        "Analyzing data to determine how effective certain marketing efforts have been in driving sales or increasing brand awareness.",
        "Assisting developers in creating websites by performing tasks such as creating database structures and writing code.",
        "Maintaining and updating existing websites by adding new content and deleting outdated content.",
        "Working with designers to create graphics such as banners and logos for use in online advertising campaigns.",
        "Communicating with teams of programmers, designers, marketers, and other staff members to coordinate the development of new projects.",
      ],
    },
    {
      title: "Web Development Consulting",
      company_name: "Steph Graham",
      icon: steph,
      iconBg: "#383E56",
      date: "March 2023 - April 2023",
      points: [
        "Assisted in implementing Afterpay into Squarespace website for the client.",
        "Worked with inject coding through Squarepace to implement feature.",
        "Worked with CSS and JavaScript coding to create functioning feature.",
      ],
    },
    {
      title: "Patient Access Specialist",
      company_name: "Kaiser Permanente",
      icon: kaiser,
      iconBg: "#ffff",
      date: "December 2017 - March 2023",
      points: [
        "Call Center Representative using Epic and open-source phone program.",
        "Answered inbound calls for patients and scheduling for Primary Care.",
        "Provided information on Home Health and Hospice, connected to nurses depending on symptoms/ concerns. Previously worked in Specialty Care.",
        "Provided assistance as helpdesk support for Kp.org.",
        "Handled 200 calls a day, multitasked programs during calls while meeting requirements of 2 minute phone calls."
      ],
    },
    {
      title: "Barista",
      company_name: "Ava Roasteria",
      icon: avas,
      iconBg: "#ffff",
      date: "April 2017 - November 2017",
      points: [
        "Provided excellent customer service.",
        "Demonstrated a deep understanding of coffee beans and the process of creating drinks.",
        "Communicated effectively and worked hard in a team environment.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Chris' help made it better to understand the issues I had and how to fix them. I'm content to have had his support.",
      name: "Steph Graham",
      designation: "CEO",
      company: "ConsultStephGraham",
      image: sportrait,
    },
    {
      testimonial:
        "I've never met a developer who truly cares about their clients' like Chris does. I'm happy to know him as a friend and can't wait to see where the future takes him.",
      name: "Kevin Nguyen",
      designation: "Student",
      company: "University of Washington",
      image: "",
    },
    {
      testimonial:
        "His determination and hard work over performed my expectations, there is no limit for Chris. I hope to see him succeed further and accomplish his goals ahead.",
      name: "Nancy Saechao",
      designation: "Spouse",
      company: "Chris.",
      image: n_cdisney,
    },
  ];
  
  const projects = [
    {
      name: "fithub",
      description:
        "The motivation for this app is for all users to find a fitness program and exercise that they can use, whether they are at home or at the gym to meet their fitness goals.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Express.JS",
          color: "pink-text-gradient",
        },
      ],
      image: fithub,
      source_code_link: "https://github.com/TikoMyster/fithub",
    },
    {
      name: "Congrats Kevin",
      description:
        "This is a static website made for a friend who got into college at this time. I wanted to add as much silly links and make the site dynamic and simple looking for my friend to enjoy.",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS3",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/TikoMyster/congrats-kevin",
    },
    {
      name: "Raining Cats and Dogs",
      description:
        "Raining Cats and Dogs is created to help pet owners find temporarily places for their pets to stay so that the owners can take their vacation in ease knowing that their pet will be taken care of while being away.",
      tags: [
        {
          name: "Node.JS",
          color: "blue-text-gradient",
        },
        {
          name: "Express.JS",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: dogs,
      source_code_link: "https://github.com/TikoMyster/Raining-Cats-and-Dogs",
    },
    {
      name: "Open PS2 Loader",
      description:
        "Open PS2 Loader (OPL) is a 100% Open source game and application loader for the PS2 and PS3 units. Assisted in minor adjustments to UI options for USB.",
      tags: [
        {
          name: "C",
          color: "blue-text-gradient",
        },
        {
          name: "Assembly",
          color: "green-text-gradient",
        },
        {
          name: "Compatibility",
          color: "pink-text-gradient",
        },
      ],
      image: opl,
      source_code_link: "https://github.com/TikoMyster/Raining-Cats-and-Dogs",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
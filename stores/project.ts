export const useProjectStore = definePiniaStore("project-store", {
  state: () => ({
    projects: [
      {
        id: 1,
        title: "KNVB Rinus",
        color: "#00AADB",
        headerImage: "/images/projects/rinus/rinus-macbook.webp",
        headerImageAlt: "Rinus on a Macbook",
        imageSpotOne: "/images/projects/rinus/rinus-mobile.webp",
        imageSpotOneAlt: "Rinus on a mobile phone",
        imageSpotTwo: "/images/projects/rinus/rinus-field.webp",
        imageSpotTwoAlt: "Vincent observing a football match",
        description:
          "Rinus is an online platform created by the Royal Dutch Football Association (KNVB) to support coaches in the development of amateur football players.\n\n The platform provides coaches with a wealth of information and resources, such as training exercises, videos, and articles based on coaching philosophy and methodology. Rinus aims to promote a holistic approach to coaching, which focuses not only on technical and tactical skills but also on social, emotional, and cognitive development.\n\n The platform is named after Rinus Michels, a legendary Dutch football coach who revolutionized the game with his innovative tactics and philosophy.",
        role: "I was responsible for leading a team in researching, designing and developing Rinus match mode for the Rinus platform. I effectively utilized all resources at my disposal, including multiple UX designers for advice/reviews, UI designers for the visual aspect, and got support from the developers that have originally created Rinus from Momkai. I was also responsible for presenting project progress to stakeholders, including the KNVB.",
        challenges:
          "Creating Rinus match mode was a challenging project that presented a few obstacles to overcome. One of the main challenges was making sure coaches are able to use it while coaching a match. It should require minimal attention, since coaches always have to be focused on the game. To overcome this challenge, I’ve changed the layout in a way that you need at most three clicks for a substitution, this a coach can handle. Another challenge was managing project scope and balancing feasible and out-of-scope features to create a functional MVP. Since I had 12 weeks for this project, I needed to invest my time efficiently. I decided to create a planning which I followed on the dot to ensure that I could finish this project in time.",
        lessons:
          "Through this project, I learned the importance of researching and understanding the target audience thoroughly when designing the project. I gained valuable experience in leading a team and learned through experience that I am capable of generating good ideas and incorporating feedback effectively. I also learned how to identify and manage project scope, balancing feasible and out-of-scope features to create a functional MVP.",
        link: "https://rinus.knvb.nl",
        techStack: [
          {
            name: "React",
            image: "/images/skills/react.svg",
            alt: "The React Logo",
            link: "https://reactjs.org/",
          },
          {
            name: "Next.js",
            image: "/images/skills/next.svg",
            alt: "The Next.js Logo",
            link: "https://nextjs.org/",
          },
          {
            name: "GraphQL",
            image: "/images/skills/graphql.svg",
            alt: "The GraphQL Logo",
            link: "https://graphql.org/",
          },
          {
            name: "Craft CMS",
            image: "/images/skills/craft.svg",
            alt: "The Craft Logo",
            link: "https://craftcms.com/",
          },
        ],
        collaborators: [
          {
            name: "Momkai",
            image: "/images/collaborators/momkai.svg",
            link: "https://momkai.com",
          },
          {
            name: "KNVB",
            image: "/images/collaborators/knvb.svg",
            link: "https://knvb.nl",
          },
        ],
      },
      {
        id: 2,
        title: "Momkai",
        color: "#0B0B0B",
        headerImage: "/images/projects/momkai/momkai-macbook.webp",
        headerImageAlt: "Momkai on a Macbook",
        imageSpotOne: "/images/projects/momkai/momkai-mobile.webp",
        imageSpotOneAlt: "Momkai on a mobile phone",
        imageSpotTwo: null,
        imageSpotTwoAlt: null,
        description:
          "Momkai.com is the dynamic online portfolio of the digital design agency where I worked. It showcases a range of stunning design projects and provides a glimpse into the creative minds of the team behind them. From web design to branding, the site exemplifies the impressive talent and expertise of the Momkai team.",
        role: "As a front-end developer at Momkai, my role was to work on maintenance, bug-fixing, and refactoring the website. I was responsible for updating all packages and implementing new components for images, links, and fonts throughout the website. I also added a work overview page, integrated Calendly for easy scheduling, and updated the layout for the contact page in CraftCMS. Additionally, I migrated the article overview page and article page from memberful.design to Momkai.com, which involved a lot of dynamic component work.",
        challenges:
          "The biggest challenge I faced while working on Momkai.com was updating the old codebase and ensuring compatibility with the latest versions of packages. I had to test and troubleshoot repeatedly to identify issues and resolve them. Beside this, I also worked on changing the Momkai site to TypeScript, since I had little experience with TypeScript this was quite the challenge. I had to dive into some tutorials to understand how to apply TypeScript in the correct way.",
        lessons:
          "Through working on Momkai.com, I gained extensive experience in package updates, bug-fixing, and refactoring. I learned how to identify and resolve compatibility issues, implement new components, and improve the website's overall performance and user experience. And lastly, with this project, I gained valuable experience with TypeScript.",
        link: "https://momkai.com",
        techStack: [
          {
            name: "TypeScript",
            image: "/images/skills/typescript.svg",
            alt: "The Typescript Logo",
            link: "https://www.typescriptlang.org/",
          },
          {
            name: "React",
            image: "/images/skills/react.svg",
            alt: "The React Logo",
            link: "https://reactjs.org/",
          },
          {
            name: "Next.js",
            image: "/images/skills/next.svg",
            alt: "The Next.js Logo",
            link: "https://nextjs.org/",
          },
          {
            name: "GraphQL",
            image: "/images/skills/graphql.svg",
            alt: "The GraphQL Logo",
            link: "https://graphql.org/",
          },
          {
            name: "Craft CMS",
            image: "/images/skills/craft.svg",
            alt: "The Craft Logo",
            link: "https://craftcms.com/",
          },
        ],
        collaborators: [
          {
            name: "Momkai",
            image: "/images/collaborators/momkai.svg",
            link: "https://momkai.com",
          },
        ],
      },
      {
        id: 3,
        title: "NFP",
        color: "#480E30",
        headerImage: "/images/projects/nfp/nfp-macbook.webp",
        headerImageAlt: "NFP  on a Macbook",
        imageSpotOne: "/images/projects/nfp/nfp-mobile.webp",
        imageSpotOneAlt: "NFP  on a mobile phone",
        imageSpotTwo: null,
        imageSpotTwoAlt: null,
        description:
          "NFP is a blog-like platform created for the global Food Systems Community. As a junior front-end developer at Momkai, I had the opportunity to work on the development of NFP, using technologies such as React, Next.js, CraftCMS, and GraphQL.",
        role: "In my role at Momkai, I was responsible for creating responsive new components that the authors of NFP can use in their articles. Additionally, I worked on the login logic, where I added a comment system with likes and report options to each article. besides this I also created various layouts for the new signup/login pages.",
        challenges:
          "One of the biggest challenges of creating NFP was working with the CraftCMS plugin 'Comments' by verbb. The designated backend developer and me experienced some issues with it, it wasn’t possible to flag a comment, since the developer of the plugin had created a mistake, which triggered the like action instead. but thankfully we mentioned this, and they were able to fix the issues shortly after.",
        lessons:
          "During my time working on NFP, I gained valuable experience in creating a login system with commenting functionality. This included implementing the ability to like and share articles, which I had not done before. I also gained experience working with various technologies, including React, Next.js, and GraphQL.",
        link: "https://nfpconnects.com",
        techStack: [
          {
            name: "TypeScript",
            image: "/images/skills/typescript.svg",
            alt: "The Typescript Logo",
            link: "https://www.typescriptlang.org/",
          },
          {
            name: "React",
            image: "/images/skills/react.svg",
            alt: "The React Logo",
            link: "https://reactjs.org/",
          },
          {
            name: "Next.js",
            image: "/images/skills/next.svg",
            alt: "The Next.js Logo",
            link: "https://nextjs.org/",
          },
          {
            name: "GraphQL",
            image: "/images/skills/graphql.svg",
            alt: "The GraphQL Logo",
            link: "https://graphql.org/",
          },
          {
            name: "Craft CMS",
            image: "/images/skills/craft.svg",
            alt: "The Craft Logo",
            link: "https://craftcms.com/",
          },
        ],
        collaborators: [
          {
            name: "Momkai",
            image: "/images/collaborators/momkai.svg",
            link: "https://momkai.com",
          },
        ],
      },
      {
        id: 4,
        title: "DEN",
        color: "#FFE3ED",
        headerImage: "/images/projects/den/den-macbook.webp",
        headerImageAlt: "DEN on a Macbook",
        imageSpotOne: "/images/projects/den/den-mobile.webp",
        imageSpotOneAlt: "DEN on a mobile phone",
        imageSpotTwo: null,
        imageSpotTwoAlt: null,
        description:
          "DEN is a platform created by Momkai, aimed at driving digital transformation for culture. Their goal is to help cultural institutions prepare for the future audience, by providing knowledge, tools, and training programs.",
        role: "As a Junior front-end developer at Momkai, I had the opportunity to work on the DEN project. My role was to translate the given designs into functional and responsive layouts, create filter overviews, and develop reusable components that DEN can use in their articles. I also added various queries in GraphQL, and this project was my first experience working with TypeScript.",
        challenges:
          "One of the main challenges I faced while creating DEN was designing the dynamic pattern that needed to grow infinitely in width. It took me around 10 different techniques to find the right fit for the component. Additionally, working with GraphQL and TypeScript was a learning curve, but it helped me to improve my knowledge and skills in these areas.",
        lessons:
          "From this project, I learned how to create reusable and responsive components, how to work with GraphQL queries, and how to integrate TypeScript into a project. I also improved on how I can collaborate with designers to ensure the final product looks exactly like the designs.",
        link: "https://den.nl",
        techStack: [
          {
            name: "TypeScript",
            image: "/images/skills/typescript.svg",
            alt: "The Typescript Logo",
            link: "https://www.typescriptlang.org/",
          },
          {
            name: "React",
            image: "/images/skills/react.svg",
            alt: "The React Logo",
            link: "https://reactjs.org/",
          },
          {
            name: "Next.js",
            image: "/images/skills/next.svg",
            alt: "The Next.js Logo",
            link: "https://nextjs.org/",
          },
          {
            name: "GraphQL",
            image: "/images/skills/graphql.svg",
            alt: "The GraphQL Logo",
            link: "https://graphql.org/",
          },
          {
            name: "Craft CMS",
            image: "/images/skills/craft.svg",
            alt: "The Craft Logo",
            link: "https://craftcms.com/",
          },
        ],
        collaborators: [
          {
            name: "Momkai",
            image: "/images/collaborators/momkai.svg",
            link: "https://momkai.com",
          },
        ],
      },
      {
        id: 5,
        title: "PraPla",
        color: "#BFEBAF",
        headerImage: "/images/projects/prapla/prapla-macbook.webp",
        headerImageAlt: "PraPla on a Macbook",
        imageSpotOne: "/images/projects/prapla/prapla-mobile.webp",
        imageSpotOneAlt: "PraPla on a mobile phone",
        imageSpotTwo: null,
        imageSpotTwoAlt: null,
        description:
          "PraPla is a language learning app that uses speech recognition and visual exercises to help children learn a new language in a fun and interactive way. The app is built using Nuxt.js and MongoDB, and features Cloudinary for image storage and Nuxt-auth for authentication.",
        role: "As a member of the development team for PraPla, I was responsible for creating the design and helping to write the front-end code for the app. My role involved working closely with the other team members to ensure that the app was intuitive, user-friendly, and visually appealing.",
        challenges:
          "One of the main challenges we faced in creating PraPla was figuring out how to store and display images for the visual exercises. We ultimately decided to use Cloudinary for image storage, which allowed us to keep the size of the app bundle small while still providing high-quality images. Another challenge we faced was integrating speech recognition into the app in a way that was both accurate and user-friendly.",
        lessons:
          "Through the process of creating PraPla, I gained a deeper understanding of front-end development using Nuxt.js, as well as experience working with NoSQL databases like MongoDB. I also learned about the importance of clear and concise code, as well as the value of good documentation and commenting.",
        link: "https://prapla.vercel.app",
        techStack: [
          {
            name: "Vue",
            image: "/images/skills/vue.svg",
            link: "https://vuejs.org/",
            alt: "The Typescript Logo",
          },
          {
            name: "Nuxt 2",
            image: "/images/skills/nuxt.svg",
            link: "https://nuxtjs.org/",
            alt: "The React Logo",
          },
          {
            name: "MongoDB",
            image: "/images/skills/mongo.svg",
            link: "https://www.mongodb.com/",
            alt: "The Next.js Logo",
          },
        ],
        collaborators: [
          {
            name: "Marvin Sernee",
            link: "https://github.com/MarvinMichel",
            image: "/images/collaborators/github.svg",
          },
          {
            name: "Roeland van Stee",
            link: "https://github.com/roelandvs",
            image: "/images/collaborators/github.svg",
          },
        ],
      },
      {
        id: 6,
        title: "Combinify",
        color: "#101010",
        headerImage: "/images/projects/combinify/combinify-macbook.webp",
        headerImageAlt: "Combinify on a Macbook",
        imageSpotOne: "/images/projects/combinify/combinify-visual.webp",
        imageSpotOneAlt: "Combinify on a mobile phone",
        imageSpotTwo: null,
        imageSpotTwoAlt: null,
        description:
          "Combinify is a playlist creating application that lets you create a combined playlist of multiple people's top songs. I created this project as part of my Minor Web development studies, and it allowed me to develop my skills in front-end and back-end development, as well as real-time web features.",
        role: "As the sole designer and developer of Combinify, my work began with a client-side application built on vanilla JavaScript. I transitioned it to a server-side application by incorporating Firebase, SocketIO, and Express. I integrated the Spotify API to connect users via SocketIO. Furthermore, I handled the visual aspect, designing the layout and creating animations with Adobe XD. Sadly, the design never made it to the frontend, although, hopefully in the future.",
        challenges:
          "One of the biggest challenges I faced with Combinify was managing the Spotify API and handling authentication flows. I had to experiment with different authorization methods and handle token refreshing to ensure smooth and secure access to users' Spotify data. Another challenge was implementing real-time features with SocketIO and Firebase. I had to design the application's architecture to handle real-time updates of the playlist and user interactions.",
        lessons:
          "Creating Combinify allowed me to develop my skills in front-end and back-end development, including:\n\n Applying software patterns to add structure to my code\n\n Retrieving and manipulating data, and dynamically converting it to HTML elements using templating\n\n Working with external APIs and handling authentication flows\n\n Managing state in my application and informing the user of state where necessary\n\n Implementing real-time web features with SocketIO and Firebase",
        link: "https://combinify-shoockz.b4a.run/",
        techStack: [
          {
            name: "Vue",
            image: "/images/skills/vue.svg",
            link: "https://vuejs.org/",
            alt: "The Typescript Logo",
          },
          {
            name: "Nuxt 2",
            image: "/images/skills/nuxt.svg",
            link: "https://nuxtjs.org/",
            alt: "The React Logo",
          },
          {
            name: "MongoDB",
            image: "/images/skills/mongo.svg",
            link: "https://www.mongodb.com/",
            alt: "The Next.js Logo",
          },
        ],
        collaborators: [
          {
            name: "Marvin Sernee",
            link: "https://github.com/MarvinMichel",
            image: "/images/collaborators/github.svg",
          },
          {
            name: "Roeland van Stee",
            link: "https://github.com/roelandvs",
            image: "/images/collaborators/github.svg",
          },
        ],
      },
    ],
  }),
  getters: {
    getProjects: (state) => state.projects,
    getProject: (state) => (title: string) =>
      state.projects.find(
        (project) => project.title.toLowerCase() === title.toLowerCase()
      ),
  },
  actions: {},
});

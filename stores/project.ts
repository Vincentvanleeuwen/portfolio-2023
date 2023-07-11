export const useProjectStore = definePiniaStore("project-store", {
  state: () => ({
    projects: [
      {
        id: 1,
        title: "KNVB Rinus",
        color: "#00AADB",
        description:
          "Rinus is an online platform created by the Royal Dutch Football Association (KNVB) to support coaches in the development of amateur football players.\n\n The platform provides coaches with a wealth of information and resources, such as training exercises, videos, and articles based on coaching philosophy and methodology. Rinus aims to promote a holistic approach to coaching, which focuses not only on technical and tactical skills but also on social, emotional, and cognitive development.\n\n The platform is named after Rinus Michels, a legendary Dutch football coach who revolutionised the game with his innovative tactics and philosophy.",
        role: "I was responsible for leading a team in researching, designing and developing Rinus match mode for the Rinus platform. I effectively utilized all resources at my disposal, including multiple UX designers for advice/reviews, UI designers for the visual aspect, and got support from the developers that have originally created Rinus from Momkai. I was also responsible for presenting project progress to stakeholders, including the KNVB.",
        challenges:
          "Creating Rinus match mode was a challenging project that presented a few obstacles to overcome. One of the main challenges was making sure coaches are able to use it while coaching a match. It should require minimal attention, since coaches always have to be focused on the game. Another challenge was managing project scope and balancing feasible and out-of-scope features to create a functional MVP. ",
        learnings:
          "Through this project, I learned the importance of researching and understanding the target audience thoroughly. I gained valuable experience in leading a team and realized that I am capable of generating good ideas and incorporating feedback effectively. I also learned how to identify and manage project scope, balancing feasible and out-of-scope features to create a functional MVP.",
        conclusion:
          "Overall, my work prioritized ethical considerations by ensuring the data privacy of young players. I possess strong skills in attention to detail and research and have been successful in leading a team.",
        link: "https://rinus.knvb.nl",
      },
      {
        id: 2,
        title: "Momkai",
        description: "This is a project",
      },
      {
        id: 3,
        title: "NFP",
        description: "This is a project",
      },
      {
        id: 4,
        title: "DEN",
        description: "This is a project",
      },
      {
        id: 5,
        title: "PraPla",
        description: "This is a project",
      },
      {
        id: 6,
        title: "Combinify",
        description: "This is a project",
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

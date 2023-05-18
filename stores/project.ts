export const useProjectStore = definePiniaStore("project-store", {
  state: () => ({
    projects: [
      {
        id: 1,
        title: "Rinus",
        description: "This is a project",
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
    getProject: (state) => (id: number) => state.projects[id],
  },
  actions: {},
});

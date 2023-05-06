
export const useProjectStore = definePiniaStore("project-store", {
  state: () => ({
    projects: [
      {
        id: 1,
        title: "Project 1",
        description: "This is a project",
      },
      {
        id: 1,
        title: "Project 1",
        description: "This is a project",
      },
      {
        id: 1,
        title: "Project 1",
        description: "This is a project",
      },
      {
        id: 1,
        title: "Project 1",
        description: "This is a project",
      },
      {
        id: 1,
        title: "Project 1",
        description: "This is a project",
      },
      {
        id: 1,
        title: "Project 1",
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
module.exports = [
  {
    key: 'myWork',
    name: 'My Work',
    icon: 'ios-home-outline',
    child: [
      {
        key: 'assignedToMe',
        name: 'Assigned to me',
        link: '/mywork/assigned-task',
        icon: 'ios-globe-outline',
        badge: '8',
      },
      {
        key: 'starred',
        name: 'Starred',
        link: '/mywork/starred',
        icon: 'ios-desktop-outline',
        badge: '2',
      },
    ],
  },
  {
    key: 'projects',
    name: 'Projects',
    icon: 'ios-appstore-outline',
    child: [
      {
        key: 'addProject',
        name: 'Add Project',
        link: '/projects/add-project',
        icon: 'ios-contact-outline',
      },
      {
        key: 'projectBoard',
        name: 'Project Board',
        link: '/projects/project-board',
        icon: 'ios-contact-outline',
      },
      {
        key: 'backlogView',
        name: 'Backlog View',
        link: '/projects/backlog',
        icon: 'ios-mail-outline',
      },
      {
        key: 'projectSettings',
        name: 'Project Settings',
        link: '/projects/project-settings',
        icon: 'ios-mail-outline',
      },
      {
        key: 'projectAccess',
        name: 'Project Access',
        link: '/projects/project-access',
        icon: 'ios-people-outline',
      },
      {
        key: 'sprintBoard',
        name: 'Sprint Board',
        link: '/projects/sprint-board',
        icon: 'ios-chatbubbles-outline',
      },
      {
        key: 'roadmap',
        name: 'Roadmap',
        link: '/projects/roadmap',
        icon: 'ios-chatbubbles-outline',
      },
      {
        key: 'release',
        name: 'Release',
        link: '/projects/release',
        icon: 'ios-apps-outline',
      },
    ],
  },
  {
    key: 'configurations',
    name: 'Configurations',
    icon: 'ios-paper-outline',
    child: [
      {
        key: 'editConfigurations',
        name: 'Edit Configuration',
        link: '/configurations/edit',
        icon: 'ios-person-outline',
      },
    ],
  },
  {
    key: 'people',
    name: 'People',
    icon: 'ios-grid-outline',
    child: [
      {
        key: 'manageTeam',
        name: 'Manage Team',
        link: '/people/manage-team',
        icon: 'add-circle-outline',
      },
    ],
  },
  {
    key: 'create',
    name: 'Create',
    icon: 'ios-add-circle-outline',
    child: [
      {
        key: 'createNewTicket',
        name: 'Create New Ticket',
        link: '/createTask',
        icon: 'ios-game-controller-a-outline',
      },
    ],
  },
];

module.exports = [
  {
    key: 'myWork',
    name: 'My Work',
    icon: 'ios-home-outline',
    child: [
      {
        key: 'assignedToMe',
        name: 'Assigned to me',
        link: '/',
        icon: 'ios-globe-outline',
        badge: '8',
      },
      {
        key: 'starred',
        name: 'Starred',
        link: '/landing-creative',
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
        link: '/app/pages/contact',
        icon: 'ios-contact-outline',
      },
      {
        key: 'projectBoard',
        name: 'Project Board',
        link: '/app/pages/contact',
        icon: 'ios-contact-outline',
      },
      {
        key: 'backlogView',
        name: 'Backlog View',
        link: '/app/pages/email',
        icon: 'ios-mail-outline',
      },
      {
        key: 'projectSettings',
        name: 'Project Settings',
        link: '/app/pages/email',
        icon: 'ios-mail-outline',
      },
      {
        key: 'projectAccess',
        name: 'Project Access',
        link: '/app/pages/timeline',
        icon: 'ios-people-outline',
      },
      {
        key: 'sprintBoard',
        name: 'Sprint Board',
        link: '/app/pages/chat',
        icon: 'ios-chatbubbles-outline',
      },
      {
        key: 'roadmap',
        name: 'Roadmap',
        link: '/app/pages/chat',
        icon: 'ios-chatbubbles-outline',
      },
      {
        key: 'release',
        name: 'Release',
        link: '/app/pages/ecommerce',
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
        key: 'projectConfiguration',
        name: 'Project Configuration',
        title: true,
      },
      {
        key: 'projectTemplate',
        name: 'Project Template',
        link: '/login',
        icon: 'ios-person-outline',
      },
      {
        key: 'projectType',
        name: 'Project Type',
        link: '/login',
        icon: 'ios-person-outline',
      },
      {
        key: 'projectCategory',
        name: 'Project Category',
        link: '/login-v2',
        icon: 'ios-contact-outline',
      },
      {
        key: 'issueConfiguration',
        name: 'Issue Configuration',
        title: true,
      },
      {
        key: 'issueTypes',
        name: 'Issue Types',
        link: '/login-v3',
        icon: 'ios-contact-outline',
      },
      {
        key: 'linkedIssueTypes',
        name: 'Linked Issue Types',
        link: '/lock-screen',
        icon: 'ios-lock-outline',
      },
      {
        key: 'issuePriority',
        name: 'Issue Priority',
        link: '/app/pages/blank-page',
        icon: 'ios-document-outline',
      },
      {
        key: 'issueVariables',
        name: 'Issue Variables',
        link: '/app/pages/pricing',
        icon: 'ios-archive-outline',
      },
      {
        key: 'ticketConfiguration',
        name: 'Ticket Configuration',
        title: true,
      },
      {
        key: 'ticketStageConfig',
        name: 'Ticket Stage Config',
        link: '/register',
        icon: 'ios-key-outline',
      },
      {
        key: 'ticketWorkflow',
        name: 'Ticket Workflow',
        link: '/register-v2',
        icon: 'ios-key-outline',
      },
      {
        key: 'otherConfiguration',
        name: 'Other Configuration',
        title: true,
      },
      {
        key: 'labels',
        name: 'Labels',
        link: '/reset-password',
        icon: 'ios-undo-outline',
      },

      {
        key: 'resolution',
        name: 'Resolution',
        link: '/lock-screen',
        icon: 'ios-lock-outline',
      },
      {
        key: 'components',
        name: 'Components',
        link: '/app/pages/user-profile',
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
        link: '/app/tables/basic-table',
        icon: 'ios-grid-outline',
      },
    ],
  },
  {
    key: 'create',
    name: 'Create',
    icon: 'ios-list-box-outline',
    child: [
      {
        key: 'createNewTicket',
        name: 'Create New Ticket',
        link: '/app/forms/buttons',
        icon: 'ios-game-controller-a-outline',
      },
    ],
  },
];

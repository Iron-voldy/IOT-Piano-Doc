export default {
  title: "IoT Piano Visualizer Documentation",
  description: "Interactive Piano Learning System Documentation",
  lang: 'en-US',
  cleanUrls: true,
  ignoreDeadLinks: true,
  
  themeConfig: {
    logo: "/logo.png",
    siteTitle: "IoT Piano Visualizer",
    search: {
      provider: "local",
    },
    // Navbar Links
    nav: [
      { text: "About", link: "/about" },
      { text: "Contact", link: "/contact" },
    ],
    // Social Icons
    socialLinks: [
      { icon: "github", link: "https://github.com/YourRepo" },
      { icon: "twitter", link: "https://twitter.com/YourHandle" },
      { icon: "instagram", link: "https://instagram.com/YourHandle" },
    ],
    // Sidebar
    sidebar: [
      {
        text: "Project Overview",
        collapsible: true,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getstarted" },
        ],
      },
      {
        text: "System Components",
        collapsible: true,
        items: [
          { text: "Hardware Components", link: "/hardwarecomponents" },
        ],
      },
      {
        text: "System Flow",
        collapsible: true,
        items: [
          { text: "Data Workflow", link: "/dataworkflow" },
          { text: "User Workflow", link: "/userworkflow" },
        ],
      },
      {
        text: "System Architecture",
        collapsible: true,
        items: [
          { text: "Hardware Integration", link: "/hardwareintegration" },
          { text: "Wireframes", link: "/wireframes" },
          { text: "Database Design", link: "/databasedesign" },
          { text: "Use Case Diagrams", link: "/usecasediagrams" },
        ],
      },
      {
        text: "Code Implementation",
        collapsible: true,
        items: [
          { text: "Arduino Code", link: "/arduinocode" },
          { text: "PHP Scripts", link: "/phpscripts" },
          { text: "Frontend UI", link: "/frontendui" },
        ],
      },
      {
        text: "Testing",
        collapsible: true,
        items: [
          { text: "Test Cases", link: "/testcases" },
          { text: "Debugging", link: "/debugging" },
        ],
      },
      {
        text: "Conclusion",
        collapsible: true,
        items: [
          { text: "Conclusion", link: "/conclusion" },
        ],
      }
    ],
    // Footer Settings
    docFooter: {
      prev: false,
      next: true,
    },
  
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024 IoT Piano Visualizer",
    },
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
    // Mobile Config
    returnToTopLabel: 'Go to Top',
    sidebarMenuLabel: 'Menu',
  },
};

export default {
  title: "IoT Piano Visualizer Documentation",
  description: "Interactive Piano Learning with Real-Time LED Feedback Documentation",
  lang: 'en-US',
  cleanUrls: true,
  // If this is disabled, when building it it will give deadlink errors if your markdown has the wrong links
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
     // { text: "Guide", link: "/guide" },
    ],
    // Social Icons
    socialLinks: [
      { icon: "github", link: "https://github.com/iron-voldy" },
      { icon: "twitter", link: "https://twitter.com/iron_voldy" },
    ],
    // Sidebar Configuration
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
          { text: "All Components", link: "/Components" },
        ],
      },
      {
        text: "System Flow",
        collapsible: true,
        items: [
          { text: "All Workflows", link: "/workflow" },
        ],
      },
      {
        text: "System Architecture",
        collapsible: true,
        items: [
          { text: "Hardware Integration", link: "/hardwareintegration" },
          { text: "Wireframes", link: "/wireframes" },
          { text: "Database Design", link: "/databasedesign" },
          { text: "UML Diagrams", link: "/usecasediagrams" },
        ],
      },
      {
        text: "Code Implementation",
        collapsible: true,
        items: [
          { text: "Arduino Code", link: "/arduinocode" },
          { text: "PHP Script", link: "/phpscript" },
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
    // you can disable the previous and next page here
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
    // Mobile Config only
    returnToTopLabel: 'Go to Top',
    sidebarMenuLabel: 'Menu',
  },
};

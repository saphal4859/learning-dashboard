// src/data/sidebarLinks.js

const sidebarLinks = [
  {
    section: "Spring security",
    icon: "🔐",
    items: [
      { label: "Basics", path: "/spring-security/basics" },
      { label: "Default Authentication", path: "/spring-security/default-authentication" },
      { label: "Basic Authentication", path: "/spring-security/basic-auth" },
      { label: "In memory and JDBC Authentication", path: "/spring-security/jdbc-auth" },
      { label: "Hashing and Password Encoder", path: "/spring-security/password-encoder" },
    ]
  },
  {
    section: "Microservices",
    icon: "🧩",
    items: [
      { label: "Overview", path: "/microservices/overview" },
      // add more microservices links here
    ]
  }
];

export default sidebarLinks;

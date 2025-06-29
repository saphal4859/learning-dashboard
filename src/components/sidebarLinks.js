// src/data/sidebarLinks.js

const sidebarLinks = [
  {
    category: "Spring security",  // ✅ changed from 'section'
    icon: "🔐",
    items: [
      {
        name: "Basics",  // ✅ changed from 'label'
        url: "https://doc.clickup.com/90131482853/d/h/2ky42j75-533/ca07030e2429cf0"  // ✅ full ClickUp URL
      },
      {
        name: "Default Authentication",
        url: "https://doc.clickup.com/90131482853/d/h/2ky42j75-553/0a739ac5293d50c"
      },
      {
        name: "Basic Authentication",
        url: "https://doc.clickup.com/90131482853/d/h/2ky42j75-593/6b62f047d3d0067"
      },
      {
        name: "In memory and JDBC Authentication",
        url: "https://doc.clickup.com/90131482853/d/h/2ky42j75-613/1cd0b851d1eaf05"
      },
      {
        name: "Hashing and Password Encoder",
        url: "https://doc.clickup.com/90131482853/d/h/2ky42j75-633/ec4b1ec9b2e8ca1"
      }
    ]
  },
  {
    category: "Microservices",
    icon: "🧩",
    items: [
      {
        name: "Overview",
        url: "https://doc.clickup.com/90131482853/d/h/2ky42j75-653/microservice-overview"
      }
    ]
  }
];

export default sidebarLinks;

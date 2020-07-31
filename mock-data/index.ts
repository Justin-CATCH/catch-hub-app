export const MOCK_LIBRARY_DATA = [
  {
    name: "Brown Bags",
    children: [
      {
        name: "Introducing React Native",
        url: "https://www.youtube.com/embed/KVZ-P-ZI6W4",
        type: "video",
      },
      {
        name: "Firebase - Back to the Basic",
        url: "https://www.youtube.com/embed/q5J5ho7YUhA",
        type: "video",
      },
      {
        name: "Flutter for the JS Developer",
        type: "video",
        url: "https://www.youtube.com/embed/q5J5ho7YUhA",
      },
    ],
    icon: "folder",
  },
  {
    name: "Frontend",
    icon: "folder",
    children: [
      {
        icon: "file",
        name: "component-library.md",
        url:
          "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app/files/docs/topics/frontend/component-library.md?r=raw",
      },
      {
        icon: "file",
        name: "design-system.md",
        url:
          "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app/files/docs/topics/frontend/design-system.md?r=raw",
      },
      {
        icon: "file",
        name: "general-architecture.md",
        url:
          "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app/files/docs/topics/frontend/general-architecture.md?r=raw",
      },
      {
        icon: "file",
        name: "monorepo.md",
        url:
          "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app/files/docs/topics/frontend/monorepo.md?r=raw",
      },
      {
        icon: "file",
        name: "tech-stack.md",
        url:
          "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app/files/docs/topics/frontend/tech-stack.md?r=raw",
      },
      {
        icon: "file",
        name: "testing-strategies.md",
        url:
          "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app/files/docs/topics/frontend/testing-strategies.md?r=raw",
      },
    ],
  },
  {
    name: "Backend",
    icon: "folder",
    children: [
      {
        icon: "file",
        name: "coding-style.md",
        url:
          "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app/files/docs/topics/backend/coding-style.md?r=raw",
      },
      {
        icon: "file",
        name: "exceptions.md",
        url:
          "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app/files/docs/topics/backend/exceptions.md?r=raw",
      },
      {
        icon: "file",
        name: "schema-design.md",
        url:
          "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app/files/docs/topics/backend/schema-design.md?r=raw",
      },
    ],
  },
  {
    name: "Microservices",
    icon: "folder",
    children: [
      {
        icon: "file",
        name: "structure.md",
        url:
          "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app/files/docs/topics/microservices/structure.md?r=raw",
      },
    ],
  },
  {
    name: "Monitoring",
    icon: "folder",
    children: [
      {
        icon: "file",
        name: "dashboards.md",
        url:
          "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app/files/docs/topics/monitoring/dashboards.md?r=raw",
      },
      {
        icon: "file",
        name: "monolog.md",
        url:
          "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app/files/docs/topics/monitoring/monolog.md?r=raw",
      },
      {
        icon: "file",
        name: "rollbar.md",
        url:
          "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app/files/docs/topics/monitoring/rollbar.md?r=raw",
      },
      {
        icon: "file",
        name: "scaylr.md",
        url:
          "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app/files/docs/topics/monitoring/scaylr.md?r=raw",
      },
    ],
  },
  {
    name: "Security",
    icon: "folder",
    children: [
      {
        icon: "file",
        name: "security-basics-1.md",
        url:
          "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app/files/docs/topics/security/security-basics-1.md?r=raw",
      },
      {
        icon: "file",
        name: "security-basics-2.md",
        url:
          "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app/files/docs/topics/security/security-basics-2.md?r=raw",
      },
    ],
  },
];

export const ONBOARDING_MOCK_DATA = {
  backend: {
    title: "Backend",
    days: [
      {
        id: 1,
        description: `Welcome to your first day at Catch! We hope that this will be both a pleasant and exciting place to work. Today we'll focus on meeting everyone and getting your computer ready:`,
        tasks: [
          { id: 1, text: "Set up your local machine" },
          { id: 2, text: "Meet some the people you will be working with" },
          {
            id: 3,
            text:
              "Check out the cafe and challenge someone to a game of table tennis",
          },
        ],
      },
      {
        id: 2,
        description: `Back for more, huh? Today it's time to:`,
        tasks: [
          { id: 1, text: "Learn about Web and Unity" },
          { id: 2, text: "Learn about RBT and Absinthe" },
          { id: 3, text: "Set up your Web and Unity environments" },
        ],
      },
    ],
  },

  frontend: {
    title: "Frontend",
    days: [
      {
        id: 1,
        description:
          "Welcome to your first day at Catch! We hope that this will be both a pleasant and exciting place to work. Today you will:",
        tasks: [
          {
            text:
              "Get the morning coffee, checkout our cafe and office as well as a quick chat with your line manager.",
          },
          {
            text:
              'Meet your "onboarding buddy", the goto person that will join you during your onboarding journey.',
          },
          { text: "Meet some the people you will be working with." },
          { text: "Get your free Club Catch account." },
          { text: "Set up your OneLogin, Slack, JIRA... etc accounts." },
          { text: "Familiarise yourself with Catch policies." },
        ],
      },
      {
        id: 2,
        description:
          "Today you will start on your engineering journey at Catch:",
        tasks: [
          {
            text: "Get a brief understanding about Catch general architecture",
          },
          { text: "Set up your local machine" },
          { text: "Learn about our Git, commit and branching strategy" },
        ],
      },
      {
        id: 3,
        description:
          "Today you will deep dive on how we do frontend development at Catch.",
        tasks: [
          { text: "Learn about our frontend architecture" },
          { text: "Learn about our frontend tech stack" },
          { text: "Learn about our testing strategies" },
          { text: "Learn about our Design System" },
          { text: "Learn about our component library" },
        ],
      },
      {
        id: 4,
        description: `Today, let's start seeing the code and making Catch frontend accessible on your local machine 💪.`,
        tasks: [
          { text: "Set up your frontend monorepo" },
          { text: "Learn about Web and Unity" },
          { text: "Learn about RBT and Absinthe" },
          { text: "Set up your Web and Unity environments" },
        ],
      },

      {
        id: 5,
        description: `'Let's get your hand dirty today.`,
        tasks: [
          {
            text:
              "Tackle your first ticket, on your own or pairing with your onboarding buddy",
          },
          { text: "Review one Pull Request" },
        ],
        conclusion: `Congrats, you have completed your first week at Catch. If you are able to finish all of your tasks, you are a champion, please see Justin to claim your beer/coffee (preferably not both 😝).`,
      },
    ],
  },
};

// export default function LibraryScreen() {
//   const [data, setData] = React.useState("");
//   const [files, setFiles] = React.useState([]);

//   React.useEffect(() => {
//     fetch(
//       "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app"
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         const result = data.branch.files.filter((file) =>
//           file.path.includes("topics/security")
//         );

//         setFiles(result);
//       });
//   }, []);

//   if (data) {
//     return (
//       <ScrollView>
//         <View style={styles.container}>
//           <View>
//             <Button
//               onPress={() => {
//                 setData(null);
//               }}
//               title="Back"
//             />
//           </View>
//           <Markdown>{data}</Markdown>
//         </View>
//       </ScrollView>
//     );
//   }

//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <Text>
//           {JSON.stringify(
//             files.map((file) => ({
//               name: file.name,
//               url: file._links.content,
//             }))
//           )}
//         </Text>
//         {/* {files.map((file) => (
//           <View key={file.path}>
//             <Text
//               onPress={() => {
//                 console.log("click");
//                 fetch(file._links.content)
//                   .then((res) => res.text())
//                   .then((md) => {
//                     setData(md);
//                   });
//               }}
//             >
//             </Text>
//           </View>
//         ))} */}
//       </View>
//     </ScrollView>
//   );
// }

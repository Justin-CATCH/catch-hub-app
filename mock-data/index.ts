export const MOCK_LIBRARY_DATA = [
  {
    name: "Brown Bags",
    children: [],
  },
  {
    name: "Frontend",
    children: [
      {
        name: "component-library.md",
        url:
          "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app/files/docs/topics/frontend/component-library.md?r=raw",
      },
      {
        name: "design-system.md",
        url:
          "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app/files/docs/topics/frontend/design-system.md?r=raw",
      },
      {
        name: "general-architecture.md",
        url:
          "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app/files/docs/topics/frontend/general-architecture.md?r=raw",
      },
      {
        name: "monorepo.md",
        url:
          "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app/files/docs/topics/frontend/monorepo.md?r=raw",
      },
      {
        name: "tech-stack.md",
        url:
          "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app/files/docs/topics/frontend/tech-stack.md?r=raw",
      },
      {
        name: "testing-strategies.md",
        url:
          "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app/files/docs/topics/frontend/testing-strategies.md?r=raw",
      },
    ],
  },
  {
    name: "Backend",
    children: [
      {
        name: "coding-style.md",
        url:
          "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app/files/docs/topics/backend/coding-style.md?r=raw",
      },
      {
        name: "exceptions.md",
        url:
          "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app/files/docs/topics/backend/exceptions.md?r=raw",
      },
      {
        name: "schema-design.md",
        url:
          "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app/files/docs/topics/backend/schema-design.md?r=raw",
      },
    ],
  },
  {
    name: "Microservices",
    children: [
      {
        name: "structure.md",
        url:
          "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app/files/docs/topics/microservices/structure.md?r=raw",
      },
    ],
  },
  {
    name: "Monitoring",
    children: [
      {
        name: "dashboards.md",
        url:
          "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app/files/docs/topics/monitoring/dashboards.md?r=raw",
      },
      {
        name: "monolog.md",
        url:
          "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app/files/docs/topics/monitoring/monolog.md?r=raw",
      },
      {
        name: "rollbar.md",
        url:
          "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app/files/docs/topics/monitoring/rollbar.md?r=raw",
      },
      {
        name: "scaylr.md",
        url:
          "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app/files/docs/topics/monitoring/scaylr.md?r=raw",
      },
    ],
  },
  {
    name: "Security",
    children: [
      {
        name: "security-basics-1.md",
        url:
          "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app/files/docs/topics/security/security-basics-1.md?r=raw",
      },
      {
        name: "security-basics-2.md",
        url:
          "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app/files/docs/topics/security/security-basics-2.md?r=raw",
      },
    ],
  },
];

export const ONBOARDING_MOCK_DATA = {
  frontend: {
    title: "Frontend",

  }
}

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
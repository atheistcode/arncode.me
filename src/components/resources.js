// import React from "react"
// import { graphql } from "gatsby"
// import styled from "styled-components"

// import TopLevelItem from "../components/resources-tree/top-level-item"
// import LevelItem from "../components/resources-tree/level-item"

// const Section = styled.section`
//   max-width: 150rem;
//   margin: auto;
// `
// const Title = styled.h2`
//   margin-top: 4rem;
//   margin-bottom: 4rem;
//   text-align: center;
//   white-space: pre-wrap;
// `
// const Tree = styled.div``
// const Branch = styled.div`
//   margin-bottom: 2rem;
// `
// const HorizontalGrid = styled.ul`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(4rem, auto));
//   justify-content: start;
//   font-size: ${props => props.theme.fontSize.sm};
// `
// const HorizontalFlex = styled.ul`
//   display: flex;
// `
// const VerticalFlex = styled.ul`
//   display: flex;
//   flex-direction: column;
// `

// export default function Resources({ data }) {
//   return (
//     <Section>
//       <Title>
//         Useful Resources For Web Developers {"\n"} &amp; A Simple Roadmap!
//       </Title>
//       <Tree>
//         {data.allResourcesYaml.edges
//           .map(({ node }) => node.level_1)
//           .map(([item], index) => (
//             <Branch key={index}>
//               <TopLevelItem name={item.name} hrefs={item.hrefs} />
//               {item.level_2 ? (
//                 <HorizontalGrid>
//                   {item.level_2.map((item, index) => (
//                     <VerticalFlex key={index}>
//                       <LevelItem
//                         name={item.name}
//                         hrefs={item.hrefs ? item.hrefs : ""}
//                       />
//                       {item.level_3 ? (
//                         <VerticalFlex>
//                           {item.level_3.map((item, index) => (
//                             <HorizontalFlex key={index}>
//                               <LevelItem
//                                 name={item.name}
//                                 hrefs={item.hrefs ? item.hrefs : ""}
//                               />

//                               {item.level_4 ? (
//                                 <HorizontalFlex>
//                                   {item.level_4.map((item, index) => (
//                                     <LevelItem
//                                       name={item.name}
//                                       hrefs={item.hrefs ? item.hrefs : ""}
//                                       key={index}
//                                     />
//                                   ))}
//                                 </HorizontalFlex>
//                               ) : null}
//                             </HorizontalFlex>
//                           ))}
//                         </VerticalFlex>
//                       ) : null}
//                     </VerticalFlex>
//                   ))}
//                 </HorizontalGrid>
//               ) : null}
//             </Branch>
//           ))}
//       </Tree>
//     </Section>
//   )
// }

// export const query = graphql`
//   query MyQuery {
//     allResourcesYaml {
//       edges {
//         node {
//           level_1 {
//             name
//             hrefs
//             level_2 {
//               name
//               hrefs
//               level_3 {
//                 name
//                 hrefs
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

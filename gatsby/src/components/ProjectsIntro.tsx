import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useEffect, useRef, useState } from "react";
// @ts-ignore
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { media } from "../utils/mediaQueries";

const ProjectsIntroStyles = styled.section`
  overflow: hidden;
  position: relative;
  height: 44rem;

  .projects-container {
    display: grid;
    /* grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr)); */
    grid-template-columns: repeat(3, minmax(0, 1fr));
    /* display: flex;
    flex-wrap: wrap; */
    justify-content: center;

    gap: 1rem;

    width: 120%;
    transition: ${({ activeRow }: { activeRow: string }) =>
      parseInt(activeRow) === 0 ? "none" : "all 0.3s ease-in"};
    transform: translate(
      -10%,
      ${({ height, activeRow }: any) =>
        `calc(((-${height + "px"} - 0.6rem) * ${activeRow}))`}
    );

    ${media.laptop} {
      gap: 2rem;

      grid-template-columns: repeat(5, minmax(0, 1fr));
      transform: translate(
        -10%,
        calc(
          -10% * ${({ activeRow }: { activeRow: string }) => activeRow} - 2rem
        )
      );
    }

    ${media.desktop} {
      gap: 3rem;

      width: 110%;
      transform: translate(
        -5%,
        calc(
          -10% * ${({ activeRow }: { activeRow: string }) => activeRow} - 3rem
        )
      );
    }

    .filter {
      background: rgba(255, 255, 255, 0.8);

      position: absolute;
      top: 0;
      left: 0;

      height: 100%;
      width: 120%;

      z-index: 1000;
    }

    .card-container {
      width: 100%;
    }
  }

  .cta-container {
    text-align: center;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    z-index: 10000;
  }
`;

export default function ProjectsIntro() {
  const { projects } = useStaticQuery(graphql`
    query GetProjectCarousel {
      projects: allSanityProject {
        nodes {
          id
          name
          slug {
            current
          }
          excerpt
          featuredImage {
            asset {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);
  const [height, setHeight] = useState();
  const [activeRow, setActiveRow] = useState(0);

  const timeoutRef = useRef(null);
  const ref = useRef(null);

  useEffect(() => {
    // @ts-ignore
    setHeight(ref.current.offsetHeight);
  });

  const breakpoints = useBreakpoint();
  const numPerRow = breakpoints.xs || breakpoints.sm ? 3 : 5;

  // make sure the projects array contains enough to have full rows only
  const cleanProjects = projects.nodes.slice(
    0,
    numPerRow * Math.floor(projects.nodes.length / numPerRow)
  );

  // create the new array with buffers on the ends
  const firstRowCopy = cleanProjects.slice(0, numPerRow);
  const lastRowCopy = cleanProjects.slice(
    cleanProjects.length - numPerRow,
    cleanProjects.length
  );
  // we need to make this expanded array for the illusion that the carousel is infinite
  const finalProjects = [...cleanProjects, ...cleanProjects, ...firstRowCopy];
  const totalRows = Math.ceil(cleanProjects.length / numPerRow);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    // @ts-ignore
    timeoutRef.current = setTimeout(
      () =>
        setActiveRow(activeRow =>
          activeRow === totalRows ? 0 : activeRow + 1
        ),
      1000
    );

    return () => {
      resetTimeout();
    };
  }, [activeRow]);

  return (
    <ProjectsIntroStyles
      // @ts-ignore
      activeRow={activeRow.toString()}
      // @ts-ignore
      totalRows={totalRows}
      // @ts-ignore
      height={height}>
      <div className="projects-container">
        <div className="filter" />
        {finalProjects.map((project: any, idx: number) => (
          <div key={idx} ref={ref} className="card-container">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <div className="cta-container">
        <h1>I love to build.</h1>
        <Link to="/projects" className="red-link-btn">
          See all projects 👀
        </Link>
      </div>
    </ProjectsIntroStyles>
  );
}

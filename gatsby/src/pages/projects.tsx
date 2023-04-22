import { graphql, Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import FullProjectCard from "../components/FullProjectCard";
import Icon from "../components/Icon";
import Tag from "../components/Tag";

const ProjectsPageStyles = styled.section`
  display: grid;
  gap: 2.5rem;

  padding: 0 var(--gutter) 4rem var(--gutter);

  .projects-header {
    text-align: center;

    h5 {
      color: var(--lightText);
      font-size: 1rem;
      line-height: 1.5rem;
      letter-spacing: 0.5px;
      font-weight: 400;
    }
  }

  .search-form-container {
    position: relative;

    .search-bar {
      background: var(--white);
      border: 1px solid var(--inputBorder);
      border-radius: var(--radius);
      font-size: 0.875rem;
      line-height: 1.1875rem;
      letter-spacing: -0.25px;

      width: 100%;
      padding: 1rem 1rem 1rem 2.75rem;

      &::placeholder {
        color: var(--veryLightText);
      }
    }

    svg {
      fill: transparent;
      stroke: var(--lightText);

      position: absolute;
      top: 50%;
      left: 1rem;
      transform: translateY(-50%);
    }
  }

  .tags-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;

    .active {
      background: var(--primary-500);
      color: var(--white);
    }
  }

  .projects-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 2rem;
  }
`;

export default function ProjectsPage({ data }: any) {
  const tags = data.tags.nodes;
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const [projects, setProjects] = React.useState<string[]>(data.projects.nodes);

  function filterProjectsByTags(selectedTags: string[], project: any) {
    return selectedTags.every(function (tag) {
      return project.tags.some(function (projectTag: any) {
        return projectTag.name === tag;
      });
    });
  }

  function handleTagSelection(e: any) {
    const tag = e.currentTarget.innerText;

    if (selectedTags.includes(tag)) {
      const updatedTags = selectedTags.filter(selectTag => selectTag !== tag);
      setSelectedTags(updatedTags);
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  }

  React.useEffect(() => {
    const updatedProjects = data.projects.nodes.filter((project: any) => {
      return filterProjectsByTags(selectedTags, project);
    });
    setProjects(updatedProjects);
  }, [selectedTags]);

  console.log({ projects });

  return (
    <ProjectsPageStyles>
      <div className="projects-header">
        <h1>Projects</h1>
        <h5>
          Here are a collection of projects I built. There is a Github link and
          a Live link for each project so you can explore them further.
        </h5>
      </div>

      <form className="search-form-container">
        <Icon name="Search" size="18" />
        <input
          type="text"
          placeholder="Search for a project, language, or technology"
          className="search-bar"
        />
      </form>

      <div className="tags-container">
        {tags.map((tag: any) => (
          <div onClick={handleTagSelection}>
            <Tag name={tag.name} active={selectedTags.includes(tag.name)} />
          </div>
        ))}
      </div>

      <div className="projects-container">
        {projects.map((project: any) => {
          return <FullProjectCard project={project} key={project.id} />;
        })}
      </div>
    </ProjectsPageStyles>
  );
}

export const query = graphql`
  query GetTaggedProjects {
    projects: allSanityProject {
      nodes {
        name
        slug {
          current
        }
        liveLink
        githubLink
        featuredImage {
          asset {
            gatsbyImageData
          }
        }
        excerpt
        tags {
          id
          name
        }
      }
    }

    tags: allSanityTag {
      nodes {
        id
        name
        slug {
          current
        }
      }
    }
  }
`;

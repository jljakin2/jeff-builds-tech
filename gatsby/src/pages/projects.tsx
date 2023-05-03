import { graphql, Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import FullProjectCard from "../components/FullProjectCard";
import Icon from "../components/Icon";
import Tag from "../components/Tag";
import SEO from "../components/SEO";
import EmptySearchState from "../components/EmptySearchState";
import { media } from "../utils/mediaQueries";

const ProjectsPageStyles = styled.section`
  display: grid;
  gap: 2.5rem;

  padding: 0 var(--gutter) 4rem var(--gutter);

  ${media.tablet} {
    padding: 0 var(--gutter) 8rem var(--gutter);
  }

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

    button {
      border: none;
      background: transparent;
    }

    .active {
      background: var(--primary-500);
      color: var(--white);
    }
  }

  .projects-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    column-gap: 2rem;
    row-gap: 3rem;
    justify-content: center;
    justify-items: center;

    ${media.tablet} {
      margin-top: 2rem;
    }
  }
`;

interface Project {
  name: string;
  slug: {
    current: string;
  };
  liveLink: string;
  githubLink: string;
  featuredImage: {
    asset: {
      gatsbyImageData: any;
    };
  };
  excerpt: string;
  tags: {
    id: string;
    name: string;
  }[];
}

interface TagData {
  id: string;
  name: string;
  slug: {
    current: string;
  };
}

interface QueryData {
  projects: {
    nodes: Project[];
  };
  tags: {
    nodes: TagData[];
  };
}

export default function ProjectsPage({ data }: any) {
  const tags = data.tags.nodes;
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const [projects, setProjects] = React.useState<Project[]>(
    data.projects.nodes
  );
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  console.log({ projects });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const filterProjects = React.useCallback(() => {
    const filteredProjects = data.projects.nodes.filter((project: any) => {
      const nameMatch = project.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const tagsMatch = project.tags.some((tag: string) =>
        // @ts-expect-error
        tag.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      const selectedTagsMatch = filterProjectsByTags(selectedTags, project);

      return (nameMatch || tagsMatch) && selectedTagsMatch;
    });

    setProjects(filteredProjects);
  }, [searchTerm, selectedTags, data.projects.nodes]);

  React.useEffect(() => {
    filterProjects();
  }, [searchTerm, selectedTags, filterProjects]);

  function filterProjectsByTags(selectedTags: string[], project: Project) {
    if (selectedTags.length === 0) return true;
    return selectedTags.every(tag =>
      project.tags.some(projectTag => projectTag.name === tag)
    );
  }

  // function handleTagSelection(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  //   const tag = (e.currentTarget as HTMLElement).innerText;

  //   if (selectedTags.includes(tag)) {
  //     const updatedTags = selectedTags.filter(selectTag => selectTag !== tag);
  //     setSelectedTags(updatedTags);
  //   } else {
  //     setSelectedTags([...selectedTags, tag]);
  //   }
  // }

  function handleTagSelection(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const tag = (e.currentTarget as HTMLElement).innerText;

    setSelectedTags(prevSelectedTags => {
      let updatedTags: any;
      if (prevSelectedTags.includes(tag)) {
        updatedTags = prevSelectedTags.filter(selectTag => selectTag !== tag);
      } else {
        updatedTags = [...prevSelectedTags, tag];
      }

      // Run filtering logic with the updated selected tags
      const filteredProjects = data.projects.nodes.filter((project: any) => {
        const nameMatch = project.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const tagsMatch = project.tags.some((tag: string) =>
          // @ts-expect-error
          tag.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        const selectedTagsMatch = filterProjectsByTags(updatedTags, project);

        return (nameMatch || tagsMatch) && selectedTagsMatch;
      });

      setProjects(filteredProjects);

      return updatedTags;
    });
  }

  function handleEmptySearch() {
    setSearchTerm("");
  }

  return (
    <>
      <SEO title="Projects" />

      <ProjectsPageStyles>
        <div className="projects-header">
          <h1>Projects</h1>
          <h5>
            Here are a collection of projects I built. There is a Github link
            and a Live link for each project so you can explore them further.
          </h5>
        </div>

        <form
          className="search-form-container"
          onSubmit={e => e.preventDefault()}>
          <Icon name="Search" size="18" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search for a project, language, or technology"
            className="search-bar"
          />
        </form>

        <div className="tags-container">
          {tags.map((tag: any) => (
            // @ts-ignore
            <button onClick={handleTagSelection} type="button">
              <Tag name={tag.name} active={selectedTags.includes(tag.name)} />
            </button>
          ))}
        </div>

        <div className="projects-container">
          {projects.length === 0 ? (
            <EmptySearchState handleEmptySearch={handleEmptySearch} />
          ) : (
            projects.map((project: any) => {
              return <FullProjectCard project={project} key={project.id} />;
            })
          )}
        </div>
      </ProjectsPageStyles>
    </>
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
            gatsbyImageData(placeholder: BLURRED)
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

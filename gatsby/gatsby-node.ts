import path from "path";

async function turnCategoryPostsIntoPages({ graphql, actions }: any) {
  console.log("CREATING CATEGORIES...");
  const PostsListsTemplate = path.resolve("./src/templates/PostsList.tsx");
  const { data } = await graphql(`
    query GetCategories {
      categories: allSanityCategory {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  data.categories.nodes.forEach((category: any) => {
    actions.createPage({
      path: `categories/${category.slug.current}`,
      component: PostsListsTemplate,
      context: {
        slug: category.slug.current,
      },
    });
  });
  console.log("CATEGORIES CREATED!");
}

async function turnPostsIntoPages({ graphql, actions }: any) {
  console.log("CREATING POSTS...");
  const PostTemplate = path.resolve("./src/templates/Post.tsx");
  const { data } = await graphql(`
    query GetPosts {
      posts: allSanityPost {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  data.posts.nodes.forEach((post: any) => {
    actions.createPage({
      path: `blog/post/${post.slug.current}`,
      component: PostTemplate,
      context: {
        slug: post.slug.current,
      },
    });
  });
  console.log("POSTS CREATED!");
}

async function turnProjectsIntoPages({ graphql, actions }: any) {
  console.log("CREATING PROJECTS...");
  const ProjectTemplate = path.resolve("./src/templates/Project.tsx");
  const { data } = await graphql(`
    query GetProjects {
      projects: allSanityProject {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  data.projects.nodes.forEach((project: any) => {
    actions.createPage({
      path: `project/${project.slug.current}`,
      component: ProjectTemplate,
      context: {
        slug: project.slug.current,
      },
    });
  });
  console.log("PROJECTS CREATED!");
}

export async function createPages(params: any) {
  await Promise.all([
    turnCategoryPostsIntoPages(params),
    turnPostsIntoPages(params),
    turnProjectsIntoPages(params),
  ]);
}

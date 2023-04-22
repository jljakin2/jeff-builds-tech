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

async function turnPostsIntoPages({
  graphql,
  actions,
}: {
  graphql: any;
  actions: any;
}) {
  console.log("CREATING POSTS...");
  // 1) Query all posts
  const { data } = await graphql(`
    query GetPosts {
      posts: allSanityPost {
        totalCount
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  // 2. Turn each post into a page
  data.posts.nodes.forEach((post: any) => {
    actions.createPage({
      path: `blog/post/${post.slug.current}`,
      component: path.resolve("./src/templates/Post.tsx"),
      context: {
        slug: post.slug.current,
      },
    });
  });

  // 3. Figure out how many pages there are based on how many posts there are, and how many per page
  // @ts-ignore
  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
  const pageCount = Math.ceil(data.posts.totalCount / pageSize);
  console.log(
    `There are ${data.posts.totalCount} total posts. And we have ${pageCount} pages with ${pageSize} per page`
  );

  // 4. Loop from 1 to n and create the pages for them
  Array.from({ length: pageCount }).forEach((_, i) => {
    console.log(`Creating page ${i}`);
    actions.createPage({
      path: `/blog/${i + 1}`,
      component: path.resolve("./src/pages/blog.tsx"),
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
}

// async function turnPostsIntoPages({ graphql, actions }: any) {
//   console.log("CREATING POSTS...");
//   const PostTemplate = path.resolve("./src/templates/Post.tsx");
//   const { data } = await graphql(`
//     query GetPosts {
//       posts: allSanityPost {
//         nodes {
//           slug {
//             current
//           }
//         }
//       }
//     }
//   `);

//   data.posts.nodes.forEach((post: any) => {
//     actions.createPage({
//       path: `blog/post/${post.slug.current}`,
//       component: PostTemplate,
//       context: {
//         slug: post.slug.current,
//       },
//     });
//   });
//   console.log("POSTS CREATED!");
// }

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
    // turnPostBrowsingIntoPages(params),
  ]);
}

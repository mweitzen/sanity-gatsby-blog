export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "63894da6c8d27a7f3ed206af",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-3qkhcmyz",
                  apiId: "5288a560-8b2f-4be3-b95b-c440487bc093",
                },
                {
                  buildHookId: "63894da6cee49b7d6eb569ca",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-7ir3b7tm",
                  apiId: "7828985d-4f7d-4f91-abe3-54f10aed79d2",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/mweitzen/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-7ir3b7tm.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

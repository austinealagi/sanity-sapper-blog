export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e7119df844c7aa95d9f6a46',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-pas4xfre',
                  apiId: '6bce0c04-f50d-493d-9bb8-08515874d2bc'
                },
                {
                  buildHookId: '5e7119e0fba0ea0568844ed1',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-xubxpp81',
                  apiId: '0f1fde2f-7803-4645-bb49-73efa0fcdb4a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/austinealagi/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-xubxpp81.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

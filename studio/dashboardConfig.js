export default {
  widgets: [
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
                  buildHookId: '6181ae2b05d9bc40abf438ce',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-28r28w23',
                  apiId: '2b7b8cdf-0c04-4ae3-907b-947dd520669f'
                },
                {
                  buildHookId: '6181ae2c8cebd5531e472eec',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-wodg454k',
                  apiId: '23af68c9-bffe-4bd4-b424-a322fe0df8c6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SELFSchoolHQ/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-wodg454k.netlify.app', category: 'apps'}
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

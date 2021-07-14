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
                  buildHookId: '60eef09f3de21a3fbb6e22ff',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-gcjodvvh',
                  apiId: 'f3909aa6-82c2-47af-b6c2-ebdf0e00fd6b'
                },
                {
                  buildHookId: '60eef09f61855244655c1fd0',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-efjae9yr',
                  apiId: 'b65e280f-eff5-42ed-83b3-f8ad7fee8b77'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erezlug/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-efjae9yr.netlify.app', category: 'apps'}
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

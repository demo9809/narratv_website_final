export const project = {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'client', title: 'Client Name', type: 'string' },
    { 
      name: 'category', 
      title: 'Category', 
      type: 'string',
      options: {
        list: [
          { title: 'Branding & Identity', value: 'Branding & Identity' },
          { title: 'Creative Strategy', value: 'Creative Strategy' },
          { title: 'Ad Campaigns', value: 'Ad Campaigns' },
          { title: 'Digital Marketing', value: 'Digital Marketing' },
          { title: 'Video Production', value: 'Video Production' },
          { title: 'Content Creation', value: 'Content Creation' }
        ]
      }
    },
    { name: 'tags', title: 'Tags', type: 'array', of: [{type: 'string'}] },
    { name: 'mainImage', title: 'Main Image', type: 'image', options: { hotspot: true } },
    { name: 'overview', title: 'Overview', type: 'text' },
    { name: 'results', title: 'Results', type: 'text' },
    { 
      name: 'gallery', 
      title: 'Gallery Images', 
      type: 'array', 
      of: [{ type: 'image', options: { hotspot: true } }] 
    }
  ],
};
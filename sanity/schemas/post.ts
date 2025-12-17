export const post = {
  name: 'post',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'seoTitle', title: 'SEO Title', type: 'string' },
    { name: 'seoDescription', title: 'SEO Description', type: 'text' },
    { name: 'excerpt', title: 'Excerpt (Card Description)', type: 'text' },
    { name: 'mainImage', title: 'Main Image', type: 'image', options: { hotspot: true } },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
    { name: 'readTime', title: 'Read Time (e.g. 5 min read)', type: 'string' },
    { name: 'author', title: 'Author Name', type: 'string' },
    { name: 'authorRole', title: 'Author Role', type: 'string' },
    
    // Detailed Content
    { name: 'introHeadline', title: 'Intro Headline', type: 'string' },
    { name: 'introContent', title: 'Intro Content (HTML)', type: 'text' },
    { name: 'keyTakeaways', title: 'Key Takeaways', type: 'array', of: [{type: 'string'}] },
    
    {
      name: 'sections',
      title: 'Article Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'heading', type: 'string', title: 'Heading' },
            { name: 'content', type: 'text', title: 'Content (HTML)' }
          ]
        }
      ]
    },
    {
      name: 'quote',
      title: 'Highlight Quote',
      type: 'object',
      fields: [
        { name: 'text', type: 'string', title: 'Quote Text' },
        { name: 'author', type: 'string', title: 'Quote Author' }
      ]
    },
    { name: 'tags', title: 'Tags', type: 'array', of: [{type: 'string'}] },
  ],
};
export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    },
    {
      title: 'Featured Image',
      name: 'featured',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
        }
      ]
    },
    {
      name: 'exerpt',
      title: 'Exerpt',
      type: 'string',
      description: 'This is used for cards',
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
      description: 'Select or create tags for this post',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'modifiedAt',
      title: 'Modified at',
      type: 'datetime',
      readOnly: true
    },
  ],
  onUpdate: (document) => {
    document.modifiedAt = new Date().toISOString();
    return document;
  },
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
    },
  },
};

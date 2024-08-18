export default {
  name: 'work',
  title: 'Work',
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
      name: 'excerpt',
      title: 'Excerpt',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'tools',
      title: 'Tools',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'links',
      title: 'Links',
      type: 'object',
      fields: [
        {
          name: 'github',
          title: 'Github',
          type: 'string',
        },
        {
          name: 'figma',
          title: 'Figma',
          type: 'string',
        }
      ]
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

export default {
    name: 'tag',
    title: 'Tag',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'The name of the tag',
        validation: Rule => Rule.required(),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
        validation: Rule => Rule.required(),
      },
      {
        name: 'description',
        title: 'Tag description',
        type: 'string',
        description: 'The tag description',
      },
    ],
  };
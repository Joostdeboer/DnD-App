import internalLink from './internalLink';
import externalLink from './internalLink';

export default {
    name: 'content',
    title: 'Content',
    type: 'array',
    of: [
        {
            type: 'image',
        },
        {
            lists: [
                { title: 'Bullet', value: 'bullet' },
                { title: 'Numbered', value: 'number' },
            ],
            marks: {
                annotations: [internalLink, externalLink],
                decorators: [
                    {
                        title: 'Italic',
                        value: 'em',
                    },
                    {
                        title: 'Strong',
                        value: 'strong',
                    },
                    {
                        title: 'Underline',
                        value: 'underline',
                    },
                ],
            },
            styles: [
                { title: 'Heading', value: 'h2' },
                { title: 'Quote', value: 'blockquote' },
            ],
            type: 'block',
        },
    ],
};

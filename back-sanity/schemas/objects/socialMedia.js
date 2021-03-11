import { BiLinkAlt as Link } from 'react-icons/bi';
import {
  FaFacebookSquare as FaceBook,
  FaInstagram as Instagram,
  FaLinkedin as LinkedIn,
} from 'react-icons/fa';

export default {
  title: 'Social Media',
  name: 'socialMedia',
  type: 'object',
  fields: [
    {
      title: 'Social Media Naam',
      name: 'name',
      description:
        'De naam van het social media platform (bijv. FaceBook, ...).',
      type: 'string',
    },
    {
      title: 'Social Media Link',
      name: 'url',
      description:
        'De URL link van uw social media profile (bijv. https://www.facebook.com/...).',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'name',
      url: 'url',
    },
    prepare({ title, url }) {
      let icon = Link;
      if (title.toLowerCase() === 'facebook') {
        icon = FaceBook;
      }
      if (title.toLowerCase() === 'instagram') {
        icon = Instagram;
      }
      if (title.toLowerCase() === 'linkedin') {
        icon = LinkedIn;
      }

      return {
        title,
        subtitle: url,
        media: icon,
      };
    },
  },
};

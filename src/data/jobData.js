// JobBoard Data Source
import heroBusinessmanImg from '@/src/assets/images/hero_businessman_1791355337739.jpg';
import talentProfessionalImg from '@/src/assets/images/talent_professional_1791355350707.jpg';
import avatar1Img from '@/src/assets/images/testimonial_avatar_1_1791355366224.jpg';
import avatar2Img from '@/src/assets/images/testimonial_avatar_2_1791355375978.jpg';
import avatar3Img from '@/src/assets/images/testimonial_avatar_3_1791355386156.jpg';

export const ASSETS = {
  heroBusinessman: heroBusinessmanImg.src,
  talentProfessional: talentProfessionalImg.src,
  avatars: [avatar1Img.src, avatar2Img.src, avatar3Img.src]
};

export const NAV_LINKS = [
  { label: 'HOME', href: '#home', hasDropdown: true },
  { label: 'FOR CANDIDATES', href: '#candidates', hasDropdown: true },
  { label: 'FOR EMPLOYERS', href: '#employers', hasDropdown: true },
  { label: 'PAGES', href: '#pages', hasDropdown: true },
  { label: 'BLOG', href: '#blogs', hasDropdown: true }
];

export const TRUSTED_COMPANIES = [
  { name: 'logoipsum', type: 'circle-mesh' },
  { name: 'logoipsum', type: 'infinity' },
  { name: 'ULTRA', type: 'crest' },
  { name: 'POWER XR2 MODULE', type: 'badge' },
  { name: 'logoipsum', type: 'rhombus' },
  { name: 'LOGOIPSUM', type: 'prism' }
];

export const STEPS_DATA = [
  {
    id: 1,
    title: 'Search Jobs',
    description: 'The standard chunk of used below of those interested.',
    iconName: 'Search'
  },
  {
    id: 2,
    title: 'Cv/Resume',
    description: 'The standard chunk of used below of those interested.',
    iconName: 'FileText'
  },
  {
    id: 3,
    title: 'Create Account',
    description: 'The standard chunk of used below of those interested.',
    iconName: 'User'
  },
  {
    id: 4,
    title: 'Apply Them',
    description: 'The standard chunk of used below of those interested.',
    iconName: 'CheckCircle2'
  }
];

export const CATEGORIES_DATA = [
  { title: 'UI/UX Design', count: '100+Posted New Jobs' },
  { title: 'Illustration', count: '200+Posted New Jobs' },
  { title: 'Cool Art', count: '150+Posted New Jobs' },
  { title: 'Web Design', count: '100+Posted New Jobs' },
  { title: 'Produt Design', count: '110+Posted New Jobs' },
  { title: 'Developer', count: '250+Posted New Jobs' },
  { title: 'Animation', count: '150+Posted New Jobs' },
  { title: '100+ More Category', isSpecial: true }
];

export const INITIAL_JOBS = [
  {
    id: 1,
    company: 'Google',
    location: 'New York',
    role: 'Sr. Product Designer',
    postedTime: '2 Day ago',
    type: 'Full Time',
    salary: '$560',
    salaryUnit: '/ Hour',
    description: 'It is a long established fact that a reader of a page when looking at its layout.',
    brand: 'google'
  },
  {
    id: 2,
    company: 'Microsoft',
    location: 'California',
    role: 'Web Designer',
    postedTime: '1 Day ago',
    type: 'Full Time',
    salary: '$560',
    salaryUnit: '/ Hour',
    description: 'It is a long established fact that a reader of a page when looking at its layout.',
    brand: 'microsoft'
  },
  {
    id: 3,
    company: 'Amazon',
    location: 'Southfield',
    role: 'IT Management',
    postedTime: '2 Day ago',
    type: 'Full Time',
    salary: '$560',
    salaryUnit: '/ Hour',
    description: 'It is a long established fact that a reader of a page when looking at its layout.',
    brand: 'amazon'
  },
  {
    id: 4,
    company: 'Github',
    location: 'Southfield',
    role: 'Sr. Product Designer',
    postedTime: '2 Day ago',
    type: 'Full Time',
    salary: '$560',
    salaryUnit: '/ Hour',
    description: 'It is a long established fact that a reader of a page when looking at its layout.',
    brand: 'github'
  },
  {
    id: 5,
    company: 'Dropbox',
    location: 'New York',
    role: 'Web Designer',
    postedTime: '1 Day ago',
    type: 'Full Time',
    salary: '$560',
    salaryUnit: '/ Hour',
    description: 'It is a long established fact that a reader of a page when looking at its layout.',
    brand: 'dropbox'
  },
  {
    id: 6,
    company: 'Adobe',
    location: 'California',
    role: 'IT Management',
    postedTime: '2 Day ago',
    type: 'Full Time',
    salary: '$560',
    salaryUnit: '/ Hour',
    description: 'It is a long established fact that a reader of a page when looking at its layout.',
    brand: 'adobe'
  }
];

export const MORE_JOBS = [
  {
    id: 7,
    company: 'Spotify',
    location: 'Stockholm & Remote',
    role: 'Senior Frontend Engineer',
    postedTime: '3 Hours ago',
    type: 'Full Time',
    salary: '$620',
    salaryUnit: '/ Hour',
    description: 'Scale modern music experiences enjoyed by 600M+ active audio lovers worldwide.',
    brand: 'spotify'
  },
  {
    id: 8,
    company: 'Figma',
    location: 'San Francisco',
    role: 'Design Systems Lead',
    postedTime: '5 Hours ago',
    type: 'Full Time',
    salary: '$590',
    salaryUnit: '/ Hour',
    description: 'Shape next-generation multi-player creative software architecture.',
    brand: 'figma'
  },
  {
    id: 9,
    company: 'Slack',
    location: 'Austin, TX',
    role: 'Lead Cloud Architect',
    postedTime: '1 Day ago',
    type: 'Full Time',
    salary: '$580',
    salaryUnit: '/ Hour',
    description: 'Architect resilient real-time enterprise messaging infrastructure with zero downtime.',
    brand: 'slack'
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: 'Max Makina',
    role: 'One Year With Us',
    avatar: '/images/testimonial-reference-1.jpg',
    text: 'It is a long established fact that a reader will be distracted by readable content of a page when looking at its layout.'
  },
  {
    id: 2,
    name: 'Makima Smith',
    role: 'One Year With Us',
    avatar: '/images/testimonial-reference-2.jpg',
    text: 'It is a long established fact that a reader will be distracted by readable content of a page when looking at its layout.'
  },
  {
    id: 3,
    name: 'Andrew Smith',
    role: 'One Year With Us',
    avatar: '/images/testimonial-reference-3.jpg',
    text: 'It is a long established fact that a reader will be distracted by readable content of a page when looking at its layout.'
  }
];

export const FOOTER_LINKS = {
  useful: [
    { label: 'Find a Job', href: '#jobs' },
    { label: 'Companies', href: '#companies' },
    { label: 'About Us', href: '#about' },
    { label: 'Post a Job', href: '#post-job' },
    { label: 'Testimonial', href: '#testimonials' }
  ],
  category: [
    { label: 'UI Designer', href: '#category' },
    { label: 'UX Designer', href: '#category' },
    { label: 'Grapic Designer', href: '#category' },
    { label: 'Web Developers', href: '#category' },
    { label: 'More', href: '#category' }
  ],
  followUs: [
    { label: 'Linked In', href: 'https://linkedin.com' },
    { label: 'facebook', href: 'https://facebook.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Dribbble', href: 'https://dribbble.com' },
    { label: 'Behance', href: 'https://behance.net' }
  ]
};

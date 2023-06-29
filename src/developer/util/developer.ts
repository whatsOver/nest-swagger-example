import { faker } from '@faker-js/faker';

function getRandomElements(array: string[], count: number): string[] {
  const shuffled = [...array];
  for (let i = shuffled.length; i; i--) {
    const j = Math.floor(Math.random() * i);
    [shuffled[j], shuffled[i - 1]] = [shuffled[i - 1], shuffled[j]];
  }
  return shuffled.slice(0, count);
}

export type Developer = {
  name: string;
  position: string;
  stack: string[];
};

const positions = [
  'Frontend Developer',
  'Backend Developer',
  'Fullstack Developer',
  'DevOps Engineer',
  'Data Engineer',
  'Data Scientist',
  'Machine Learning Engineer',
  'Android Developer',
  'iOS Developer',
];

const techStack = [
  'React',
  'Vue',
  'Angular',
  'NestJS',
  'Express',
  'Django',
  'Flask',
  'Spring',
  'Docker',
  'Kubernetes',
  'AWS',
  'GCP',
  'Azure',
  'Firebase',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'MariaDB',
  'Oracle',
  'Redis',
  'ElasticSearch',
  'Kafka',
  'RabbitMQ',
];

export function createRandomDeveloper(): Developer {
  return {
    name: faker.person.fullName(),
    position: getRandomElements(positions, 1)[0],
    stack: getRandomElements(techStack, 3),
  };
}

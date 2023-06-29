import { faker } from '@faker-js/faker';

export type Post = {
  postId: string;
  title: string;
  content: string;
  createdAt: Date;
};

export type Comment = {
  commentId: string;
  postId: string;
  content: string;
  createdAt: Date;
};

export function createRandomPost(): Post {
  return {
    postId: faker.string.uuid(),
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraph(),
    createdAt: faker.date.recent(),
  };
}

export function createRandomComment(postId: string): Comment {
  return {
    commentId: faker.string.uuid(),
    postId: postId,
    content: faker.lorem.sentence(),
    createdAt: faker.date.recent(),
  };
}

export const POSTS: Post[] = Array.from({ length: 20 }, createRandomPost);

export const COMMENTS: Comment[] = POSTS.flatMap((post) =>
  Array.from({ length: 5 }, () => createRandomComment(post.postId)),
);

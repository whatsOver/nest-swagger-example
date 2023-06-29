import { Injectable } from '@nestjs/common';
import { createRandomPost } from './util/post';
import { UpdatePostDto } from './dto/post.dto';

@Injectable()
export class BlogService {
  /**
   * 블로그 포스트 단일 조회
   */
  getPost() {
    return createRandomPost();
  }

  /**
   * 블로그 포스트 리스트 조회
   *
   * @param count 조회할 포스트 개수
   * @returns
   * @example
   *
   */
  getPosts(count = 5) {
    return Array.from({ length: count }, () => createRandomPost());
  }

  /**
   * 블로그 포스트 수정
   * @param postId 포스트 아이디
   * @param title 포스트 제목
   * @param content 포스트 내용
   */
  updatePost(body: UpdatePostDto) {
    const post = {
      postId: body.postId,
      title: body.title,
      content: body.content,
      createdAt: new Date(),
    };

    return post;
  }

  /**
   * 블로그 포스트 삭제
   * @param postId 포스트 아이디
   */
  deletePost(postId: string) {
    console.log(postId);
    return true;
  }
}

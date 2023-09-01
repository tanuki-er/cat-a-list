import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Post } from './post';
import { PostDto } from './post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  findAll(): Promise<Post[]> {
    return this.postsRepository.find();
  }

  findAllByUser(userId: number): Promise<Post[]> {
    return this.postsRepository.findBy({ userId });
  }

  findOne(id: number): Promise<Post | null> {
    return this.postsRepository.findOneBy({ id });
  }

  create(postDto: PostDto): Promise<Post> {
    const post = new Post();

    post.userId = postDto.userId;
    post.catId = postDto.catId;

    return this.postsRepository.save(post);
  }

  update(id: number, postDto: PostDto): Promise<UpdateResult> {
    const post = new Post();

    post.userId = postDto.userId;
    post.catId = postDto.catId;

    return this.postsRepository.update(id, post);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.postsRepository.delete(id);
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PostService } from './post.service';
import { Post as post } from './post';
import { PostDto } from './post.dto';

@ApiTags('Post')
@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  @ApiOperation({ summary: 'Returns all posts' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: post,
  })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' })
  async getAll() {
    return await this.postService.findAll();
  }

  @Get(':postId')
  @ApiOperation({ summary: 'Returns one post' })
  @ApiParam({
    name: 'postId',
    required: true,
    description: 'post identifier',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: post,
  })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' })
  async getOne(@Param('postId') postId: number) {
    return await this.postService.findOne(postId);
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Returns all posts of provided user' })
  @ApiParam({
    name: 'userId',
    required: true,
    description: 'User identifier',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: post,
  })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' })
  async getAllByUser(@Param('userId') userId: number) {
    return await this.postService.findAllByUser(userId);
  }

  @Post()
  @ApiOperation({ summary: 'Creates post' })
  @ApiParam({ name: 'userId', required: true, description: 'User ID' })
  @ApiParam({ name: 'catId', required: true, description: 'Cat ID' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Success',
    type: post,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
  })
  async create(@Body() postDto: PostDto) {
    return await this.postService.create(postDto);
  }

  @Put(':postId')
  @ApiOperation({ summary: 'Updates post' })
  @ApiParam({ name: 'userId', required: true, description: 'User ID' })
  @ApiParam({ name: 'catId', required: true, description: 'Cat ID' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Success',
    type: post,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Not Found',
  })
  async update(@Param() postId: number, @Body() postDto: PostDto) {
    return await this.postService.update(postId, postDto);
  }

  @Delete(':postId')
  @ApiOperation({ summary: 'Deletes existing post' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success', type: post })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' })
  async delete(@Param('postId') postId: number) {
    return await this.postService.delete(postId);
  }
}

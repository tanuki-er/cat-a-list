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
import { TypesService } from './types.service';
import { Types } from './types';
import { TypesDto } from './types.dto';

@ApiTags('Types')
@Controller('types')
export class TypesController {
  constructor(private typesService: TypesService) {}

  @Get()
  @ApiOperation({ summary: 'Returns all users with account types' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: Types,
  })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' })
  async getAll() {
    return await this.typesService.findAll();
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Returns one user' })
  @ApiParam({
    name: 'userCheck',
    required: true,
    description: 'is it user now',
  })
  @ApiParam({
    name: 'followerCheck',
    required: true,
    description: 'is it follower now',
  })
  @ApiParam({
    name: 'adminCheck',
    required: true,
    description: 'is it admin now',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: Types,
  })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' })
  async getOne(@Param('userId') userId: number) {
    return await this.typesService.findOne(userId);
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Returns all types of provided user' })
  @ApiParam({
    name: 'userCheck',
    required: true,
    description: 'is it user now',
  })
  @ApiParam({
    name: 'followerCheck',
    required: true,
    description: 'is it follower now',
  })
  @ApiParam({
    name: 'adminCheck',
    required: true,
    description: 'is it admin now',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: Types,
  })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' })
  async getAllByUser(@Param('userId') userId: number) {
    return await this.typesService.findAllByUser(userId);
  }

  @Post()
  @ApiOperation({ summary: 'Creates user' })
  @ApiParam({
    name: 'userCheck',
    required: true,
    description: 'is it user now',
  })
  @ApiParam({
    name: 'followerCheck',
    required: true,
    description: 'is it follower now',
  })
  @ApiParam({
    name: 'adminCheck',
    required: true,
    description: 'is it admin now',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Success',
    type: Types,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
  })
  async create(@Body() typesDto: TypesDto) {
    return await this.typesService.create(typesDto);
  }

  @Put(':userId')
  @ApiOperation({ summary: 'Updates user' })
  @ApiParam({
    name: 'userCheck',
    required: true,
    description: 'is it user now',
  })
  @ApiParam({
    name: 'followerCheck',
    required: true,
    description: 'is it follower now',
  })
  @ApiParam({
    name: 'adminCheck',
    required: true,
    description: 'is it admin now',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Success',
    type: Types,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Not Found',
  })
  async update(@Param() userId: number, @Body() typesDto: TypesDto) {
    return await this.typesService.update(userId, typesDto);
  }

  @Delete(':userId')
  @ApiOperation({ summary: 'Deletes existing user' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: Types,
  })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' })
  async delete(@Param('userId') userId: number) {
    return await this.typesService.delete(userId);
  }
}

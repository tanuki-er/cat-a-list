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
import { UserService } from './user.service';
import { User } from './user';
import { UserDto } from './user.dto';

@ApiTags('User')
@Controller('user')
export class UserController {
  @Post()
  @ApiOperation({ summary: 'Creates user with provided credentials' })
  @ApiParam({ name: 'name', required: true, description: 'User name' })
  @ApiParam({ name: 'birthday', required: true, description: 'User birthday' })
  @ApiParam({ name: 'location', required: true, description: 'User location' })
  @ApiParam({ name: 'sex', required: true, description: 'User sex' })
  @ApiParam({ name: 'email', required: true, description: 'Email' })
  @ApiParam({ name: 'password', required: true, description: 'Password' })
  @ApiParam({
    name: 'contacts',
    required: true,
    description: 'User contact information',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Success',
    type: User,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
  })
  async create(@Body() userDto: UserDto) {
    return await this.userService.create(userDto);
  }

  constructor(private userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Returns all users' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success', type: User })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' })
  async getAll() {
    return await this.userService.findAll();
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Returns one user' })
  @ApiParam({ name: 'userId', required: true, description: 'User identifier' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success', type: User })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' })
  async getOne(@Param('userId') userId: number) {
    return await this.userService.findOne(userId);
  }

  @Put(':userId')
  @ApiOperation({ summary: 'Updates existing user' })
  @ApiParam({ name: 'name', required: true, description: 'User name' })
  @ApiParam({ name: 'birthday', required: true, description: 'User birthday' })
  @ApiParam({ name: 'location', required: true, description: 'User location' })
  @ApiParam({ name: 'sex', required: true, description: 'User sex' })
  @ApiParam({ name: 'email', required: true, description: 'Email' })
  @ApiParam({ name: 'password', required: true, description: 'Password' })
  @ApiParam({
    name: 'contacts',
    required: true,
    description: 'User contact information',
  })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success', type: User })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' })
  async update(@Param('userId') userId: number, @Body() userDto: UserDto) {
    return await this.userService.update(userId, userDto);
  }

  @Delete(':userId')
  @ApiOperation({ summary: 'Deletes existing user' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success', type: User })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' })
  async delete(@Param('userId') userId: number) {
    return await this.userService.delete(userId);
  }
}

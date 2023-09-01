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
import { CatService } from './cat.service';
import { Cat } from './cat';
import { CatDto } from './cat.dto';

@ApiTags('Cat')
@Controller('cat')
export class CatController {
  constructor(private catService: CatService) {}

  @Get()
  @ApiOperation({ summary: 'Returns all cats' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success', type: Cat })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' })
  async getAll() {
    return await this.catService.findAll();
  }

  @Get(':catId')
  @ApiOperation({ summary: 'Returns one cat' })
  @ApiParam({
    name: 'catId',
    required: true,
    description: 'Cat identifier',
  })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success', type: Cat })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' })
  async getOne(@Param('catId') catId: number) {
    return await this.catService.findOne(catId);
  }

  @Post()
  @ApiOperation({ summary: 'Creates cats with provided credentials' })
  @ApiParam({ name: 'name', required: true, description: 'Cat name' })
  @ApiParam({ name: 'age', required: true, description: 'Cat age' })
  @ApiParam({ name: 'catBreed', required: true, description: 'Cat breed' })
  @ApiParam({ name: 'sex', required: true, description: 'Cat sex' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success', type: Cat })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' })
  async create(@Body() catDto: CatDto) {
    return await this.catService.create(catDto);
  }
  /**/

  @Put(':catId')
  @ApiOperation({ summary: 'Updates existing cat' })
  @ApiParam({ name: 'name', required: true, description: 'Cat name' })
  @ApiParam({ name: 'age', required: true, description: 'Cat age' })
  @ApiParam({ name: 'catBreed', required: true, description: 'Cat breed' })
  @ApiParam({ name: 'sex', required: true, description: 'Cat sex' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Success',
    type: Cat,
  })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success', type: Cat })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' })
  async update(@Param('catId') catId: number, @Body() catDto: CatDto) {
    return await this.catService.update(catId, catDto);
  }
  /**/

  @Delete(':catId')
  @ApiOperation({ summary: 'Deletes existing cat' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success', type: Cat })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' })
  async delete(@Param('catId') catId: number) {
    return await this.catService.delete(catId);
  }
  /**/
}

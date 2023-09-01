import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiExcludeController } from '@nestjs/swagger';

@Controller()
@ApiExcludeController()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  @Render('index')
  getIndexPage() {
    return {
      user: 'Hello world!',
      posts: [
        {
          name: 'Vasya',
          age: 5,
          catBreed: 'Onglichanen',
          sex: 'Mugzik',
        },
        {
          name: 'Alyona',
          age: 3,
          catBreed: 'Aziatochka',
          sex: 'Devochka',
        },
      ],
    };
  }
  //root() {
  //return { message: 'Hello World!' };
  //}
}

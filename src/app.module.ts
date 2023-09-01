import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CatController } from './cat/cat.controller';
import { PostController } from './post/post.controller';
import { UserController } from './user/user.controller';
import { TypesController } from './types/types.controller';
import { CatModule } from './cat/cat.module';
import { PostModule } from './post/post.module';
import { TypesModule } from './types/types.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CatModule,
    PostModule,
    TypesModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypesController } from './types.controller';
import { TypesService } from './types.service';
import { Types } from './types';
@Module({
  imports: [TypeOrmModule.forFeature([Types])],
  controllers: [TypesController],
  providers: [TypesService],
})
export class TypesModule {}

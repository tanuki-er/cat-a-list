import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Types } from './types';
import { TypesDto } from './types.dto';

@Injectable()
export class TypesService {
  constructor(
    @InjectRepository(Types)
    private typesRepository: Repository<Types>,
  ) {}

  findAll(): Promise<Types[]> {
    return this.typesRepository.find();
  }

  findAllByUser(userId: number): Promise<Types[]> {
    return this.typesRepository.findBy({ userId });
  }

  findOne(id: number): Promise<Types | null> {
    return this.typesRepository.findOneBy({ id });
  }

  create(typesDto: TypesDto): Promise<Types> {
    const types = new Types();

    types.userId = typesDto.userId;
    types.userCheck = typesDto.userCheck;
    types.followerCheck = typesDto.followerCheck;
    types.adminCheck = typesDto.adminCheck;

    return this.typesRepository.save(types);
  }

  update(id: number, typesDto: TypesDto): Promise<UpdateResult> {
    const types = new Types();

    types.userId = typesDto.userId;
    types.userCheck = typesDto.userCheck;
    types.followerCheck = typesDto.followerCheck;
    types.adminCheck = typesDto.adminCheck;

    return this.typesRepository.update(id, types);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.typesRepository.delete(id);
  }
}

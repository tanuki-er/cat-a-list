import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Cat } from './cat';
import { CatDto } from './cat.dto';

@Injectable()
export class CatService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
  ) {}

  findAll(): Promise<Cat[]> {
    return this.catsRepository.find();
  }

  findOne(id: number): Promise<Cat | null> {
    return this.catsRepository.findOneBy({ id });
  }

  create(catDto: CatDto): Promise<Cat> {
    const cat = new Cat();
    cat.name = catDto.name;
    cat.age = catDto.age;
    cat.catBreed = catDto.catBreed;
    cat.sex = catDto.sex;

    return this.catsRepository.save(cat);
  }
  update(id: number, catDto: CatDto): Promise<UpdateResult> {
    const cat = new Cat();
    cat.name = catDto.name;
    cat.age = catDto.age;
    cat.catBreed = catDto.catBreed;
    cat.sex = catDto.sex;

    return this.catsRepository.update(id, cat);
  }
  delete(id: number): Promise<DeleteResult> {
    return this.catsRepository.delete(id);
  }
}

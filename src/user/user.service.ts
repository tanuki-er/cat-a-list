import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { User } from './user';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  create(userDto: UserDto): Promise<User> {
    const user = new User();
    user.name = userDto.name;
    user.birthdate = userDto.birthdate;
    user.location = userDto.location;
    user.sex = userDto.sex;
    user.email = userDto.email;
    user.password = userDto.password;
    user.contacts = userDto.contacts;
    return this.usersRepository.save(user);
  }

  update(id: number, userDto: UserDto): Promise<UpdateResult> {
    const user = new User();
    user.name = userDto.name;
    user.birthdate = userDto.birthdate;
    user.location = userDto.location;
    user.sex = userDto.sex;
    user.email = userDto.email;
    user.password = userDto.password;
    user.contacts = userDto.contacts;

    return this.usersRepository.update(id, user);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.usersRepository.delete(id);
  }
}

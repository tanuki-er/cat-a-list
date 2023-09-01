/*
  id
  date
  cat
    sex
    breed
    age
    owner id
  owner (user)
    name
    location
*/
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Cat } from '../cat/cat';
import { User } from '../user/user';

@Entity()
export class Post {
  // cart-item & post
  // product & cat
  // comment ?? comment -- [later]
  // order, order-item & types
  // user & user
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Date',
    type: String,
  })
  @Column()
  date: string;

  @ManyToOne(() => Cat, (cat) => cat.ownerId)
  @JoinColumn()
  cat: Cat;

  @Column({ type: 'int', nullable: false })
  catId: number;

  @ManyToOne(() => User, (user) => user)
  @JoinColumn()
  user: User;
  @Column({ type: 'int', nullable: false })
  userId: number;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../user/user';

@Entity()
export class Types {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'userId',
    type: Number,
  })
  @Column()
  userId: number;

  @ApiProperty({
    description: 'userCheck',
    type: Boolean,
  })
  @Column()
  userCheck: boolean;

  @ApiProperty({
    description: 'followerCheck',
    type: Boolean,
  })
  @Column()
  followerCheck: boolean;

  @ApiProperty({
    description: 'adminCheck',
    type: Boolean,
  })
  @Column()
  adminCheck: boolean;
}

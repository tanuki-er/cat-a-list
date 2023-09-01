/*
  name
  age
  cat breed
  sex
 owner id
*/
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'CatName',
    type: String,
  })
  @Column()
  name: string;

  @ApiProperty({
    description: 'Age',
    type: String,
  })
  @Column()
  age: string;

  @ApiProperty({
    description: 'CatBreed',
    type: String,
  })
  @Column()
  catBreed: string;

  @ApiProperty({
    description: 'Sex',
    type: String,
  })
  @Column()
  sex: string;

  @ApiProperty({
    description: 'OwnerId',
    type: String,
  })
  @Column()
  ownerId: string;
  /*
photos
favorite counter
  */
}

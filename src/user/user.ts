import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Cat } from '../cat/cat';

/*
  user id
  name
  date of birth
  location
  email
  password
*/
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Name',
    type: String,
  })
  @Column()
  name: string;

  @ApiProperty({
    description: 'DateOfBirth',
    type: String,
  })
  @Column()
  birthdate: string;

  @ApiProperty({
    description: 'Location',
    type: String,
  })
  @Column()
  location: string;

  @ApiProperty({
    description: 'Sex',
    type: String,
  })
  @Column()
  sex: string;

  @ApiProperty({
    description: 'Email',
    type: String,
  })
  @Column()
  email: string;

  @ApiProperty({
    description: 'Password',
    type: String,
  })
  @Column()
  password: string;
  ///////////////////////////////////
  /*
    contacts
    sex
  */

  @ApiProperty({
    description: 'Contacts',
    type: String, //link
  })
  @Column()
  contacts: string;
  // -------------------------- cat list
  @ApiProperty({
    description: 'Cats Item',
    type: Cat,
  })
  @OneToMany(() => Cat, (catItem) => catItem)
  @JoinColumn()
  catItems: Cat[];
}

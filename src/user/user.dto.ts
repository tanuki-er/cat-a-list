import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  constructor(
    name: string,
    birthdate: string,
    location: string,
    sex: string,
    email: string,
    password: string,
    contacts: string,
  ) {
    this.name = name;
    this.birthdate = birthdate;
    this.location = location;
    this.sex = sex;
    this.email = email;
    this.password = password;
    this.contacts = contacts;
  }

  @ApiProperty({
    description: 'Username',
    type: String,
  })
  name: string;

  @ApiProperty({
    description: 'DateOfBirth',
    type: String,
  })
  birthdate: string;

  @ApiProperty({
    description: 'Location',
    type: String,
  })
  location: string;

  @ApiProperty({
    description: 'Sex',
    type: String,
  })
  sex: string;

  @ApiProperty({
    description: 'Email',
    type: String,
  })
  email: string;

  @ApiProperty({
    description: 'Password',
    type: String,
  })
  password: string;

  @ApiProperty({
    description: 'Contacts',
    type: String, //link
  })
  contacts: string;
}

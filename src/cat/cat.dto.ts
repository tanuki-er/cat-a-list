import { ApiProperty } from '@nestjs/swagger';

export class CatDto {
  constructor(name: string, age: string, carBreed: string, sex: string) {
    this.name = name;
    this.age = age;
    this.catBreed = carBreed;
    this.sex = sex;
  }

  @ApiProperty({
    description: 'Name',
    type: String,
  })
  name: string;

  @ApiProperty({
    description: 'Age',
    type: String,
  })
  age: string;

  @ApiProperty({
    description: 'CatBreed',
    type: String,
  })
  catBreed: string;

  @ApiProperty({
    description: 'Sex',
    type: String,
  })
  sex: string;
}

import { ApiProperty } from '@nestjs/swagger';

export class PostDto {
  constructor(userId: number, catId: number) {
    this.userId = userId;
    this.catId = catId;
  }

  @ApiProperty({
    description: 'User ID',
    type: Number,
  })
  userId: number;

  @ApiProperty({
    description: 'Cat ID',
    type: Number,
  })
  catId: number;
}

import { ApiProperty } from '@nestjs/swagger';

export class TypesDto {
  constructor(
    userId: number,
    userCheck: boolean,
    followerCheck: boolean,
    adminCheck: boolean,
  ) {
    this.userId = userId;
    this.userCheck = userCheck;
    this.followerCheck = followerCheck;
    this.adminCheck = adminCheck;
  }

  @ApiProperty({
    description: 'User ID',
    type: Number,
  })
  userId: number;

  @ApiProperty({
    description: 'userCheck',
    type: Boolean,
  })
  userCheck: boolean;

  @ApiProperty({
    description: 'followerCheck',
    type: Boolean,
  })
  followerCheck: boolean;

  @ApiProperty({
    description: 'adminCheck',
    type: Boolean,
  })
  adminCheck: boolean;
}

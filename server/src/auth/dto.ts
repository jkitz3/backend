import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class SignUpBodyDto {
  @ApiProperty({
    example: 'test@gmail.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '1234',
  })
  @IsNotEmpty()
  password: string;
}

export class SignInBodyDto {
  @ApiProperty({
    example: 'test@gmail.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '1234',
  })
  @IsNotEmpty()
  password: string;
}

export class GetSessionInfoDto {
  @ApiProperty()
  id: string;

  @ApiProperty({
    example: 'test23@gmail.com',
  })
  email: string;

  @ApiProperty()
  'iat': number;

  @ApiProperty()
  'exp': number;
}

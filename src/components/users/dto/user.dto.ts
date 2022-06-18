import { IsNotEmpty, IsString, Length } from 'class-validator';

export class UserDto {
  @Length(3, 100)
  @IsNotEmpty()
  @IsString()
  userName: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @Length(3, 100)
  @IsNotEmpty()
  @IsString()
  description: string;

  userToken?: string;
  isAdmin?: boolean;
}

export class UserAuthDto {
  @Length(3, 100)
  @IsNotEmpty()
  @IsString()
  userName: string;

  @Length(3, 100)
  @IsNotEmpty()
  @IsString()
  password: string;
}

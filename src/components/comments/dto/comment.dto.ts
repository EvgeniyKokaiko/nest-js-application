import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CommentDto {
  @IsNotEmpty()
  @IsString()
  userToken: string;

  @IsNotEmpty()
  @IsString()
  userName: string;

  @Length(3, 100)
  @IsNotEmpty()
  @IsString()
  text: string;

  @IsNotEmpty()
  @IsString()
  post_hash: string;
}

export class CommentUpdateDto {
  @Length(3, 100)
  @IsNotEmpty()
  @IsString()
  text: string;

  @Length(3, 100)
  @IsString()
  @IsNotEmpty()
  comment_hash: string;
}

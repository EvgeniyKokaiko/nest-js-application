import { IsNotEmpty, IsString } from 'class-validator';

export class PostsDto {
  @IsString()
  content?: string;

  @IsString()
  @IsNotEmpty()
  userToken: string;

  post_hash?: string;

  @IsString()
  @IsNotEmpty()
  title: string;
}

export class UpdatePostChunkDto {
  @IsString()
  content: string;

  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  userToken: string;
}

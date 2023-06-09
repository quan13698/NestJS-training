import {
  IsEmail,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(4)
  @MaxLength(30)
  name: string;

  @IsNumber()
  age: number;

  @MinLength(4)
  @MaxLength(50)
  @IsString()
  address: string;

  @IsEmail()
  @IsString()
  email: string;

  @MinLength(8)
  @MaxLength(30)
  @IsString()
  password: string;
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/libs/shared/src/user/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) { }

    async createUser(user: CreateUserDto): Promise<any> {
        const { email, password } = user;
        const checkExistingEmail = await this.userRepository.findOneBy({ email: email});
        if(checkExistingEmail){
           return 'Email already exists';
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const userHasdedPassword = {
            ...user,
            password: hashedPassword
        }
        await this.userRepository.save(userHasdedPassword);
        const result = {
            success: true,
            data: userHasdedPassword
        }
        return result;
    }
}

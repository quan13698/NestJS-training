import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/libs/shared/src/user/user.entity';

@Module({
    // imports: [TypeOrmModule.forFeature([User]), TypeOrmModule],
    // providers: 
})
export class UserModule {}

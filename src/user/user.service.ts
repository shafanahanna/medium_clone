import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User)private readonly userRepository:Repository <User>) {}
  async creatuser(createUserdto:CreateUserDto) {
  const newUser= new User();
Object.assign(newUser,createUserdto)
return await this.userRepository.save(newUser)
  }
}

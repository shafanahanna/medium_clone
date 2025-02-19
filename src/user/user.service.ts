import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {sign } from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async creatuser(createUserdto: CreateUserDto) {

    const userByEmail=await this.userRepository.findOne({where:{email:createUserdto.email}})
    const userByUsername =await this.userRepository.findOne({where:{username:createUserdto.username}})

    if(userByEmail || userByUsername){
      throw new HttpException('Username or Email already exist' ,HttpStatus.UNPROCESSABLE_ENTITY)
    }
    const newUser = new User();
    Object.assign(newUser, createUserdto);
    return await this.userRepository.save(newUser);
  }

  genrateJwtToken(user: User): string {
    console.log(process.env.JWT_SECRET,"ppp")
  return sign(
    {
      id:user.id,
      email:user.email,
      username:user.username,
      image:user.image
    },
    "hannasecret",
    {expiresIn:'7d'}
  )
  }

  buildUserResponse(user: User): any {
    return { user: { ...user, token: this.genrateJwtToken(user) } };
  }
}

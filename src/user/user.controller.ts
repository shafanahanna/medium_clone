import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
import { UserResponse } from './types/userResponse.interface';

@Controller('users')
export class UserController {

    constructor(private readonly userService:UserService) {}
    @Post()
    @UsePipes(ValidationPipe)
    async creatuser(@Body('user') createUserdto:CreateUserDto):Promise<UserResponse>{
       const user = await this.userService.creatuser(createUserdto)
       return this.userService.buildUserResponse(user)
    }
}

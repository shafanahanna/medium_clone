import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './user.entity';

@Controller('users')
export class UserController {

    constructor(private readonly userService:UserService) {}
    @Post()
    async creatuser(@Body('user') createUserdto:CreateUserDto):Promise<User>{
        return this.userService.creatuser(createUserdto)
    }
}

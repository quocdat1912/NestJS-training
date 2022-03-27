import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getAll() {
        return this.userService.findAll();
    }

    @Get(':id') 
    getDetail(@Param('id') id: number) {
        return this.userService.findDetail(id);
    }

    @Post() 
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }

    @Put(':id')
    updateUser(@Param('id') id: number) {
        return this.userService.updateUser(id);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        return this.userService.delete(id);
    }
}

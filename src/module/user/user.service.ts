import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';

@Injectable()
export class UserService {
    findAll() {
        return "Getting all users....";
        
    }

    createUser(createUserDto: CreateUserDto) {
        return `Getting all users ${createUserDto.firstName + ' ' + createUserDto.lastName}....`;
    }

    delete(id: number) {
        return `Deleting user ${id}....`;
    }

    updateUser(id: number) {
        return `Updateting user ${id} ...`;
    }

    findDetail(id: number) {
        return `Getting detail user ${id}...`;
    }
}

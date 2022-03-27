import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) {}

    @Get()
    getAll() {
        return this.customerService.findAll();
    }

    @Get(':id') 
    getDetail(@Param('id') id: number) {
        return this.customerService.findDetailCustomer(id);
    }

    @Post() 
    createUser() {
        return this.customerService.createCustomer();
    }

    @Put(':id')
    updateUser(@Param('id') id: number) {
        return this.customerService.updateCustomer(id);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        return this.customerService.deleteCustomer(id);
    }
}

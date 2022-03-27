import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DivisionService } from './division.service';

@Controller('division')
export class DivisionController {
    constructor(private readonly divisionService: DivisionService) {}

    @Get()
    getAll() {
        return this.divisionService.findAll();
    }

    @Get(':id') 
    getDetail(@Param('id') id: number) {
        return this.divisionService.findDetailDivision(id);
    }

    @Post() 
    createUser() {
        return this.divisionService.createDivision();
    }

    @Put(':id')
    updateUser(@Param('id') id: number) {
        return this.divisionService.updateDivision(id);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        return this.divisionService.deleteDivision(id);
    }
}

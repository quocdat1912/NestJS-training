import {Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('projects')
export class ProjectController {
    constructor(private readonly projectService: ProjectService) {}

    @Get()
    getAll() {
        return this.projectService.findAll();
    }

    @Get(':id') 
    getDetail(@Param('id') id: number) {
        return this.projectService.findDetailProject(id);
    }

    @Post() 
    createUser() {
        return this.projectService.createProject();
    }

    @Put(':id')
    updateUser(@Param('id') id: number) {
        return this.projectService.updateProject(id);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        return this.projectService.deleteProject(id);
    }
}

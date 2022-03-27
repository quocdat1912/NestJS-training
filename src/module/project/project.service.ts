import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectService {
    findAll() {
        return "Getting all project....";
    }

    createProject() {
        return "Getting all project....";
    }

    deleteProject(id: number) {
        return `Deleting project ${id} ....`;
    }

    updateProject(id: number) {
        return `Updateting project${id} ...`;
    }

    findDetailProject(id: number) {
        return `Getting detail project ${id}...`;
    }
}

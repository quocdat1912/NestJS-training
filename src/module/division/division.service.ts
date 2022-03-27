import { Injectable } from '@nestjs/common';

@Injectable()
export class DivisionService {
    findAll() {
        return "Getting all division....";
    }

    createDivision() {
        return "Getting all division....";
    }

    deleteDivision(id: number) {
        return `Deleting division ${id} ....`;
    }

    updateDivision(id: number) {
        return `Updateting division ${id} ...`;
    }

    findDetailDivision(id: number) {
        return `Getting detail division ${id}...`;
    }
}

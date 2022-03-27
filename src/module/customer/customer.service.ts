import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
    findAll() {
        return "Getting all Customer....";
    }

    createCustomer() {
        return "Getting all Customer....";
    }

    deleteCustomer(id: number) {
        return `Deleting Customer ${id} ....`;
    }

    updateCustomer(id: number) {
        return `Updateting Customer ${id} ...`;
    }

    findDetailCustomer(id: number) {
        return `Getting detail Customer ${id}...`;
    }
}

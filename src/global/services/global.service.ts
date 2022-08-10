import { Injectable } from '@nestjs/common';

@Injectable()
export class GlobalService {
  checkOwner(record: any, ownerId: number) {
    let isOwner = false;
    record.owners.map((singleOwner) => {
      isOwner = parseInt(singleOwner.id) == ownerId;
    });
    return isOwner;
  }
}

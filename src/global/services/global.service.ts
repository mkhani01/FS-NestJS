import { Injectable } from '@nestjs/common';

@Injectable()
export class GlobalService {
  checkOwner(record: any, ownerId: number) {
    let isOwner = false;
    if (record.owners?.length) {
      record.owners.map((singleOwner) => {
        isOwner = parseInt(singleOwner.id) == ownerId;
      });
    } else if (record.owner) {
      isOwner = parseInt(record.owner.id) == ownerId;
    }
    return isOwner;
  }
}

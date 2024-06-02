import { Injectable } from '@nestjs/common';
import { PatchAccountDto } from './dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class AccountService {
  constructor(private db: DbService) {}

  async getAccount(userId: string) {
    return this.db.account.findFirstOrThrow({ where: { ownerId: userId } });
  }

  async patchAccount(userId: string, patch: PatchAccountDto) {
    return this.db.account.update({
      where: { ownerId: userId },
      data: { ...patch },
    });
  }
}

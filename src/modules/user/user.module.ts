import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PersonModule } from "../person/person.module";

@Module({
  imports: [PersonModule],
  controllers: [UserController],
})
export class UserModule {}

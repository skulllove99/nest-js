import { Controller, Get, Inject } from "@nestjs/common";
import { PersonService, PersonServiceInterface } from "../person/person.service";

@Controller('user')
export class UserController {
  constructor(private readonly user: PersonServiceInterface) {}
  @Get()
  findAll() {
    return this.user.findAll();
  }
}

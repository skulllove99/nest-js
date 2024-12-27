import { Module } from '@nestjs/common';
import { Person, PersonSchema } from "../../schemas/person.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { PersonController } from "./person.controller";
import { PersonService, PersonServiceInterface } from "./person.service";


@Module({
  imports: [MongooseModule.forFeature([{ name: Person.name, schema: PersonSchema }])],
  controllers: [PersonController],
  providers: [{
    provide: PersonServiceInterface,
    useClass: PersonService,
  }],
  exports: [
    {
      provide: PersonServiceInterface,
      useClass: PersonService,
    },
  ],
})
export class PersonModule {

}

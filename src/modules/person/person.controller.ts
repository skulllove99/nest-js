import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PersonServiceInterface } from './person.service';
import { PersonDto } from '../../dtos/person/person.dto';

@Controller('person')
export class PersonController {
  constructor(readonly personService: PersonServiceInterface) {}
  @Get()
  findAll() {
    const test = 12;
    console.log(test);
    return this.personService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personService.findOne(id);
  }
  @Post()
  add(@Body() createDto: PersonDto) {
    return this.personService.create(createDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDto: PersonDto) {
    return this.personService.update(id, updateDto);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.personService.delete(id);
  }
}

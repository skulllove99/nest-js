import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Person } from '../../schemas/person.schema';
import { Model } from 'mongoose';
import { PersonDto } from '../../dtos/person/person.dto';

@Injectable()
export class PersonService implements PersonServiceInterface {
  constructor(
    @InjectModel(Person.name) private readonly personModel: Model<Person>,
  ) {}

  async findAll(): Promise<Person[]> {
    console.log(1234);
    return this.personModel.find().exec();
  }

  async findOne(id: string): Promise<Person> {
    return this.personModel.findOne({ _id: id }).exec();
  }

  async create(createDto: PersonDto): Promise<Person> {
    const newPerson = new this.personModel(createDto);
    return newPerson.save();
  }

  async update(id: string, updateDto: PersonDto): Promise<Person> {
    const person = await this.findOne(id);
    if (!person) throw new Error('Person not found');
    return person.updateOne(updateDto);
  }

  async delete(id: string): Promise<Person> {
    const person = await this.findOne(id);
    if (!person) throw new Error('Person not found');
    return person.deleteOne();
  }
}

export abstract class PersonServiceInterface {
  abstract findAll(): Promise<Person[]>;

  abstract findOne(id: string): Promise<Person>;

  abstract create(createDto: PersonDto): Promise<Person>;

  abstract update(id: string, updateDto: PersonDto): Promise<Person>;

  abstract delete(id: string): Promise<Person>;
}

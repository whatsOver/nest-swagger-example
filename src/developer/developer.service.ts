import { Injectable } from '@nestjs/common';
import { DeveloperDto } from './dto/developer.dto';
import { createRandomDeveloper } from './util/developer';
import { CreateDeveloperDto } from './dto/create-developer.dto';
import { UpdateDeveloperDto } from './dto/update-developer.dto';

@Injectable()
export class DeveloperService {
  getDeveloper(dto: DeveloperDto) {
    console.log(dto);
    return createRandomDeveloper();
  }

  getDevelopers(size: number) {
    return Array.from({ length: size }, () => createRandomDeveloper());
  }

  createDeveloper(dto: CreateDeveloperDto) {
    return {
      ...dto,
    };
  }

  updateDeveloper(dto: UpdateDeveloperDto) {
    return {
      ...dto,
    };
  }

  deleteDeveloper(developerId: string) {
    console.log(developerId);
    return true;
  }
}

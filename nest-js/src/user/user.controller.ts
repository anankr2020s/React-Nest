import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('CreateUser')
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.userService.create(createUserDto);
  }

  @Get('ListUser')
  findAll() {
    return this.userService.findAll();
  }

  @Get('ListUser/:id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Delete('DeleteUser/:id')
  remove(@Param('id') id: number) {
    return this.userService.remove(id);
  }
}

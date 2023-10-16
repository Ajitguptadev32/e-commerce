import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAllUsers() {
    console.log('Hello');
    const user = this.userService.findAll();
  }
}

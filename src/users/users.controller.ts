import { Body, Controller, Get,Param, Post,Patch, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService){}
    /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */

    @Get()
    findAll(@Query('role') role?:"Intern"|"Engineer")
    {
        return this.userService.findAll(role);
    }
    @Get(':id')
    findOne(@Param('id') id:string)
    {
        return this.userService.findOne(+id);
    }

    @Post()
    create(@Body() user: { name: string, email: string, role: "Intern"|"Engineer" }) {
        return this.userService.create(user)
    }

    @Patch(':id') // PATCH /users/:id
    update(@Param('id') id: string, @Body() userUpdate: { name?: string, email?: string, role?: "Intern"|"Engineer" }) {
        return this.userService.update(+id, userUpdate)
    }

    @Delete(':id') // DELETE /users/:id
    deleteOne(@Param('id') id: string) {
        return this.userService.deleteOne(+id)
    }


}

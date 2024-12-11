import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Inject, Param, ParseIntPipe, Patch, Post, Query, Res, SetMetadata, UsePipes, ValidationPipe } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';
import { REQUEST } from '@nestjs/core';
import { Public } from 'src/common/decorators/public.decorator';
import { Protocol } from 'src/common/decorators/protocol.decorator';
import { ApiForbiddenResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('coffees')
@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeesService: CoffeesService,
        @Inject(REQUEST) private readonly request: Request,
    ) {}

    //Static routes
    @ApiForbiddenResponse({ description: 'Forbidden.'})
    @Public()
    @UsePipes(ValidationPipe)
    @Get()
    async findAll(@Protocol('https') protocol:string, @Query() paginationQuery: PaginationQueryDto) {
        console.log(protocol)
        await new Promise(resolve => setTimeout(resolve, 5000))
        const {limit, offset} = paginationQuery;
        return this.coffeesService.findAll(paginationQuery);
    }

    //Dinamic routes
    @Public()
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: string) {
        console.log(id)
        return this.coffeesService.findOne(id);
    }

    //POST
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        return this.coffeesService.create(createCoffeeDto);
    }

    //PATCH - Update    
    @Patch(':id')
    update(@Param('id') id: string, @Body(ValidationPipe) updateCoffeeDto: UpdateCoffeeDto) {
        return this.coffeesService.update(id, updateCoffeeDto);
    }

    //DELETE - Remove
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coffeesService.remove(id)}        
}

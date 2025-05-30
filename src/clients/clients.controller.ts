import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { JwtAuthGuard } from '../auth/guards/jwt.auth.guard';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllClients() {
    return this.clientsService.getAllClients();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getClientById(@Param('id') id: string) {
    return this.clientsService.getClientById(id);
  }
}
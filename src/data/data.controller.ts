import { Controller, Get, Param } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
    constructor(private dataService: DataService) {}

    @Get('uniqueIds')
    public async getUniqueIds(){
        return await this.dataService.getUniqueDeviceId();
    }

    @Get('battery')
    public async getBatteryData(){
        return await this.dataService.getBatteryData();
    }

    @Get('tank')
    public async getTankstateData(){
        return await this.dataService.getTankstateData();
    }

    @Get('/battery/:id')
    public async getBatteryById(@Param('id') id: number){
        return await this.dataService.getBatteryById(id);
    }

    @Get('/tank/:id')
    public async getTankStateById(@Param('id') id: number){
        return await this.dataService.getTankStateById(id);
    }
}

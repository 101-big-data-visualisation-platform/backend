import { Controller, Get } from '@nestjs/common';
import { DataService } from './data.service';
import { DataDto } from './data.dto';

@Controller('data')
export class DataController {
    constructor(private dataService: DataService) {}

    @Get('battery')
    public getBatteryData(){
        return this.dataService.getBatteryData();
    }

    @Get('tank')
    public getTankstateData(){
        return this.dataService.getTankstateData();
    }
}

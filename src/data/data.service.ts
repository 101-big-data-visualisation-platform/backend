import { Injectable } from '@nestjs/common';
import { DATA } from './data.mock';

@Injectable()
export class DataService {
    private data = DATA;

    public getBatteryData(){
        let batteryData = [];
        this.data.forEach(element => {
            batteryData.push({
                timeStamp: element.timeStamp,
                battery: element.battery
            });
        });
        return batteryData;
    }


    public getTankstateData(){
        let tankData = [];
        this.data.forEach(element => {
            tankData.push({
                timeStamp: element.timeStamp,
                tankState: element.tankState
            });
        });
        return tankData;
    }

}

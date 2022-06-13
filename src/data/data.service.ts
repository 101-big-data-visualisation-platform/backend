import { Injectable } from '@nestjs/common';
import { DATA } from './data.mock';

@Injectable()
export class DataService {
    private data = DATA;

    public getBatteryData(): Promise<any>{
        let batteryData = [];
        return new Promise((resolve) => {
            this.data.forEach(element => {
                batteryData.push({
                    timeStamp: element.timeStamp,
                    battery: element.battery
                });
            });
            return resolve(batteryData);
        });
        
    }

    public getTankstateData(): Promise<any>{
        let tankData = [];
        return new Promise((resolve) => {
            this.data.forEach(element => {
                tankData.push({
                    timeStamp: element.timeStamp,
                    tankState: element.tankState
                });
            });
            return resolve(tankData);    
        });
    }

    public getBatteryById(id: number): Promise<any>{
        const sensorID = Number(id);
        let tankData = [];
        return new Promise((resolve) => {
            this.data.forEach(element => {
                if(element.deviceID === sensorID){
                    tankData.push({
                        ID: element.deviceID,
                        timeStamp: element.timeStamp,
                        battery: element.battery
                    });
                }
            });
            return resolve(tankData);
        });
    }

    public getTankStateById(id: number): Promise<any>{
        const sensorID = Number(id);
        let tankData = [];
        return new Promise((resolve) => {
            this.data.forEach(element => {
                if(element.deviceID === sensorID){
                    tankData.push({
                        ID: element.deviceID,
                        timeStamp: element.timeStamp,
                        tankState: element.tankState
                    });
                }
            });
            return resolve(tankData);
        });
    }
}

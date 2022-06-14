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
                    x: element.timeStamp,
                    y: element.battery
                });
            });
            batteryData.sort(function(a, b){
                return a.x - b.x;
            });
            return resolve(batteryData);
        });
        
    }

    public getTankstateData(): Promise<any>{
        let tankData = [];
        return new Promise((resolve) => {
            this.data.forEach(element => {
                tankData.push({
                    x: element.timeStamp,
                    y: element.tankState
                });
            });
            tankData.sort(function(a, b){
                return a.x - b.x;
            });

            return resolve(tankData);    
        });
    }

    public getBatteryById(id: number): Promise<any>{
        const sensorID = Number(id);
        let batteryData = [];
        return new Promise((resolve) => {
            this.data.forEach(element => {
                if(element.deviceID === sensorID){
                    batteryData.push({
                        ID: element.deviceID,
                        x: element.timeStamp,
                        y: element.battery
                    });
                }
            });
            batteryData.sort(function(a, b){
                return a.x - b.x;
            });
            return resolve(batteryData);
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
                        x: element.timeStamp,
                        y: element.tankState
                    });
                }
            });
            tankData.sort(function(a, b){
                return a.x - b.x;
            });
            return resolve(tankData);
        });
    }
}

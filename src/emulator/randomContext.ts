import {devices} from 'playwright';
import {rand} from "./utility";

export default function (browserType = null) {

    const randomDevice = (browser = null) => {
        let validDevices = [];
        let validDevicesName = [];
        for (const device in devices) {

            if ((device.indexOf("iPhone") === -1
                && device.indexOf("Galaxy") === -1)
                || device.indexOf("landscape") !== -1
            ) {
                continue;
            }

            if ((devices[device].defaultBrowserType === browser || !browser) && devices[device].isMobile === true) {
                validDevices.push(devices[device]);
                validDevicesName.push(device);
            }
        }

        const id = Math.floor(validDevices.length * Math.random());
        return validDevices[id];
    };

    const longitude = Number(`${rand(10, 50)}.${rand(10000, 99999)}1`);
    const latitude = Number(`${rand(10, 50)}.${rand(10000, 99999)}1`);
    const device = randomDevice();

    if (browserType === 'firefox' && typeof device !== 'undefined') {
        device.isMobile = false;
    }

    return {
        ...device,
        locale: 'en-US',
        geolocation: {longitude: longitude, latitude: latitude},
        permissions: ['geolocation']
    };
}
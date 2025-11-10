require('dotenv').config();

const config = {
    PLATFORM_VERSION: process.env.PLATFORM_VERSION || '13',
    DEVICE_NAME: process.env.DEVICE_NAME || 'Android Emulator',
};

module.exports = config;
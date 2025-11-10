module.exports = {
    async swipeUp(times = 1) {
        const { height, width } = await driver.getWindowSize();
        for (let i = 0; i < times; i++) {
            await driver.touchPerform([
                { action: 'press', options: { x: width / 2, y: height * 0.8 } },
                { action: 'wait', options: { ms: 300 } },
                { action: 'moveTo', options: { x: width / 2, y: height * 0.2 } },
                { action: 'release' }
            ]);
            await driver.pause(1000);
        }
    },

    async swipeLeft() {
        const { height, width } = await driver.getWindowSize();
        await driver.touchPerform([
            { action: 'press', options: { x: width * 0.8, y: height / 2 } },
            { action: 'wait', options: { ms: 300 } },
            { action: 'moveTo', options: { x: width * 0.2, y: height / 2 } },
            { action: 'release' }
        ]);
    },

    async seekToPosition(element, percentage) {
        const rect = await element.getRect();
        const x = rect.x + (rect.width * percentage);
        const y = rect.y + rect.height / 2;
        await driver.touchPerform([
            { action: 'press', options: { x, y } },
            { action: 'release' }
        ]);
    }
};

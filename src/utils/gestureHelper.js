export async function swipeUp(times = 1) {
    const { height, width } = await driver.getWindowSize();
    for (let i = 0; i < times; i++) {
        await driver.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: Math.round(width / 2), y: Math.round(height * 0.8) },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 300 },
                    { type: 'pointerMove', duration: 600, x: Math.round(width / 2), y: Math.round(height * 0.2) },
                    { type: 'pointerUp', button: 0 }
                ]
            }
        ]);
        await driver.releaseActions();
        await driver.pause(1000);
    }
}
export async function swipeLeft() {
    const { height, width } = await driver.getWindowSize();
    await driver.performActions([
        {
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: Math.round(width * 0.8), y: Math.round(height / 2) },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 300 },
                { type: 'pointerMove', duration: 600, x: Math.round(width * 0.2), y: Math.round(height / 2) },
                { type: 'pointerUp', button: 0 }
            ]
        }
    ]);
    await driver.releaseActions();
}
export async function seekToPosition(element, percentage) {
    const rect = await element.getRect();
    const x = Math.round(rect.x + (rect.width * percentage));
    const y = Math.round(rect.y + rect.height / 2);
    await driver.performActions([
        {
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x, y },
                { type: 'pointerDown', button: 0 },
                { type: 'pointerUp', button: 0 }
            ]
        }
    ]);
    await driver.releaseActions();
}

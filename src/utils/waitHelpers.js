module.exports = {
    async waitForVisible(element, timeout = 10000) {
        await element.waitForDisplayed({ timeout });
    },

    async waitForClickable(element, timeout = 10000) {
        await element.waitForClickable({ timeout });
    },
};

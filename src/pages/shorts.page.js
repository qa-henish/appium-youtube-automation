class ShortsPage {
    get shortTab() { return $('//android.widget.Button[@content-desc="Shorts"]'); }

    get shortBottomSection() { return $('//android.view.View[@resource-id="com.google.android.youtube:id/reel_scrim_shorts_while_bottom_gradient"]') }

    get likeShortBtn() { return $('//android.view.ViewGroup[@content-desc="Like this video"]/android.view.ViewGroup') }

    /*===========================================*/
    /*               Page Actions                */
    /*===========================================*/


    /**
     * Click on the shorts tab
     */
    async navigateToShortsTab() {
        await this.shortTab.click();
    }

    /**
     * Check if the short progress bar is displayed
     */
    async checkShortIsPlaying() {
        await this.shortBottomSection.waitForDisplayed();
        await expect(this.shortBottomSection).toBeDisplayed();

        return true;
    }

    async clickLikeShortBtn() {
        await this.likeShortBtn.click();
    }
}

export default new ShortsPage();
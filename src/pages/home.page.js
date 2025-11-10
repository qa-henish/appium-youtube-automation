class HomePage {
    get youtubeLogo() { return $('~YouTube'); }

    get castButton() { return $('~Cast'); }

    get castModal() {
        return $('//android.widget.TextView[@resource-id="com.google.android.youtube:id/device_picker_section_header_title"]');
    }

    get searchButton() { return $('~Search'); }

    /*===========================================*/
    /*               Page Actions                */
    /*===========================================*/

    /**
     * Check if the YouTube logo is displayed
     */
    async checkYouTubeLogo() {
        await this.youtubeLogo.waitForDisplayed();
        await expect(this.youtubeLogo).toBeDisplayed();
    }

    /**
     * Open the search page
     */
    async openSearch() {
        await this.searchButton.waitForDisplayed();
        await this.searchButton.click();
    }

    /**
     * Open the cast modal
     */
    async openCast() {
        await this.castButton.waitForDisplayed();
        await expect(this.castButton).toBeDisplayed();

        await this.castButton.click();

        await this.castModal.waitForDisplayed();
        await expect(this.castModal).toBeDisplayed();
    }

}

export default new HomePage();

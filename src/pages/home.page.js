class HomePage {
    get youtubeLogo() { return $('~YouTube'); }

    get castButton() { return $('~Cast'); }

    get castModal() {
        return $('//android.widget.TextView[@resource-id="com.google.android.youtube:id/device_picker_section_header_title"]');
    }

    get outSideTouchOfCastModal() {
        return $('//android.view.View[@resource-id="com.google.android.youtube:id/touch_outside"]');
    }

    get searchButton() { return $('~Search'); }

    get searchBar() {
        return $('//android.widget.EditText[@resource-id="com.google.android.youtube:id/search_edit_text"]')
    }

    get backButton() { return $('~Navigate up'); }

    get filters() { return $('~filters'); }

    /*===========================================*/
    /*               Page Actions                */
    /*===========================================*/

    /**
     * Check if the YouTube logo is displayed
     */
    async checkYouTubeLogo() {
        await this.youtubeLogo.waitForDisplayed();
        console.log(this.youtubeLogo.waitForDisplayed())
        await expect(this.youtubeLogo).toBeDisplayed();
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

    /**
     * Close the cast modal
     */
    async closeCast() {
        await this.outSideTouchOfCastModal.waitForDisplayed();
        await expect(this.outSideTouchOfCastModal).toBeDisplayed();

        await this.outSideTouchOfCastModal.click();

        await this.castModal.waitForDisplayed({ reverse: true });
        await expect(this.castModal).not.toBeDisplayed();
    }

    /**
    * Open the search page
    */
    async openSearch() {
        await this.searchButton.waitForDisplayed();
        await expect(this.searchButton).toBeDisplayed();

        await this.searchButton.click();
        await expect(this.searchBar).toBeDisplayed();
    }

    /**
    * Close the search page
    */
    async closeSearch() {
        await this.backButton.waitForDisplayed();
        await expect(this.backButton).toBeDisplayed();

        await this.backButton.click();

        await this.searchBar.waitForDisplayed({ reverse: true });
        await expect(this.searchBar).not.toBeDisplayed();
    }

    async isFiltersDisplayed() {
        await this.filters.waitForDisplayed();
        await expect(this.filters).toBeDisplayed();
    }
}

export default new HomePage();

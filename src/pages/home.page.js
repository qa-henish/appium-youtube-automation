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

    get feedSection() { return $('//android.view.ViewGroup[@index="0"]'); }

    get tabBar() { return $('//android.widget.HorizontalScrollView[@resource-id="com.google.android.youtube:id/pivot_bar"]'); }

    get homeTab() { return $('//android.widget.Button[@content-desc="Home"]'); }

    get shortTab() { return $('//android.widget.Button[@content-desc="Shorts"]'); }

    get subscriptionTab() { return $('//android.widget.Button[@index="3"]'); }

    get profileTab() { return $('//android.widget.Button[@content-desc="You"]'); }

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

    /**
    * Check if the filters are displayed
    */
    async isFiltersDisplayed() {
        await this.filters.waitForDisplayed();
        await expect(this.filters).toBeDisplayed();
    }

    /**
    * Check if the feed section is displayed
    */
    async isFeedSectionDisplayed() {
        await this.feedSection.waitForDisplayed();
        await expect(this.feedSection).toBeDisplayed();
        return true;
    }

    /**
    * Check if the tab bar is displayed
    */
    async isTabBarDisplayed() {
        await this.tabBar.waitForDisplayed();
        await expect(this.tabBar).toBeDisplayed();
        return true;
    }

    /**
    * Check if the home tab is displayed
    */
    async isHomeTabDisplayed() {
        await this.homeTab.waitForDisplayed();
        await expect(this.homeTab).toBeDisplayed();
        return true;
    }

    async isShortTabDisplayed() {
        await this.shortTab.waitForDisplayed();
        await expect(this.shortTab).toBeDisplayed();
        return true;
    }

    async isSubscriptionTabDisplayed() {
        await this.subscriptionTab.waitForDisplayed();
        await expect(this.subscriptionTab).toBeDisplayed();
        return true;
    }

    async isLibraryTabDisplayed() {
        await this.libraryTab.waitForDisplayed();
        await expect(this.libraryTab).toBeDisplayed();
        return true;
    }

    async isProfileTabDisplayed() {
        await this.profileTab.waitForDisplayed();
        await expect(this.profileTab).toBeDisplayed();
        return true;
    }

    /**
    * Click on the home tab
    */
    async clickOnHomeTab() {
        await this.homeTab.click();
    }

    async clickOnShortTab() {
        await this.shortTab.click();
    }

    async clickOnSubscriptionTab() {
        await this.subscriptionTab.click();
    }

    async clickOnProfileTab() {
        await this.profileTab.click();
    }
}

export default new HomePage();

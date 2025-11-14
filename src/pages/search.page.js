class SearchPage {
    get homeTab() { return $('//android.widget.Button[@content-desc="Home"]'); }

    get searchButton() { return $('~Search'); }

    get searchBar() {
        return $('//android.widget.EditText[@resource-id="com.google.android.youtube:id/search_edit_text"]')
    }

    /**
     * navigate to Home tab
     */
    async navigateToHomeTab() {
        await this.homeTab.click();
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
     * Search the video of the appium tutorial
     */
    async searchVideo() {
        await this.searchBar.setValue('Appium Tutorial');
        // Press the Enter/Return key on Android
        await driver.keys('Enter');
    }
}

export default new SearchPage();
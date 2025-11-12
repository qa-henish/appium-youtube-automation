import HomePage from "../pages/home.page";
import { swipeUp } from "../utils/gestureHelper";

/*===========================================*/
/*               Test Cases                  */
/*===========================================*/
describe('Logo', () => {
    it('should check YouTube logo', async () => {
        try {
            await HomePage.checkYouTubeLogo();
        } catch (error) {
            console.log(error);
        }
    });
});

describe('Cast', () => {
    it('should open & close cast', async () => {
        try {
            await HomePage.openCast();
            await HomePage.closeCast();
        } catch (error) {
            console.log(error);
            throw error;
        }
    });

    describe('Search', () => {
        it('should open & close search', async () => {
            try {
                await HomePage.openSearch();
                await HomePage.closeSearch();
            } catch (error) {
                console.log(error);
                throw error;
            }
        });
    });

    describe('Filters', () => {
        it('should check filters', async () => {
            try {
                await HomePage.isFiltersDisplayed();
            } catch (error) {
                console.log(error);
                throw error;
            }
        });
    });

    describe('Feed', () => {
        it('should check feed section', async () => {
            try {
                const feedSection = await HomePage.isFeedSectionDisplayed();
                // Scroll the screen if feedsection visible
                if (feedSection) {
                    await swipeUp();
                }
            } catch (error) {
                console.log(error);
                throw error;
            }
        });
    });

    describe('Tab Bar', () => {
        it('should check tab bar', async () => {
            try {
                const tabBar = await HomePage.isTabBarDisplayed();
                const homeTab = await HomePage.isHomeTabDisplayed();
                const shortTab = await HomePage.isShortTabDisplayed();
                const subscriptionTab = await HomePage.isSubscriptionTabDisplayed();
                const profileTab = await HomePage.isProfileTabDisplayed();


                // Check if tab bar, so check in that displaying the tabs like home,shorts, subscription, profile
                if (tabBar) {
                    if (homeTab) {
                        await HomePage.clickOnHomeTab();
                    }
                    if (shortTab) {
                        await HomePage.clickOnShortTab();
                    }
                    if (subscriptionTab) {
                        await HomePage.clickOnSubscriptionTab();
                    }
                    if (profileTab) {
                        await HomePage.clickOnProfileTab();
                    }
                }
            } catch (error) {
                console.log(error);
                throw error;
            }
        });
    });
});


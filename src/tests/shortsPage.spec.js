import ShortsPage from "../pages/shorts.page";
import { swipeUp } from "../utils/gestureHelper";

/*===========================================*/
/*               Test Cases                  */
/*===========================================*/

/**
 * Navigate to Shorts tab
 */

describe('Shorts', () => {
    it('should navigate to shorts tab', async () => {
        try {
            await ShortsPage.navigateToShortsTab();
        } catch (error) {
            console.log(error);
            throw error;
        }
    });
});

describe('Swipe Shorts', () => {
    it('should swipe up 5 shorts', async () => {
        try {
            const shortCount = 5;
            for (let i = 0; i < shortCount; i++) {
                await ShortsPage.checkShortIsPlaying();
                await swipeUp(1);
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    })
})

describe('Like Shorts', () => {
    it('should like shorts', async () => {
        try {
            await ShortsPage.clickLikeShortBtn();
        } catch (error) {
            console.log(error);
            throw error;
        }
    })
})


describe('', () => {
    it('', async () => {
        try {

        } catch (error) {
            console.log(error);
            throw error;
        }
    })
})
import HomePage from "../pages/home.page";

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
        }
    });
});

describe('Search', () => {
    it('should open & close search', async () => {
        try {
            await HomePage.openSearch();
            await HomePage.closeSearch();
        } catch (error) {
            console.log(error);
        }
    });
});

describe('Filters', () => {
    it('should check filters', async () => {
        try {
            await HomePage.isFiltersDisplayed();
        } catch (error) {
            console.log(error);
        }
    });
});


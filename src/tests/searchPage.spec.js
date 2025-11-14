import searchPage from "../pages/search.page"

describe('Navigate to Home Tab', () => {
    it('Should navigate to Home screen', async () => {
        try {
            await searchPage.navigateToHomeTab()
        } catch (error) {
            console.log(error);
            throw error;
        }
    })
})

describe('Search', () => {
    it('should open & close search', async () => {
        try {
            await searchPage.openSearch();
        } catch (error) {
            console.log(error);
            throw error;
        }
    });
});

describe('Search Query', () => {
    it('should search query', async () => {
        try {
            await searchPage.searchVideo();
        } catch (error) {
            console.log(error);
            throw error;
        }
    });
})
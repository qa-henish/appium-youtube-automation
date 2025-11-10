import { checkYouTubeLogo, openCast } from "../pages/home.page";

/*===========================================*/
/*               Test Cases                  */
/*===========================================*/
describe('Home Page', () => {
    it('should check YouTube logo', async () => {
        await checkYouTubeLogo();
    });
});

describe('Cast', () => {
    it('should open cast', async () => {
        await openCast();
    });
});

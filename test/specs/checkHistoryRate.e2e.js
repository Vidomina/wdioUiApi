import Api from '../helpers/apiHelper.js';
import BasicAuthPage from '../pageobjects/basicAuth.page.js';
let uiResult;
let apiResult;

describe('My test', () => {
    it('should display text', async () => {
       await BasicAuthPage.open();
       uiResult = await BasicAuthPage.header.getText();
       expect(uiResult).toHaveText('Congratulations! You must have the proper credentials.');
    })

    it('should get info from API', async () => {
        apiResult = await Api.getRequest();
    })

    it('should not be the same', async () => {
        expect(uiResult[1]).not.toBe(apiResult);
    })
})




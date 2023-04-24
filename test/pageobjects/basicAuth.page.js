import { basicAuthUsername, basicAuthPassword } from "../../credentials.js";
import Page from "./page.js";

class BasicAuth extends Page {

    get header () { return $('#content')}

    open () {
        return browser.url(`https://${basicAuthUsername}:${basicAuthPassword}@the-internet.herokuapp.com/basic_auth`);
    }

}

export default new BasicAuth();
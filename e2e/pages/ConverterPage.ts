import {BasePage} from "./BasePage";
import {Page} from "@playwright/test";

export class ConverterPage extends BasePage {

    constructor(readonly page: Page) {
        super(page);
    }

    readonly title = this.page.getByRole("heading");
    readonly inputField = this.page.getByTestId("time-input");
    readonly convertButton = this.page.getByTestId("convert-button");
    readonly result = this.page.getByTestId("result-text");
    readonly authorNote = this.page.getByTestId("made-with-love");
    readonly linkToMyPage = this.page.getByTestId("link-to-my-page");

    async getTitle() {
        return this.title.textContent();
    }

    async fillInput(value: string) {
        await this.inputField.fill(value);
    }

    async clickConvertButton() {
        await this.convertButton.click();
    }

    async getConvertedTime() {
        return this.result.textContent();
    }

    async getAuthorNote() {
        return this.authorNote.textContent();
    }

    async isConvertButtonDisabled() {
        return this.convertButton.isDisabled();
    }

    async goToMyPage() {
        await this.linkToMyPage.click();
    }

    async convert(value: string) {
        await this.fillInput(value);
        await this.clickConvertButton();
        return this.getConvertedTime();
    }
}
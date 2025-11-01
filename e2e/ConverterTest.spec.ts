import { test, expect } from '@playwright/test';
import { ConverterPage} from "./pages/ConverterPage";



test.describe('Converter tests', () => {

    test.beforeEach(async ({page}) => {
        const converterPage = new ConverterPage(page)
        await converterPage.gotoHomepage()
    })

    test('Convert button is disabled for empty input', async ({page}) => {
        const converterPage = new ConverterPage(page)

        await test.step('Given I am on the converter page', async () => {
            await converterPage.getTitle()
        })

        await test.step('Then Convert button is disabled', async () => {
            const isButtonDisabled = await converterPage.isConvertButtonDisabled()
            expect(isButtonDisabled).toBeTruthy()
        })
    });

    test('Converter can convert timestamp to date', async ({page}) => {
        const converterPage = new ConverterPage(page)

        await test.step('Given I am on the converter page', async () => {
            await converterPage.getTitle()
        })

        await test.step('When I type a correct value into input field', async () => {
            await converterPage.fillInput("1761991725")
        });

        await test.step('And I click in a Convert button', async () => {
            await converterPage.clickConvertButton()
        })

        await test.step('Then I can see the converted date', async () => {
            const result = await converterPage.getConvertedTime()
            expect(result).toEqual('"2025-11-01 10:08:45"')
        })
    });

    test('Converter can convert date to timestamp', async ({page}) => {
        const converterPage = new ConverterPage(page)

        await test.step('Given I am on the converter page', async () => {
            await converterPage.getTitle()
        })

        await test.step('When I type a correct value into input field', async () => {
            await converterPage.fillInput("2025-11-01 10:08:45")
        });

        await test.step('And I click in a Convert button', async () => {
            await converterPage.clickConvertButton()
        })

        await test.step('Then I can see the converted date', async () => {
            const result = await converterPage.getConvertedTime()
            expect(result).toEqual("1761991725")
        })
    });

    test('Converter app looks awesome', async ({page}) => {
        const converterPage = new ConverterPage(page)

        await test.step('Given I am on the converter page', async () => {
            const title = await converterPage.getTitle()
            expect(title).toStrictEqual("Unix Timestamp Converter")
        })

        await test.step('Then author note is correct', async () => {
            const note = await converterPage.getAuthorNote()
            expect(note).toEqual('Made with love by jaroslavmedek.cz.')
        })

        await test.step('And link to my page is clickable', async () => {
            await converterPage.goToMyPage()
        })

    });




});


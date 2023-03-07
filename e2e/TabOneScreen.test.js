describe('Tab One screen', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('"TAB ONE " title should be visible', async () => {
    await expect(element(by.id('texto-uno'))).toBeVisible()
  })
})

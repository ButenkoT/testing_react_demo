module.exports = {
  'step one: Test for component appears on the screen': function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', 1000)
      .assert.containsText('header', 'Hello SydJS')
      .assert.containsText('footer', 'Tanya Butenko 2015')
  },

  'step two: Test for submitted comment in the input appears on the screen': function (browser) {
    browser
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'star wars')
      .waitForElementVisible('button[type=submit]', 1000)
      .click('button[type=submit]')
      .pause(1000)
      .assert.containsText('ul', 'star wars')
  },

  'step three: Test for increment button increment count by 1': function (browser) {
    browser
      .assert.containsText('.counter', 'Count: 0')
      .waitForElementVisible('button[type=button]', 1000)
      .click('button[type=button]')
      .pause(1000)
      .assert.containsText('.counter', 'Count: 1')
      .waitForElementVisible('button[type=button]', 1000)
      .click('button[type=button]')
      .pause(1000)
      .assert.containsText('.counter', 'Count: 2')
      .end();
  }
};

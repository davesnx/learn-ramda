import { Selector } from 'testcafe'
import { waitForReact, ReactSelector } from 'testcafe-react-selectors'

const config = {
  HOST: 'localhost:3001'
}

fixture``.page`${config.HOST}`.beforeEach(async () => {
  await waitForReact()
})

test('I can see public third party bets on my feed', async t => {
  await t.click(ReactSelector('select-type'))
  await t.click(Selector('#react-select-2-option-0'))
})

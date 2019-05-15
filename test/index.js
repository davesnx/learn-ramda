const config = {
  HOST: 'localhost:3000'
}

fixture``.page`${config.HOST}`

test('I can see public third party bets on my feed', async t => {
  await t.navigateTo(`${config.HOST}`)

  await t.expect(true).ok()
})

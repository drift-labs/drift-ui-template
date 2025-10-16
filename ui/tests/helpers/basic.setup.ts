import { defineWalletSetup } from '@synthetixio/synpress-cache'
import { Phantom } from '@synthetixio/synpress/playwright'

const SEED_PHRASE = ""
const PASSWORD = process.env.SYNPRESS_WALLET_PASSWORD || 'Tester@1234'

export default defineWalletSetup(PASSWORD, async (context, walletPage) => {
  const phantom = new Phantom(context, walletPage, PASSWORD)
  await phantom.importWallet(SEED_PHRASE)
})

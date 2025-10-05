import { testWithSynpress } from '@synthetixio/synpress-core'
import { phantomFixtures, Phantom} from '@synthetixio/synpress/playwright'
import basicSetup from '../helpers/basic.setup'


// 👇 Load forced cache ID from env var
const forcedCacheId = process.env.SYNPRESS_CACHE_ID || ''

// Build a base test with Synpress + Phantom
export const test = testWithSynpress(
  phantomFixtures({
    hash: forcedCacheId,
    fn: basicSetup.fn,
    walletPassword: basicSetup.walletPassword,
  })
)


// Export Playwright’s expect for convenience
export const { expect } = test

// Helper to create a Phantom instance for tests
export async function createPhantomWallet(context: any, phantomPage: any, extensionId: string) {
  return new Phantom(context, phantomPage, basicSetup.walletPassword, extensionId)
}

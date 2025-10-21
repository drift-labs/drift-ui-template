#!/bin/bash
# Root of your project (adjust if needed)
PROJECT_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
ENV_FILE="$PROJECT_ROOT/.env.local"

# Load all env vars
set -o allexport
source "$ENV_FILE"
set +o allexport

# List all seed phrase variables
SEED_VARS=(SEED_PHRASE_0 SEED_PHRASE_1 SEED_PHRASE_2 SEED_PHRASE_3 SEED_PHRASE_4 SEED_PHRASE_5)

# Iterate over each seed phrase
for i in "${!SEED_VARS[@]}"; do
  SEED=${!SEED_VARS[$i]}
  echo "Generating wallet cache for seed phrase $i"

  # Rewrite basic.setup.ts dynamically
  cat > "$PROJECT_ROOT/tests/helpers/basic.setup.ts" <<EOL
import { defineWalletSetup } from '@synthetixio/synpress-cache'
import { Phantom } from '@synthetixio/synpress/playwright'

const SEED_PHRASE_$i = "$SEED"
const PASSWORD = process.env.SYNPRESS_WALLET_PASSWORD || 'Tester@1234'

export default defineWalletSetup(PASSWORD, async (context, walletPage) => {
  const phantom = new Phantom(context, walletPage, PASSWORD)
  await phantom.importWallet(SEED_PHRASE_$i)
})
EOL

  # Generate the cache
  npx synpress tests/helpers --phantom --force

  echo "✅ Wallet cache generated for seed phrase $i"
done

echo "All wallet caches generated."

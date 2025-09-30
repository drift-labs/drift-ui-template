#!/bin/bash
# Make sure the reports folder exists
mkdir -p reports

# Generate a timestamp for this run
TS=$(date +%Y%m%d-%H%M%S)

# Allow commands to continue even if a test fails
set +e

# Function to run a test and save its report in a unique folder
run_test() {
  local CACHE_ID=$1
  local SPEC=$2
  local GREP=$3
  local REPORT_DIR="reports/${GREP}-${TS}"

  mkdir -p "$REPORT_DIR"
  echo "Running $GREP..."
  SYNPRESS_CACHE_ID=$CACHE_ID npx playwright test "$SPEC" -g "$GREP" --headed --project=chromium --reporter=json --output="$REPORT_DIR"
}

# Run all tests
run_test "3624427f5f067918a2d7" "create-account-deposit.spec.ts" "TC-CA-001"
run_test "5fad61cadec6898954df" "create-account-deposit.spec.ts" "TC-CA-002"
run_test "372601743e514664ca3e" "create-account-deposit.spec.ts" "TC-CA-003"
run_test "372601743e514664ca3e" "create-account-deposit.spec.ts" "TC-CA-004"
run_test "372601743e514664ca3e" "place-limit-order.spec.ts" "TC-PL-001"
run_test "372601743e514664ca3e" "place-limit-order.spec.ts" "TC-PL-002"
run_test "372601743e514664ca3e" "place-limit-order.spec.ts" "TC-PL-003"
run_test "372601743e514664ca3e" "place-limit-order.spec.ts" "TC-GEN-001"
run_test "fbb8f412a11c037fe259" "place-limit-order.spec.ts" "TC-PL-004"

# Show merged report for all tests
npx playwright show-report reports/*

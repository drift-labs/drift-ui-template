export const TIMEOUTS = {
    SHORT: 5000,
    MEDIUM: 10000,
    LONG: 30000,
    EXTRA_LONG: 60000
} as const;

export const WALLETS = {
    PHANTOM: 'Phantom',
    METAMASK: 'MetaMask',
} as const;

export const PERPETUALS_VALUE = {
    SOL_PERP: 'SOL-PERP (SOL)',
    BTC_PERP: 'BTC-PERP (BTC)',
    ETH_PERP: 'ETH-PERP (ETH)',
    APT_PERP: 'APT-PERP (APT)',
} as const;

export type Asset = 'USDC' | 'SOL' | 'BTC' | 'PYUSD' | 'Bonk' | 'JLP';

export type OrderTypeValue = 'market' | 'limit' | 'takeProfit' | 'stopLoss' | 'oracleLimit';

export type SizeType = 'base' | 'quote';

export type OrderDirection = 'Long' | 'Short';

export const SELECTORS = {
    COMMON: {
        CONNECT_WALLET_BUTTON: '//button[@class=\'wallet-adapter-button wallet-adapter-button-trigger\']',
        ERROR_MESSAGE: 'errorMsg',
        SUCCESS_MESSAGE: '[data-testid="success-message"]'
    },
    HOME: {
        ORDER_BOOK: 'orderBookTitle',
        PLACE_ORDER_BUTTON: '[data-testid="place-order-btn"]',
        ORDER_FORM: '[data-testid="order-form"]',
        PRICE_INPUT: 'priceInput',
        AMOUNT_INPUT: 'amountInput',
        ORDER_TYPE_SELECT: '[data-testid="order-type-select"]',
        LIMIT_ORDER_BUTTON_MENU: 'limitBtn',
        CREATE_ORDER_BUTTON_MODAL: 'createOrderButton',
        NOTIFICATION_TOAST: 'notification',
        OPEN_ORDERS_TITLE_DASHBOARD: 'openOrdersTitle',
        CANCEL_ORDER_BUTTON_DASHBOARD: 'cancelOrderBtn'
    },
    USER: {
        AMOUNT_INPUT: '//input[@data-slot=\'input\']',
        MAIN_ACCOUNT_LABEL: '//p[@class=\'text-white font-medium\']',
        TWO_FA_CODE_INPUT: '#tfaCode',
        SUBMIT_BUTTON: 'button[type=\'submit\']',
    },
    PERPETUALS: {
        MARKET_DROPDOWN: '//label[contains(text(),"Select Market")]/following-sibling::button',
        ORDER_TYPE_SELECT: '//label[contains(text(),"Order Type")]/following-sibling::select',
        SIZE_TYPE_SELECT: '//label[contains(text(),"Size Type")]/following-sibling::select',
        LOGOUT_BUTTON: 'accountMenuLogOut',
        SPOT_HEADER_MENU: 'navigationItem-spot',
        FUTURES_HEADER_MENU: 'navigationItem-futures',
        OPTIONS_HEADER_MENU: 'navigationItem-options',
    }
} as const;

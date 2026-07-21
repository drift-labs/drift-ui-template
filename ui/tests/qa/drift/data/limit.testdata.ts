
// TODO: The wallet ID and key and should be stored in a secrets file. In the future, they need to be moved there
export const walletType = 'Phantom';
export const extensionId = '2jxk6vBcWf3p4Uv1imbyHhQVrNw7NqkUqKLYC1LPXdpq';
export const recoveryPhrase = ['mom', 'usual', 'doctor', 'emerge', 'afraid', 'planet', 'endless', 'position', 'oven', 'ridge', 'poem', 'purity'];

export interface ILimitOrderTestdata {
    assetPair: string
    tradeType: string
    orderType: string
    limitSize: string
    limitPrice: string
    tradeMode: string
    takeProfitPrice?: string
    stopLossPrice?: string
}

// We use this method so that we can easily extend the test data for future deposit and withdrawal flows, making it possible to incorporate parameterized values.
export function generateLimitOrderTestData() {
    const limitTestdata: ILimitOrderTestdata[] = [
        {
            assetPair: 'SOL-PERP (SOL)',
            tradeType: 'LONG',
            orderType: 'Limit',
            limitSize:  '20',
            limitPrice: '22.0000',
            tradeMode: 'Reduce Only',
        },
    ];
    return limitTestdata;
}

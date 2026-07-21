
// TODO: The wallet ID and key and should be stored in a secrets file. In the future, they need to be moved there
export const extensionId = 'FSjShGiWKiks9vPm4Bj2aWjqeBqiWjq9eybq7DC1JdGB';
export const recoveryPhrase = ['pave','walk','clump','museum','code','napkin','you','stone','visual','screen','undo','lizard'];

export interface IDepositTestdata {
    asset: string
    amount: string
    walletType: string

}

// We use this method so that we can easily extend the test data for future deposit and withdrawal flows, making it possible to incorporate parameterized values.
export function generateDepositTestData() {
    const depositTestdata: IDepositTestdata[] = [
        {
            asset: 'SOL',
            amount: '0.01',
            walletType:  'Phantom',
        },
    ];
    return depositTestdata;
}

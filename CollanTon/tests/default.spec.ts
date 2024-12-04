import { Blockchain, SandboxContract } from '@ton/sandbox';
import { toNano } from '@ton/core';
import { BlankContract } from '../dist/tact_BlankContract';
import '@ton/test-utils';

describe('BlankContract', () => {
let blockchain: Blockchain;
let blankContract: SandboxContract<BlankContract>;

beforeEach(async () => {
    blockchain = await Blockchain.create();

    blankContract = blockchain.openContract(await BlankContract.fromInit());

    const deployer = await blockchain.treasury('deployer');

    const deployResult = await blankContract.send(
        deployer.getSender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    expect(deployResult.transactions).toHaveTransaction({
        from: deployer.address,
        to: blankContract.address,
        deploy: true,
        success: true,
    });
});

it('should deploy', async () => {
    // the check is done inside beforeEach
    // blockchain and blankContract are ready to use
});
});

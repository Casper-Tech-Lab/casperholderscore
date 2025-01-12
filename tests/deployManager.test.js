import {AddBidResult, ClientCasper, CurrencyUtils, DeployManager, DeployResult, STATUS_KO, STATUS_OK} from "../src";

test('Test getDeployResult KO', async () => {
    const casperClient = new ClientCasper("https://node.testnet.casperholders.com")
    const deployManager = new DeployManager(casperClient)
    let addBidResult = new AddBidResult("f18b96f9b227983750a387279b85fadb99cd097f2a6f9cca09d979b470eb574d")
    addBidResult = await deployManager.getDeployResult(addBidResult)
    expect(addBidResult.status).toBe(STATUS_KO);
});

test('Test getDeployResult OK', async () => {
    const casperClient = new ClientCasper("https://node.testnet.casperholders.com")
    const deployManager = new DeployManager(casperClient)
    let addBidResult = new AddBidResult("63c078cd598643c2d8c46d57fa37bb4615b93ece67ed32bd704fd5b8425978d7")
    addBidResult = await deployManager.getDeployResult(addBidResult)
    expect(addBidResult.status).toBe(STATUS_OK);
});
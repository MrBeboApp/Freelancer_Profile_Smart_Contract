
const CampaignFactory = artifacts.require("CampaignFactory");
const Campaign = artifacts.require("Campaign");


contract("CampaignFactory",( accounts) => {


let campaignFactory;
let factoryAddress;
let campaignAddress;
let campaign;

before("before start deployment",async ()=>{
    campaignFactory = await CampaignFactory.deployed();

});



describe("Deployed",async()=>{
it("deployed successfully",async()=>{
    factoryAddress = await campaignFactory.address
    
    console.log("Factory Adress ))))))"+factoryAddress);

    assert.notEqual(factoryAddress, 0x0);
});

it("create compaign ",async()=>{


    campaign = await campaignFactory.createCampaign.call("100",{
        from:accounts[0],
        gas:1000000
    });
   
    console.log(campaign.manager);
});


it("get Deployed  compaign ",async()=>{


     [deployedCampignes] = await campaignFactory.getDeployedCampaign();
    
    console.log(deployedCampignes);

});


});

// End of the main contract of factory 
 });
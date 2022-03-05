const Web3 = require("web3");
const ganache = require("ganache-cli");

const web3 = new Web3(ganache.provider());

// Get a list of all accounts - promise
beforeEach(() => {
    web3.eth.getAccounts().then((fetchedAccounts) => {
      console.log(fetchedAccounts);
    });
  });
  
  describe("Inbox", () => {
    it("deploys a contract", () => {});
  });
  
// Get a list of all accounts - async
beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
  });
  
  describe("Inbox", () => {
    it("deploys a contract", () => {
      console.log(accounts);
    });
  });
  
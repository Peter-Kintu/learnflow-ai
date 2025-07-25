async function main() {
  // Get the contract factory for LearnFlowToken
  const LearnFlowToken = await ethers.getContractFactory("LearnFlowToken");

  // Deploy the contract
  console.log("Deploying LearnFlowToken...");
  const learnFlowToken = await LearnFlowToken.deploy();

  // Wait for the contract to be deployed
  await learnFlowToken.waitForDeployment();

  // Log the address of the deployed contract
  console.log("LearnFlowToken deployed to:", learnFlowToken.target);

  // You can also verify the contract on Etherscan (or similar block explorer) after deployment
  // For example:
  // console.log("Verifying contract on Etherscan...");
  // await learnFlowToken.deployTransaction.wait(5); // Wait for a few blocks to ensure it's indexed
  // await hre.run("verify:verify", {
  //   address: learnFlowToken.target,
  //   constructorArguments: [], // No constructor arguments for LearnFlowToken
  // });
  // console.log("Contract verified successfully!");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

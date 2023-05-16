module.exports = {
    async onSuccess() {
    console.log("onSuccess: I run on build success " + process.env.WHICH_DEPLOY + " 🎉.");
    console.log(process.env.DEPLOY_URL);
    //  Other logic goes here. Can choose to send an email when deploy == production
  }
  };
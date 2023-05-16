module.exports = {
    async onSuccess() {
      netlifyConfig.build.environment.WHICH_DEPLOY = getDeployStage();
      console.log("onSuccess: I run on build success " + getDeployStage + " 🎉.");
    }
  }
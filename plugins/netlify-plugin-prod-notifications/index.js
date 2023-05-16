// module.exports = {
    // async onSuccess() {
      export const onSuccess = function ({netlifyConfig}){
      netlifyConfig.build.environment.WHICH_DEPLOY = getDeployStage();
      console.log("onSuccess: I run on build success " + getDeployStage + " 🎉.");
    // }
  }
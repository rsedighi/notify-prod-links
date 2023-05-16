module.exports = {
    async onSuccess() {
    console.log("onSuccess: I run on build success " + process.env.WHICH_DEPLOY + " 🎉.");
  
  }
  };
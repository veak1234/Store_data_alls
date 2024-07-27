// TODO
// GET URL https://reqres.in/api/unknown/23

function afterFailed(error){
    console.log(error);
};

axios.get("https://reqres.in/api/unknown/23").catch(afterFailed);

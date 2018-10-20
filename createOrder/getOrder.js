var Cloudant = require('@cloudant/cloudant');
/**
  *
  * main() will be run when you invoke this action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  */
 function main(params) {
  client = new Cloudant({url:"https://d2e564b6-e0fa-4b01-abc5-8183963299fe-bluemix.cloudant.com",
                        plugins: {
                          iamauth:{iamApiKey:"37Pn-vO32bZigYfMvVI5eTYHWf9vVkG4BdsgdDDVvd44"}
                        }});
  orders = client.db.use("orders");
  return new Promise(function(resolve,reject){
    orders.get(params.id, function(err, res) {
      if (err) {
        return reject(err)
      }
      return resolve(res)
    });
  })
}


global.main = main;
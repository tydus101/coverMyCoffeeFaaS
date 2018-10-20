var Cloudant = require('@cloudant/cloudant');
var SHA256 = require("crypto-js/sha256");
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
  newOrder = {
    "_id": SHA256(Date.now().toString()).toString(),
    "gifter_first_name": params.gifter_first_name,
    "gifter_last_name": params.gifter_last_name,
    "card_number": params.card_number,
    "CVV": params.CVV,
    "exp_year": params.exp_year,
    "exp_month": params.exp_month,
    "gift_type": params.gift_type,
    "amount": params.amount
  }
  orders = client.use('orders');
  return new Promise(function(resolve,reject){
    orders.insert(newOrder, function(err, res) {
      if (err) {
        return reject(err)
      }
      return resolve(res)
    });
  })
}


global.main = main;

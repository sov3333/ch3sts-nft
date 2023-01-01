let fs = require('fs');

for (let i=1 ; i<=25 ; i++) {
    let json = {}
    json.name = "Ch3st #" + i;
    json.description = "Ch3sts by Adv3nture.xyz";
    json.image = "ipfs://bafybeig6eoagrxs3noxi5v6muy3bkmmckzfyues7uj24al4khqyiw7fe3y/images/" + i + ".png";
    json.attributes = [
        {
           "display_type" : "boost_percentage",
           "trait_type" : "Yield_Booster",
           "value" : 20
        }
     ]

    fs.writeFileSync("" + i, JSON.stringify(json));
}
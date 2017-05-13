'use strict';
// add you configuration information here 
module.exports = {
    shared: {
    },
 
    development: {
    	redis: {
            port: 3844,
            host: '50.30.35.9',
            pass: '5e6b160sdfcaeb751dfd9c0cb77dbb9a6',
            db: 16
        },
        db: 'mongodb://Muhammed:012580504999@users-shard-00-00-gkxxn.mongodb.net:27017,users-shard-00-01-gkxxn.mongodb.net:27017,users-shard-00-02-gkxxn.mongodb.net:27017/users?ssl=true&replicaSet=users-shard-0&authSource=admin',
                     
        fbPageToken: 'EAACNviSn5IcBALH87C2CUfgXD00If5fdgqDAoDUPu3oq3WyZAyFDe4FVQTLTsI1rMDb2PHul8wCfgsXsjpB4FUlmLgOHZAqO9G8Mtz88zpZC3qmQwFVUCniBokLrsZBHQeZBAx5d0ZAytFKcRzuFlfwlgEsEwLBmV6S62QZDZD',
        fbPageID: '1918584088382046',
        fbWebhookVerifyToken: 'Hello-dude',
        witToken: 'WV4YAKCdfsgHM6ABVQdfgWXNN6RHIU7SKBSKQS'
    },
 
    production: {
        redis: {
            port: 3844,
            host: '50.30.35.9',
            pass: '5e6b16047cdf75191d9c0cb77fbb9a6',
            db: 16
        },
        db: 'mongodb://username:password9@users-shard-00-00-gkxxn.mongodb.net:27017,users-shard-00-01-gkxxn.mongodb.net:27017,users-shard-00-02-gkxxn.mongodb.net:27017/users?ssl=true&replicaSet=users-shard-0&authSource=admin',
                     
        fbPageToken: 'EAACNviSn5IcBALH87C2CUEfsfXD00If5tlM3eqDAoDUPu3oq3WyZAyFDe4FVQTLTsdf2PHul8wCfwxmfXsjpB4FUlmLgOHZAqO9G8Mtz88zpZC3qmQwFVUCniBokLrsZBHQeZBAx5d0ZAytFKcRzuFlfwlgEsEwLBmV6S62QZDZD',
        fbPageID: '1918544488382046',
        fbWebhookVerifyToken: 'Hello-dude',
        witToken: 'WV4YAKCHM6ABVQdfNN6RHIUdfSKBSKQS'

    }
}
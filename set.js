const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.MAKAMESCO-MD<=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0hHT2V4akY3STUycVFlQXdPbENkV3pJZE85ZGFYbzk1NGw1TytxcDQxND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWEovMXF0ekYxM0hSZ1BRUytxRldSYWltaFFBNjVXOUpjUGhWbCtwakdEUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIySHFNQU9JWFFJRWwxb2psS25vb3lWTHNuVzZWWGJHcDdWRmsyMnhsYlZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3eDNwMEZBL1BydXpEODVlY3F5czlLdkF2SVlYSkFSWG1WR09EZHE0Y0ZZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRFeW4wVEcyblBrQml3T0ZMT29vVWpBV2wwbkF1ckRRd2xucE1KL1p0Mmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ino2UDFZY1BDQ1dHU3lTZTBmYWNSMzVBeTZCSlNNL0pzcVFSL0NsNzdwaDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRURWQUZiSDFHVUhXTGkwWXEvU1B2T3Z0M1k0TTJ2WjBwV2JJRTkzeEJtdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUpSTkJYRU1tdWFZM3huemxpYUw3SlBucFpRYlRuQkk1SFNOMzZCK3pDRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imx3L2pEbmpXcVZ4MlFvQ05HWUlvbzJ3ZjNDWFFyc0VLRVF6M0JhVkhEMURxTXBMaFVmMVljdWhxdDhlUHN5NzVhdkFQa0FKV0Y4eFZJSHVjOXozV2hnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAzLCJhZHZTZWNyZXRLZXkiOiIzM2pRb2lLNndFSXRKZ2RsQm1TcGIwdUhMNGNVTGlORHFDR0hEYTZPOUNVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NTc4MDQ0NDcwN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyRDE0OTlGQkZGNEE0OEREODFBRTQwNDU3RUY1M0YxQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUzNTkwMjk0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTU3ODA0NDQ3MDdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDgwMjVBNDk0QTJEQ0Y3NjUyOTRDRjEzQTIxQzdGRkQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MzU5MDI5NX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiRENMQU0yUDQiLCJtZSI6eyJpZCI6IjI1NTc4MDQ0NDcwNzoxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiNzQ4NTM0MjgyODU1NDg6MUBsaWQiLCJuYW1lIjoi8JKGnMKg8J2UvPCdlafwnZWgIPCShpwifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ08zUnlkY0hFSVhVbHNRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlZGOGZzSjgySnhZZ3ZJbW1hbjlXV0laNUNiTEhseXBUdXhOUU8rZ0NsVVU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlJGRVpKRHFLZkwzTjBFM2ZFbUhBR0ZpMFBvK2VSUUFhL3hYRVViS0h5bnorUTh5RVhXQUV6Z3o5UUhtQitETjlWTWFGR0xpMm1NOVdPYW9mMkk4M0F3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJJL1RWcjVmOE9BcmxYWmZiL1ROZE8yT2N6OU42eDRxSDgyZUpicmZwSXF4MjdWVUpKVlZHSGZNY0o2QmVHT0F5SmpOTDlZenh4cldWWkdBTEtCVjZoUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTc4MDQ0NDcwNzoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZSZkg3Q2ZOaWNXSUx5SnBtcC9WbGlHZVFteXg1Y3FVN3NUVUR2b0FwVkYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MzU5MDI5MSwibGFzdFByb3BIYXNoIjoiMkc0QW11IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIZjgifQ==|| 'ezra',
    PREFIXE: process.env.PREFIX || "+",
    GITHUB : process.env.GITHUB|| 'https://github.com/mesh-matheka/Makamesco_md',
    OWNER_NAME : process.env.OWNER_NAME || "Evo",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "255780444707",  
              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "non",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    AUTO_REACT: process.env.AUTO_REACTION || "non",  
     AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
    URL: process.env.URL || "https://files.catbox.moe/39n0nf.jpg",  
    AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || 'non',              
    CHAT_BOT: process.env.CHAT_BOT || "no",              
    AUTO_READ: process.env.AUTO_READ_MESSAGES || "no",
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_HANDLE || 'no', 
    AUTO_REPLY : process.env.AUTO_REPLY || "no", 
    AUTO_STATUS_TEXT: process.env.AUTO_STATUS_TEXT || 'your status have been viewed by Makamesco MD',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',
    AUTO_BIO: process.env.AUTO_BIO || 'yes',       
    ANTI_CALL_TEXT : process.env.ANTI_CALL_TEXT || '',             
    GURL: process.env.GURL  || "https://whatsapp.com/channel/0029VbAEL9r5vKA7RCdnYG0S",
    WEBSITE :process.env.GURL || "https://whatsapp.com/channel/0029VbAEL9r5vKA7RCdnYG0S",
    CHANNEL :process.env.CHANNEL || "https://whatsapp.com/channel/0029VbAEL9r5vKA7RCdnYG0S",
    CAPTION : process.env.CAPTION || "✧MAKAMESCO MD✧",
    BOT : process.env.BOT_NAME || '✧MAKAMAKAMESCO MD✧⁠',
    MODE: process.env.PUBLIC_MODE || "yes",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME || null,
    HEROKU_API_KEY : process.env.HEROKU_API_KEY || null,
    WARN_COUNT : process.env.WARN_COUNT || '5' ,
    ETAT : process.env.PRESENCE || '1',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    LUCKY_ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    ANTI_CALL: process.env.ANTI_CALL || 'no', 
    AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',             
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, 
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

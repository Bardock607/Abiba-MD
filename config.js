const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
    ALIVE_IMG: process.env.ALIVE_IMG || "https://preview.redd.it/4lhrjntqskf81.png?width=640&crop=smart&auto=webp&s=90b5855690e42d275360d1c8c216ad03d54f6af0"
    ALIVE_MSG: process.env.ALIVE_MSG || "Hey, I'm alive >Netti"
};

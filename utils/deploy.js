const request = require('request');
const crypto = require('crypto'); 
const dotenv = require('dotenv')
dotenv.config();



const deploy = async () => {
    
    let NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
    console.log(NEXT_PUBLIC_API_URL);
    dotenv.config({ path: `.env.local` });
    let API_KEY = process.env.API_KEY;
    request.post(
        `${NEXT_PUBLIC_API_URL}/api/apply?hash=${crypto.createHash('md5').update(API_KEY+"apply").digest('hex')}`,
        { json: { key: 'value' } },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body);
            }
        }
    );
}

deploy();
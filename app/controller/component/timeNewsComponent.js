const request = require('request');
const cheerio = require('cheerio');

const self = module.exports = {

    getTimeNews: () => {
    try {
        return new Promise(function (resolve, reject){
            const URL = "http://time.com"; 
            request(URL, function (err, res, body) { 
                    if(err) 
                    { 
                        reject(err);
                    } 
                    else
                    { 
                        const arr = []; 
                        let $ = cheerio.load(body); 
                        for(i = 1; i<= 6; i++) {
                            const obj = { 
                                title : $(`body > div:nth-child(2) > div > div.column.text-align-left.visible-desktop.visible-mobile.last-column > div:nth-child(${i+2}) > div > div > div > a`).text().replace(/\n/g, '').trim(), 
                                link : URL + $(`body > div:nth-child(2) > div > div.column.text-align-left.visible-desktop.visible-mobile.last-column > div:nth-child(${i+2}) > div > div > div > a`).attr('href') 
                            }; 
                            arr.push(obj); 
                        }
                        resolve(arr)
                    } 
                });
            });
        }
        catch (e) {
        console.log(e);
            Promise.reject(e);
        }
    },
};

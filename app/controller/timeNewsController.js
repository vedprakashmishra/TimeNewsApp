const timeNewsComp = require('./component/timeNewsComponent');
module.exports = {
    getTimeNews : function(req, res){
       try {
            timeNewsComp.getTimeNews().then( (data) => {
                res.status(200).send({success: true , message: '', news: data })
            }).catch( (err) => {
                res.status(400).send({success: false , message: err, news: [] })
            });
       }
       catch(err) {
            console.log(err);
            res.status(400).send({success: false , message: err, news: [] })
       }
    },
}
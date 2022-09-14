// **** import ****
let express = require('express');


// **** funcs ****
async function post_action(req, res) {
    // get data from req
    let value1 = await req.body.value1;
    let value2 = await req.body.value2;
    
    // add data to res
    let data_send = await {
        'value1': value1,
        'value2': value2    
    };
    await res.json(data_send);
};


// **** main ****
// create express instanse as app
let app = express();

// set port
app.set('port',(process.env.PORT || 3000));

// enable bodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// define directory of website
app.get('/', (req, res)=>{ res.send('Hello, World'); });
app.post('/api', post_action);

// build server at rocess.env.PORT or 3000
app.listen(app.get('port'), function() {
    console.log('Node app is running at localhost:' + app.get('port'))
});
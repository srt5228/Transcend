const express = require('express')
const path = require('path')
const app = express()

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);

// Serve React files
app.use(express.static(path.join(__dirname, 'client/build')));

// Catch all endpoint to send users who do not hit particular api to react app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


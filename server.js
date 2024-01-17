const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname, 'public');

// Serve static files from the "public" directory
app.use(express.static(publicPath));

app.get('/:page', (req, res) => {
    const requestedPage = req.params.page;
    const filePath = path.join(publicPath, 'components', 'Pages', `${requestedPage}.html`);
    
    res.sendFile(filePath, (err) => {
        if (err) {
            // Handle 404 Not Found
            res.status(404).send('Page Not Found');
        }
    });
});
app.get('/public/Assets/Documents/BoardMeetingJan.pdf', (req, res) => {
    res.contentType("application/pdf");
    res.sendFile(path.join(__dirname, publicPath, 'Assets', 'Documents', 'BoardMeetingJan.pdf'));
});

// app.get('',(_,resp)=>{
//     resp.sendFile(`${publicPath}/index.html`)
// });


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

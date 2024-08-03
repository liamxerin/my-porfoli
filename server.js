const express = require('express')

const app = express();
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', './views');

const PORT = 3000
app.use(express.static(path.join(__dirname, 'public_html')));
app.get('/', (req, res) => {
    res.render('index')
})
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})
const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const serviceAccount = require('./firebaseServiceAccountKey.json');
const { 
  fault4, fault5, fault6, fault7, 
  giveUpFrame, red, yellow, green, 
  brown, blue, pink, black, changePlayer 
} = require('./gameFunctions'); // Import the shared functions
const cors = require('cors');


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const app = express();

app.use(bodyParser.json());
app.use(cors());

const os = require('os');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/fault4', async (req, res) => {
  try {
    const result = await fault4(db);
    res.status(200).send(result);
  } catch (error) {
    console.error('Error executing fault4:', error);
    res.status(500).send('Internal server error.');
  }
});

app.get('/fault5', async (req, res) => {
  try {
    const result = await fault5(db);
    res.status(200).send(result);
  } catch (error) {
    console.error('Error executing fault5:', error);
    res.status(500).send('Internal server error.');
  }
});

app.get('/fault6', async (req, res) => {
  try {
    const result = await fault6(db);
    res.status(200).send(result);
  } catch (error) {
    console.error('Error executing fault6:', error);
    res.status(500).send('Internal server error.');
  }
});

app.get('/fault7', async (req, res) => {
  try {
    const result = await fault7(db);
    res.status(200).send(result);
  } catch (error) {
    console.error('Error executing fault7:', error);
    res.status(500).send('Internal server error.');
  }
});

app.get('/giveUpFrame', async (req, res) => {
  try {
    const result = await giveUpFrame(db);
    res.status(200).send(result);
  } catch (error) {
    console.error('Error executing giveUpFrame:', error);
    res.status(500).send('Internal server error.');
  }
});

app.get('/red', async (req, res) => {
  try {
    const result = await red(db);
    res.status(200).send(result);
  } catch (error) {
    console.error('Error executing red:', error);
    res.status(500).send('Internal server error.');
  }
});

app.get('/yellow', async (req, res) => {
  try {
    const result = await yellow(db);
    res.status(200).send(result);
  } catch (error) {
    console.error('Error executing yellow:', error);
    res.status(500).send('Internal server error.');
  }
});

app.get('/green', async (req, res) => {
  try {
    const result = await green(db);
    res.status(200).send(result);
  } catch (error) {
    console.error('Error executing green:', error);
    res.status(500).send('Internal server error.');
  }
});

app.get('/brown', async (req, res) => {
  try {
    const result = await brown(db);
    res.status(200).send(result);
  } catch (error) {
    console.error('Error executing brown:', error);
    res.status(500).send('Internal server error.');
  }
});

app.get('/blue', async (req, res) => {
  try {
    const result = await blue(db);
    res.status(200).send(result);
  } catch (error) {
    console.error('Error executing blue:', error);
    res.status(500).send('Internal server error.');
  }
});

app.get('/pink', async (req, res) => {
  try {
    const result = await pink(db);
    res.status(200).send(result);
  } catch (error) {
    console.error('Error executing pink:', error);
    res.status(500).send('Internal server error.');
  }
});

app.get('/black', async (req, res) => {
  try {
    const result = await black(db);
    res.status(200).send(result);
  } catch (error) {
    console.error('Error executing black:', error);
    res.status(500).send('Internal server error.');
  }
});

app.get('/changePlayer', async (req, res) => {
  try {
    const result = await changePlayer(db);
    res.status(200).send(result);
  } catch (error) {
    console.error('Error executing changePlayer:', error);
    res.status(500).send('Internal server error.');
  }
});

app.get('/get-ip', (req, res) => {
  const interfaces = os.networkInterfaces();
  let addresses = [];
  for (let iface of Object.values(interfaces)) {
    for (let config of iface) {
      if (config.family === 'IPv4' && !config.internal) {
        addresses.push(config.address);
      }
    }
  }
  res.send({ ip: addresses[0] });
});

// Root endpoint to test server is running
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import express from 'express'
import bodyParser from 'body-parser';

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('<div>Recipes This Way</div>');
});

app.get('*', (req, res) => {
  res.status(404).send('<img src="https://68.media.tumblr.com/40076dabd68b03a7a43cbf30b2ce6c2a/tumblr_miwsyuB8UX1r2uma6o1_500.gif">');
});

export default app;

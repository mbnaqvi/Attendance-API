const express = require('express');
const app = express();
const port = 3000;

const logger = require('./middleware/logger');
const studentsRouter = require('./routes/students');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use('/students', studentsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
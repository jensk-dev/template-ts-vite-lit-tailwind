module.exports = {
  "*.ts": ["npm run format", "npm run lint:fix"],
  "!*.ts": "npm run format",
};

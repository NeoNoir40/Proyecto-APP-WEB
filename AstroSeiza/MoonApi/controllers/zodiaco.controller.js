
const zodiacalSign = require('./zodiacalSign')


const getZodiacSign = (req, res) => {
    try {
      if (!req.body.birthdate) {
        return res.status(400).send("Birthdate is required.");
      }
  
      const { birthdate } = req.body;
      const parts = birthdate.split("-");
      if (parts.length !== 3) {
        return res.status(400).send("Invalid date format. Use YYYY-MM-DD.");
      }
  
      const [year, month, day] = parts.map((num) => parseInt(num, 10));
      if (isNaN(month) || isNaN(day) || month < 1 || month > 12 || day < 1 || day > 31) {
        return res.status(400).send("Invalid month or day.");
      }
  
      const sign = zodiacalSign(day, month);
      res.json({ sign });
    } catch (error) {
      res.status(500).send("An error occurred while processing your request.");
    }
  };
  
  module.exports = { getZodiacSign };
  
if (process.env.NODE_ENV === undefined) {
    require("dotenv").config();
}

const config = {
  port: process.env.PORT
};
  
module.exports = config;
  
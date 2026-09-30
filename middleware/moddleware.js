const requestLogger = (req, res, next) => {
    console.log(`${new Date().toISOString()} - [${req.method}] ${req.url}`);
      next()         //  Agle middleware ya route par bhejne ke liye yeh zaroori hai
    


};


 export default requestLogger;
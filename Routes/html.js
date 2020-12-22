module.exports=
// Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {

    // Capture the url the request is made to
    var path = req.url;
  
    // Depending on the URL, display a different HTML file.
    switch (path) {
  
    case "/":
      return displayRoot(res);
  
    case "/tables":
      return displayTables(res);
  
    case "/formPage":
      return displayFormPage(res);
  
    default:
      return display404(path, res);
    }
  }

  function displayRoot(res) {

    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "/main.html", function(err, data) {
      if (err) throw err;
      // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
      // an html file.
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
  
  function displayTables(res) {
  
    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "/tables.html", function(err, data) {
      if (err) throw err;
      // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
      // an html file.
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
  
  function displayFormPage(res) {
  
    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "/formPage.html", function(err, data) {
      if (err) throw err;
      // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
      // an html file.
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
  
// this example will constitute an url from its parts
// like host, port, scheme, path and query parameters
// using Method Chaining and Class

class UrlBuilder {
  constructor() {
    this.hostName = "";
    this.scheme = "http";
    this.portNumber = "";
    this.pathStr = "";
    this.queryString = "";
  }

  // we assume no data validation and sanitizing is required
  // set the host string
  host(hostStr) {
    this.hostName = hostStr;

    // most important when using method chaining
    return this;
  }

  // set the port number
  port(portNum) {
    this.portNumber = `:` + portNum.toString();
    return this;
  }

  // set the http part
  https() {
    this.scheme = "https";
    return this;
  }

  // set the path
  path(pathStr) {
    this.pathStr = pathStr;
    return this;
  }

  queryParams(queryObj) {
    const keys = Object.keys(queryObj);
    const keyStr = keys.map((key) => {
      return `${key}=${queryObj[key]}`;
    });
    console.log("keystr", keyStr);
    this.queryString = keyStr ? `?${keyStr.join("&")}` : "";
    return this;
  }

  // forms the url from the parts
  build() {
    return `${this.scheme}://${this.hostName}${this.portNumber}${this.pathStr}${this.queryString}`;
  }
}

// prints https://example.com:8080/the/file?name=john&lastName=doe
console.log(
  "Forming the URL: ",
  new UrlBuilder()
    .host("example.com")
    .port(8080)
    .https()
    .queryParams({ name: "john", lastName: "doe" })
    .path("/the/file")
    .build()
);

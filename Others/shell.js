// this example (Shell Exam) will constitute an url from its parts
// like host, port, scheme, path and query parameters
// using Method Chaining and Class

class UrlBuilder {
  constructor() {
    this.hostStr = "";
    this.scheme = "http";
    this.portNum = "";
    this.pathStr = "";
  }

  // we assume no data validation and sanitizing is required
  // set the host string
  host(hostStr) {
    this.hostStr = hostStr;

    // most important when using method chaining
    return this;
  }

  // set the port number
  port(portNum) {
    this.portNum = `:` + portNum.toString();
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
    this.queryParam = keyStr ? `?${keyStr.join("&")}` : "";
    return this;
  }

  // forms the url from the parts
  build() {
    return `${this.scheme}://${this.hostStr}${this.portNum}${this.pathStr}${this.queryParam}`;
  }
}

console.log(
  "Forming the URL: ",
  new UrlBuilder()
    .host("shell.com")
    .port(8080)
    .https()
    .queryParams({ name: "anijit", lastName: "sau" })
    .build()
);

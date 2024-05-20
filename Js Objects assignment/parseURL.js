const urlString = "http://www.company.com:81/a/b/c.html?user=Alice&year=2008#p2";

const url = new URL(urlString);

console.log("Protocol:", url.protocol);
console.log("Hostname:", url.hostname);
console.log("Port:", url.port);
/* output;
Protocol: http:
Hostname: www.company.com
Port: 81
*/
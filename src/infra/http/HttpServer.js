export default interface HttpServer {
    on(method, url, callback, middleware?);
    listen(port);
}
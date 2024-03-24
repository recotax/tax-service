export default class TaxController {
  constructor(httpServer) {
    httpServer.on('post', '/v1/send-file', parseXMLfile);

    async function parseXMLfile(params, body, headers) {
      console.log('test');
    }
  }
}

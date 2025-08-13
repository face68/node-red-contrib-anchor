module.exports = function(RED) {
  function AnchorNode(config) {
    RED.nodes.createNode(this, config);
    this.on("input", (msg, send, done) => { send(msg); done && done(); });
  }
  RED.nodes.registerType("anchor", AnchorNode);
};

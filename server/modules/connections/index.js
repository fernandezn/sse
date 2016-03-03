var connections = [];

exports.addConnection = function (res) {
    connections.push(res);
};

exports.getConnections = function () {
    return connections;
};

exports.removeConnection = function (res) {
    var connectionRemove = connections.indexOf(res);
    if (connectionRemove != -1) connections.splice(connectionRemove, 1);
};
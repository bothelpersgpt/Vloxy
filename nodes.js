// Global variable to store nodes
var nodes = [];

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('liveButton').addEventListener('click', function () {
        createLiveNode();
    });

    document.getElementById('upButton').addEventListener('click', function () {
        goUp();
    });

    document.getElementById('saveButton').addEventListener('click', function () {
        save();
    });

    function createLiveNode() {
        // Create a new node
        var newNode = document.createElement('div');
        newNode.textContent = 'Live Node';

        // Append the new node to the nodes container
        document.getElementById('nodesContainer').appendChild(newNode);

        // Add the node to the global array
        nodes.push(newNode);
    }

    function goUp() {
        // Go up logic (customize based on your requirements)
        console.log('Going Up...');
    }

    function save() {
        // Log the nodes (customize based on your requirements)
        console.log('Saved Nodes:', nodes);
    }
});

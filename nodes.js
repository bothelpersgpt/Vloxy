// Global variables
var nodes = [];
var likeCount = 0;

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('liveButton').addEventListener('click', function () {
        createLiveNode();
    });

    document.getElementById('likeButton').addEventListener('click', function () {
        like();
    });

    function createLiveNode() {
        // Create a new node
        var newNode = document.createElement('div');
        newNode.textContent = 'Live Node';

        // Append the new node to the nodes container
        document.getElementById('nodesContainer').appendChild(newNode);

        // Add the node to the global array
        nodes.push(newNode);

        // Update nodes publicly
        updateNodesPublicly();
    }

    function like() {
        // Increment like count
        likeCount++;

        // Update like count display
        updateLikeCount();

        // Update like count publicly
        updateLikeCountPublicly();
    }

    function updateNodesPublicly() {
        // Simulate updating nodes publicly
        console.log('Nodes updated publicly:', nodes);
    }

    function updateLikeCount() {
        // Update the like count display
        document.getElementById('likeCount').textContent = likeCount + (likeCount === 1 ? ' Like' : ' Likes');
    }

    function updateLikeCountPublicly() {
        // Simulate updating like count publicly
        console.log('Like count updated publicly:', likeCount);
    }

    // Simulate periodically updating nodes publicly
    setInterval(updateNodesPublicly, 5000); // Update every 5 seconds
});

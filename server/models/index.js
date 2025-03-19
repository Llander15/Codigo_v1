const { getConnectedClient } = require("../database");

//Leader Board DB
const getLeaderBoardCollection = () => {
  const client = getConnectedClient();
  const collection = client.db("leaderBoarddb").collection("leaderBoard");
  return collection;
};

//Player DB
const getPlayerCollection = () => {
    const client = getConnectedClient();
    const collection = client.db("playerdb").collection("player");
    return collection;
};

//export both functions
module.exports = { getLeaderBoardCollection,getPlayerCollection }; 
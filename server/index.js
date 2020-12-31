const express = require('express');
const cors = require('cors');
const app = express();

const cod = require('./api');

app.use(express.json());
app.use(cors());
require('dotenv').config();

app.get('/api', (req, res) => {
    res.send({ message: 'works' });
});

app.post('/api/cod', async (req, res) => {
    const { codName } = req.body;

    const playerStats = await cod.getPlayerData(codName);
    const recentMatches = await cod.getRecentMatches(codName);
    // const friendsStats = await cod.getFriendsStats(codName);

    const result = {
        playerStats,
        recentMatches,
        // friendsStats
    }
    if (result.playerStats.status === 'error') return res.status(404).send({ status: "error", message: "No user found" });

    res.status(200).send({ status: "ok", ...result });

})

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
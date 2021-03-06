import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';

dotenv.config();
const app = express()
// require('dotenv').config();

// import dotenv from 'dotenv';
// dotenv.config();

import { cod } from './api';

app.use(express.json());
app.use(cors());
app.use(rateLimit({
    windowMs: 60000,
    max: 10
}))

app.get('/api', (_, res: Response) => {
    res.send({ message: 'works' });
});

// add api request 
// https://www.npmjs.com/package/express-rate-limit
app.post('/api/cod', async (req: Request, res: Response) => {
    const { codName } = req.body;
    if (!codName) {
        return res.status(404).send({ status: "error", message: "No username provided" });
    }

    const playerName = codName.replace('#', '%23')


    const playerStats = await cod.getPlayerData(playerName);
    const recentMatches = await cod.getRecentMatches(playerName);

    const result = {
        playerStats,
        recentMatches,
    }

    if (result.playerStats.status === 'error') {
        return res.status(404).send({ status: "error", message: "No user found" });
    }

    res.status(200).send({ status: "success", ...result });

})

const PORT = process.env.PORT || 3006;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

import { convertHourStringToMinutes } from './utils/convertHourStringToMinutes';
import { convertMinutesToHourString } from './utils/convertMinutesToHourString';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get('/games', async (req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });

  return res.json(games);
});

app.post('/games/:id/ads', async (req, res) => {
  const gameId = req.params.id;
  const data = req.body;

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: data.name,
      yearsPlaying: data.yearsPlaying,
      discord: data.discord,
      weekDays: data.weekDays.join(','),
      hourStart: convertHourStringToMinutes(data.hourStart),
      hourEnd: convertHourStringToMinutes(data.hourEnd),
      useVoiceChannel: data.useVoiceChannel,
    },
  });

  res.status(201).send(ad);
});

app.get('/games/:id/ads', async (req, res) => {
  const gameId = req.params.id;

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createAt: 'desc',
    },
  });

  res.send(
    ads.map((ad) => {
      return {
        ...ad,
        weekDays: ad.weekDays.split(','),
        hourStart: convertMinutesToHourString(ad.hourStart),
        hourEnd: convertMinutesToHourString(ad.hourEnd),
      };
    })
  );
});

app.get('/ads/:id/discord', async (req, res) => {
  const adId = req.params.id;
  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    },
  });

  return res.json({
    discord: ad.discord,
  });
});

app.listen(3000, () => console.log('server running'));

// server.js
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

const port = process.env.PORT || 8000;

app.get('/2024-02-23', function(req, res) {
    res.json({
        data: [
            {
                startTime: "12:30:00",
                endTime: "12:45:00",
                usersAvailable: 10
            },
            {
                startTime: "12:45:00",
                endTime: "13:00:00",
                usersAvailable: 10
            },
            {
                startTime: "14:00:00",
                endTime: "14:15:00",
                usersAvailable: 8
            },
            {
                startTime: "15:30:00",
                endTime: "16:00:00",
                usersAvailable: 12
            }
        ]
    });
});

app.get('/2024-02-24', function(req, res) {
    res.json({
        data: [
            {
                startTime: "10:00:00",
                endTime: "10:30:00",
                usersAvailable: 5
            },
            {
                startTime: "11:00:00",
                endTime: "11:30:00",
                usersAvailable: 7
            },
            {
                startTime: "15:00:00",
                endTime: "15:30:00",
                usersAvailable: 6
            },
            {
                startTime: "16:00:00",
                endTime: "16:30:00",
                usersAvailable: 8
            }
        ]
    });
});

app.get('/2024-02-25', function(req, res) {
    res.json({
        data: []
    });
});

app.listen(port);
console.log('API escuchando en el puerto ' + port);

export default app;

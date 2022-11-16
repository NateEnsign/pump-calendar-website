const Sequelize = require('sequelize')
require('dotenv').config()
const CONNECTION_STRING = process.env.CONNECTION_STRING

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {

    seed: (req, res) => {
        sequelize.query(`
        DROP TABLE IF EXISTS weekday_workouts;
        DROP TABLE IF EXISTS workouts;
        DROP TABLE IF EXISTS weekday;


        CREATE TABLE workouts (
            id SERIAL PRIMARY KEY,
            name VARCHAR NOT NULL,
            category VARCHAR NOT NULL
        );

        CREATE TABLE weekday (
            id SERIAL PRIMARY KEY,
            name VARCHAR
        );

        CREATE TABLE weekday_workouts (
            id SERIAL PRIMARY KEY,
            weekday_id INT REFERENCES weekday(id),
            workouts_id INT REFERENCES workouts(id)
        );

        INSERT INTO weekday (name)
        VALUES
        ('Monday'),
        ('Tuesday'),
        ('Wednesday'),
        ('Thursday'),
        ('Friday'),
        ('Saturday'),
        ('Sunday');
        `)
        .then (() => {
            console.log('Database seeded')
            res.sendStatus(200)
        })
        .catch(err => console.log('Error seeding database', err))
    },




    addWorkout: (req, res) => {
        console.log(req.body)
        const {
            workoutName,
            workoutCategory
        } = req.body

        sequelize.query(`
            INSERT INTO workouts (name, category)
            VALUES ('${workoutName}', '${workoutCategory}');
        `)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
        .catch(err => console.log('Error submitting workout', err))
    },

    getChestWorkouts: (req, res) => {
        sequelize.query(`
            SELECT name,id FROM workouts WHERE category = 'chest';
        `)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
        .catch((err) => {
            console.log(err)
        })
    },

    getLegsWorkouts: (req, res) => {
        sequelize.query(`
            SELECT name FROM workouts WHERE category = 'legs';
        `)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
        .catch((err) => {
            console.log(err)
        })
    },

    getBackWorkouts: (req, res) => {
        sequelize.query(`
            SELECT name FROM workouts WHERE category = 'back';
        `)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
        .catch((err) => {
            console.log(err)
        })
    },

    getArmsWorkouts: (req, res) => {
        sequelize.query(`
            SELECT name FROM workouts WHERE category = 'arms';
        `)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
        .catch((err) => {
            console.log(err)
        })
    },

    getCoreWorkouts: (req, res) => {
        sequelize.query(`
            SELECT name FROM workouts WHERE category = 'core';
        `)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
        .catch((err) => {
            console.log(err)
        })
    },

    getCardioWorkouts: (req, res) => {
        sequelize.query(`
            SELECT name FROM workouts WHERE category = 'cardio';
        `)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
        .catch((err) => {
            console.log(err)
        })
    },

    deleteChestWorkout: (req, res) => {
        const {id} = req.params
        sequelize.query (`
            DELETE FROM workouts
            WHERE id = ${id}
        `)
        .then((dbRes) => {
            res.send(dbRes[0])
       })
       .catch((err) => {
        console.log(err)
        res.send('sequelize error')
       })
    }

}



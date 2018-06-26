const { db, User, Event } = require('../server/db')

const events = [
  {
    title: 'Honey Dijon @ Analogue',
    description: 'Techno Party!',
    start: new Date('june 6, 2019 22:00'),
    end: new Date('june 6, 2019 4:00'),
    userId: 1
  }, {
    title: "Will's Birthday",
    description: '25',
    start: new Date('july 6, 2019 00:00'),
    end: new Date('june 6, 2019 23:59'),
    userId: 1
  }, {
    title: 'Code Review',
    description: 'Capstone, team Waterworld',
    start: new Date('june 27, 2019 12:00'),
    end: new Date('june 27, 2019 13:00'),
    userId: 1
  }, {
    title: 'Hannibal Buress',
    description: 'Comedy Show',
    start: new Date('May 8, 2019 20:00'),
    end: new Date('May 6, 2019 22:00'),
    userId: 1
  }, {
    title: 'Lunch with Michaela',
    description: 'Getting some salad',
    start: new Date('june 27, 2019 13:00'),
    end: new Date('june 27, 2019 14:00'),
    userId: 1
  }, {
    title: 'Call Mom',
    description: 'Getting some salad',
    start: new Date('june 27, 2019 19:00'),
    end: new Date('june 27, 2019 20:00'),
    userId: 1
  }
]

const seed = async () => {
  await db.sync({ force: true })
  console.log('db synced!')

  await User.create({
    firstName: 'Connor',
    lastName: 'Kirkwood'
  })

  await Promise.all(events.map(event =>
    Event.create(event))
  )

}

seed()
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })

console.log('seeding')

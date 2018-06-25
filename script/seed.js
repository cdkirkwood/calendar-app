const { db, User, Event, Calendar } = require('../server/db')

const seed = async () => {
  await db.sync({ force: true })
  console.log('db synced!')

  //await Promise.all([
    await User.create({
      firstName: 'Connor',
      lastName: 'Kirkwood'
    })
    await Calendar.create({
      name: 'primary',
      userId: 1
    })
    await Event.create({
      title: 'Honey Dijon @ Analogue',
      start: new Date(Date.UTC(2019, 1, 18, 22, 0, 0)),
      end: new Date(Date.UTC(2019, 1, 18, 6, 0, 0)),
      calendarId: 1
    })
  //])
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

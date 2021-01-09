import mongoose from 'mongoose'
import connectToDatabase from '../lib/connectToDb.js'
import Item from '../models/item.js'
import User from '../models/user.js'
import itemData from './data/items.js'
import userData from './data/users.js'
// import commentSchema from '../models/item.js'


async function seedDatabase() {
  try {
    await connectToDatabase()

    console.log('🤖 Database connected')

    await mongoose.connection.db.dropDatabase()

    console.log('🤖 Database dropped')

    const users = await User.create(userData)

    console.log(`🤖 ${users.length} users created`)
    // console.log(usersWithBasket)

    const items = await Item.create(itemData)

    console.log(`🤖 ${items.length} items created`)


    await mongoose.connection.close()

    console.log('🤖 Goodbye')

  } catch (err) {
    console.log('🤖 Something went wrong')
    console.log(err)

    await mongoose.connection.close()
    console.log('🤖 Goodbye')
  }
}

seedDatabase()

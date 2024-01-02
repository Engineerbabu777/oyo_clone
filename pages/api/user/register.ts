import connectDB from '@/db'
import User from '@/models/user.model'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'

export default async function POST (req: Request, res: Response) {
  if (req.method === 'POST') {
    connectDB()
    const { name, email, password } = req.body as any
    if (!name || !email || !password) {
      return res.json({ msg: 'Please fill all the fields !' })
    }
    const emailExists = await User.findOne({ email })
    console.log(emailExists)
    if (emailExists?.email) {
      return res.json({ msg: 'User already Registered !' })
    }

    if (!emailExists?.email) {
      const hashedPassword = await bcrypt.hash(password, 10)
      const newUser = new User({
        name,
        email,
        password: hashedPassword
      })
      const result = await newUser.save()
      console.log({result})
      const token = jwt.sign({ token: result._id }, 'jnsdjnjsndjn123')
      console.log({ token })
      return res.json({ msg: 'Registered Succesfully !', token })
    }
  }
}

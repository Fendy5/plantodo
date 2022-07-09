/**
 * @Author fendy
 * @CreateTime 2022/6/30 20:44
 * @Description
 */
import Dexie, { Table } from 'dexie'
import { getCurrentDateTime } from "@/utils/calendar"
import { UserInfoProp } from "@/types/user"

type Plan = {
  id?: number
  content: string
  day: string
  create_time: string
  update_time?: string
}

type User = UserInfoProp & { token: string }

class PlanTodoDatabase extends Dexie {
  public plans!: Table<Plan, number>
  public users!: Table<User, number>

  public constructor() {
    super('PlanTodo')
    this.version(1).stores({
      plans: '++id,content,day,create_time,update_time',
      users: 'id,nickname,avatar,token'
    })
  }
}

const db = new PlanTodoDatabase()

export const createOrUpdateContent = async (content: string, day: string) => {
  const todayPlan = await db.plans.where({ day }).first()
  if (todayPlan && todayPlan.id) {
    console.log('update')
    db.plans.update(todayPlan.id, { content })
  } else {
    console.log('add')
    db.plans.add({ content, day, create_time: getCurrentDateTime() })
  }
}

export const setToken = async (userInfo: UserInfoProp, token: string) => {
  const user = await db.users.get(1)
  console.log('~~~~~~~~~~~~~~~~')
  console.log(userInfo, token)
  if (user) {
    db.users.delete(1)
  }
  db.users.add({ ...userInfo, token })
}

export const removeUserInfo = () => {
  db.users.delete(1)
}

export const getToken = async () => {
  const user = await db.users.get(1)
  return user?.token
}

export const getContentByDay = async (day: string) => {
  return db.plans.where({ day }).first()
}


// class FriendDatabase extends Dexie {
//   public friends!: Table<Friend, number> // id is number in this case
//
//   public constructor() {
//     super("FriendDatabase")
//     this.version(1).stores({
//       friends: "++id,name,age"
//     })
//   }
// }

// export const db = new FriendDatabase()
//
//
// export const addFriend = (friend: Friend) => {
//   db.transaction('rw', db.friends, async () => {
//     await db.friends.add(friend)
//   })
// }
//
// export const findFriend = async () => {
//   return db.friends.where({ name: 'Fendy' }).first()
// }

// db.transaction('rw', db.friends, async() => {
//
  // Make sure we have something in DB:
//   if ((await db.friends.where({ name: 'Josephine' }).count()) === 0) {
//     const id = await db.friends.add({ name: "Josephine", age: 21 })
//     alert (`Addded friend with id ${id}`)
//   }
//
//   // Query:
//   const youngFriends = await db.friends.where("age").below(25).toArray()
//
//   // Show result:
//   alert ("My young friends: " + JSON.stringify(youngFriends))
//
// }).catch(e => {
//   alert(e.stack || e)
// })

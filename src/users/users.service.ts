import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "Lahir",
            "email": "lahir@mail.com",
            "role": "Intern",
        },
        {
            "id": 2,
            "name": "Sai",
            "email": "sai@mail.com",
            "role": "Intern",
        },
        {
            "id": 3,
            "name": "Vignesh",
            "email": "vignesh@mail.com",
            "role": "Engineer",
        },
        {
            "id": 4,
            "name": "Vivek",
            "email": "vivek@mail.com",
            "role": "Engineer",
        },
        
    ]

    findAll(role?:"Intern"|"Engineer")
    {
        if(role)
        {
            return this.users.filter(user=> user.role === role);
        }
        return this.users;
    }
    findOne(id:number)
    {
        const user = this.users.find(user=> user.id===id)
        return user;
    }
    create(user: { name: string, email: string, role: "Intern"|"Engineer"}) {
        const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id)
        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...user
        }
        this.users.push(newUser)
        return newUser
    }

    update(id: number, updatedUser: { name?: string, email?: string, role?:"Intern"|"Engineer" }) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updatedUser }
            }
            return user
        })

        return this.findOne(id)
    }

    deleteOne(id: number) {
        const removedUser = this.findOne(id)

        this.users = this.users.filter(user => user.id !== id)

        return removedUser
    }
}

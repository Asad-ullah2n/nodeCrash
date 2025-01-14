import { create } from "zustand";
export const useUserStore =  create(set=>({
    users:[],
    setUsers:(users)=>set({users}),
    createUser: async (user) => {
        if (!user?.name || !user?.email || !user?.password) {
          return { success: false, message: "Please fill in all fields." };
        }
        try {
          const res = await fetch("/api/user/createUser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          });
        //   if (!res.ok) {
        //     throw new Error("Failed to create user");
        //   }
          const data = await res.json();
          set((state) => ({ users: [...state.users, data.data] }));
          return { success: true, message: "User created successfully" };
        } catch (error) {
          return { success: false, message: error.message };
        }
      },
    
}))
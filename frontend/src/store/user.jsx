import { create } from "zustand";

export const useUserStore = create((set, get) => ({
  users: [], // For registered users (optional)
  currentUser: null, // Authenticated user details
  isAuthenticated: false, // Auth state

  setUsers: (users) => set({ users }),

  createUser: async (user) => {
    if (!user?.username || !user?.email || !user?.password) {
      return { success: false, message: "Please fill in all fields." };
    }

    const existingUser = get().users.find((u) => u.email === user.email);
    if (existingUser) {
      return { success: false, message: "User already exists." };
    }

    try {
      const res = await fetch("/api/user/createUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await res.json();
      if (data?.data) {
        set((state) => ({ users: [...state.users, data.data] }));
      }

      return { success: true, message: "User created successfully" };
    } catch (error) {
      return { success: false, message: error.message };
    }
  },

  signInUser: async (user) => {
    if (!user?.email || !user.password) {
      return { success: false, message: "Please fill in all fields." };
    }

    try {
      const res = await fetch("/api/user/signIn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await res.json();
      console.log('data in login ', JSON.stringify(data));
      
      if (data.success) {
        set({
          currentUser: user, // Storing authenticated user details (can be updated with actual API response if available)
          isAuthenticated: true,
        });
      }

      return data; // Return success and message from the API
    } catch (error) {
      return { success: false, message: error.message };
    }
  },

  logoutUser: () => {
    set({
      currentUser: null,
      isAuthenticated: false,
    });
  },
}));

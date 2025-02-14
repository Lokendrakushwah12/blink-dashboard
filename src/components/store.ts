
import { type Token } from "@/app/dashboard/page";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface StoreState {
  tokens: Token[];
  addToken: (newToken: Token) => void;
}

const useStore = create<StoreState>()(
    persist(
        (set) => ({
            tokens: [],
            addToken: (newToken: Token) =>
                set((state: { tokens: Token[] }) => {
                    while (state.tokens.length > 30) {
                        state.tokens.pop();
                    }
                    if (state.tokens.some((token: Token) => token.name === newToken.name)) {
                        return state;
                    }
                    return { tokens: [newToken, ...state.tokens] };
                }),
        }),
        {
            name: "token-storage", // unique name
            storage: createJSONStorage(() => localStorage), // use localStorage
        }
    )
);

export default useStore;

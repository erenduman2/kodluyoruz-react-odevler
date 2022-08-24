import { emojidata } from '../data/emoji'
import { createContext, useContext,  useState } from "react";
const EmojiContext = createContext();
export const EmojiProvider = ({ children }) => {

    const [emojies, setEmojies] = useState(emojidata);
    const [text, setText] = useState("");
    // const filteredData = emojies.filter(item => item.title.toLowerCase().includes(text.toLowerCase()))
    return <EmojiContext.Provider value={{text, setText, emojies, setEmojies,  }}>{children}</EmojiContext.Provider>
}
export const useEmoji = () => useContext(EmojiContext)

export default EmojiContext;
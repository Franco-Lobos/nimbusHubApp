import { useTheme } from "./themeProvider";

const ToggelButton = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div onClick={toggleTheme} className={`
            m-4
            bg-themeBlack dark:bg-themeWhite w-12 h-6 rounded-full absolute bottom-0 left-0 right-0
            flex flex-row items-center justify-start px-1
            ${theme === "dark" ? "justify-start" : "justify-end"}

            `}>
            <div className={`bg-themeWhite dark:bg-themeBlack w-6 h-6  rounded-full`}></div>
        </div>
    )
}

export default ToggelButton;
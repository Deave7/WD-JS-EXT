import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode
}
const Buttons:React.FC<ButtonProps> = ({children}) => {
    return <button>{children}</button>
}

export default Buttons;
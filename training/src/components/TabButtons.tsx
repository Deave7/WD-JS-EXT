import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode
    onSelect?: () => void
}

const TabButtons:React.FC<ButtonProps> = ({onSelect,children}) => {
    return <button onClick={onSelect}>{children}</button>
}

export default TabButtons
import { ReactNodeLike } from "prop-types";

export interface ILinkProps {
    active: boolean, 
    children: ReactNodeLike, 
    onClick: () => void
}
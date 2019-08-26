import React from 'react'
import { ILinkProps } from '../interfaces/ILinkProps';

const Link = ({ active, children, onClick }: ILinkProps) => (
    <button
       onClick={onClick}
       disabled={active}
       style={{
           marginLeft: '4px',
       }}
    >
      {children}
    </button>
)

export default Link

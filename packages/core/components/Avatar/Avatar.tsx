import * as React from 'react';
import styled, { css } from '@xstyled/styled-components';

export type AvatarProps = {
   src?: string,
   alt?: string,
   circle?: boolean
   size?: string | number
   children?: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

const Image = styled.img` 
  max-width: 100%;
`

const StyledAvatar =  styled.div<AvatarProps>`
 ${({circle, size}) => css`
   display: flex;
   align-items: center;
   justify-content: center;
 
   background-color: material;
   border-top: 2px solid;
   border-top-color: borderDark;
   border-right: 2px solid;
   border-right-color: borderLightest;
   border-bottom: 2px solid;
   border-bottom-color: borderLightest;
   border-left: 2px solid;
   border-left-color: borderDark;
   border-radius: ${circle ? '50%' : 0};
   font-weight: bold;
   overflow: hidden;

   width: ${size ? size : 48}px;
   height: ${size ? size : 48}px;
 `}
`

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(({src, alt, circle, children, ...otherProps}, ref) => (
    <StyledAvatar circle={circle}  ref={ref} {...otherProps}>
        {src ? <Image src={src} alt={alt} /> :  children}
    </StyledAvatar>
));

export default Avatar;

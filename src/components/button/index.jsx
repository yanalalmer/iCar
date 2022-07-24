import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const BaseButton = styled.button`
  ${tw`
        pl-5
        pr-5
        pt-3
        pb-3
        outline-none
        rounded-md
        text-white
        text-xs
        font-semibold
        border-transparent
        border-2
        border-solid
        focus:outline-none
        transition-all
        duration-200
        ease-in-out
        m-1
    `}
`;
const OutlinedButton = styled(BaseButton)`
  ${tw`
        bg-yellow-500
        hover:bg-transparent
        hover:text-yellow-500
        hover:border-yellow-500
    `}
`;
const FilledButton = styled(BaseButton)`
  ${tw`
        border-yellow-500
        text-yellow-500
        bg-transparent
        hover:bg-yellow-500
        hover:text-white
        hover:border-transparent
    `}
`;

export function Button({ theme, text, className }) {
  if (theme === 'filled')
    return <FilledButton className={className}>{text}</FilledButton>;
  else return <OutlinedButton className={className}>{text}</OutlinedButton>;
}

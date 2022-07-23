import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
// componenets
import { Button } from '../button';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from '@fortawesome/free-solid-svg-icons';
// react-calendar
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { SCREENS } from '../../globalStyles/screens';

const CardContainer = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  min-height: 4.3em;
  ${tw`
        flex
        justify-center
        items-center
        rounded-md
        bg-white
        pt-1
        pb-1
        pr-2
        pl-2
        md:pt-2
        md:pb-2
        md:pl-9
        md:pr-9
    `}
`;
const ItemContainer = styled.div`
  ${tw`
        flex
        relative
    `}
`;
const Icon = styled.span`
  ${tw`
        text-yellow-500
        fill-current
        text-xs
        md:text-base
        mr-1
        md:mr-3
    `}
`;
const SmallIcon = styled.span`
  ${tw`
        text-gray-500
        fill-current
        text-xs
        md:text-base
        ml-1
    `}
`;
const Name = styled.span`
  ${tw`
        text-gray-600
        text-xs
        md:text-sm
        cursor-pointer
        select-none
    `}
`;
const LineSeperator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
        bg-gray-300
        mr-2
        ml-2
        md:mr-5
        md:ml-5
    `}
`;
// overwriting default calendar style
const DateCalendar = styled(Calendar)`
  position: absolute;
  top: 2em;
  left: ${({ offset }) => (offset ? '-6em' : '0')};
  max-width: none !important;
  user-select: none;

  @media (min-width: ${SCREENS.md}) {
    top: 3.5em;
    left: -2em;
  }
`;
const BookCard = () => {
  const [startDate, setStartDate] = React.useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);
  const [returnDate, setReturnDate] = React.useState(new Date());
  const [isReturnCalendarOpen, setIsReturnCalendarOpen] = React.useState(false);
  const toggleStartCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
    if (isReturnCalendarOpen) setIsReturnCalendarOpen(false);
  };
  const toggleReturnCalendar = () => {
    setIsReturnCalendarOpen(!isReturnCalendarOpen);
    if (isCalendarOpen) setIsCalendarOpen(false);
  };
  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartCalendar}>Pick Up Date</Name>
        <SmallIcon>
          <FontAwesomeIcon icon={isCalendarOpen ? faCaretUp : faCaretDown} />
        </SmallIcon>
        {isCalendarOpen && (
          <DateCalendar value={startDate} onChange={setStartDate} />
        )}
      </ItemContainer>
      <LineSeperator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleReturnCalendar}>Return Date</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isReturnCalendarOpen && (
          <DateCalendar
            value={returnDate}
            onChange={setReturnDate}
            offset={true}
          />
        )}
      </ItemContainer>
      <LineSeperator />
      <Button text='Book Your Ride' />
    </CardContainer>
  );
};

export default BookCard;

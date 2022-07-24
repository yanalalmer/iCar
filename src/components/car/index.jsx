import {
  faEllipsisH,
  faFillDrip,
  faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
// components
import { Button } from '../button';

const CarContainer = styled.div`
  width: 16.5em;
  min-height: 23em;
  max-height: 23em;
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  ${tw`
        flex
        flex-col
        items-center
        p-3
        pb-4 
        bg-white
        rounded-md
        m-1
        sm:m-3
        md:m-6
    `}
`;
const CarThumbnail = styled.div`
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: 100%;
  }
`;
const CarName = styled.h3`
  ${tw`
        text-base
        font-bold
        text-black
        mt-1
        mb-1
    `}
`;
const PricesContainer = styled.div`
  ${tw`
        w-full
        flex
        justify-start
        mt-3
    `}
`;
const SmallText = styled.p`
  color: inherit;
  ${tw`
        text-xs
        font-thin
        inline-flex
    `}
`;
const DailyPrice = styled.h4`
  ${tw`
        text-yellow-500
        font-bold
        text-sm
        mr-3
    `}
`;
const MonthlyPrice = styled.h4`
  ${tw`
        text-gray-500
        font-bold
        text-sm
    `}
`;
const SmallIcon = styled.span`
  ${tw`
        text-gray-400
        text-sm
        mr-1
    `}
`;
const CarDetailsContainer = styled.div`
  ${tw`
        flex
        w-full
        justify-between
    `}
`;
const CarDetail = styled.span`
  ${tw`
        flex
        items-center
    `}
`;
const CarInfo = styled.h6`
  ${tw`
        text-gray-400
        text-xs
    `}
`;
const Seperator = styled.div`
  min-width: 100%;
  min-height: 1px;
  ${tw`
        flex
        bg-gray-300
        mt-2
        mb-2
    `}
`;
const RentButton = styled(Button)`
  ${tw`
        min-w-full
        mt-5
    `}
`;

const Car = ({ CarsList }) => {
  return (
    <>
      {CarsList.map((car) => (
        <CarContainer key={car.id}>
          <CarThumbnail>
            <img src={car.thumbNailSrc} alt='car' />
          </CarThumbnail>
          <CarName>{car.name}</CarName>
          <PricesContainer>
            <DailyPrice>
              {car.dailyPrice}$<SmallText>/Day</SmallText>
            </DailyPrice>
            <MonthlyPrice>
              {car.monthlyPrice}$<SmallText>/Month</SmallText>
            </MonthlyPrice>
          </PricesContainer>
          <Seperator />
          <CarDetailsContainer>
            <CarDetail>
              <SmallIcon>
                <FontAwesomeIcon icon={faTachometerAlt} />
              </SmallIcon>
              <CarInfo>{car.mileage}</CarInfo>
            </CarDetail>
            <CarDetail>
              <SmallIcon>
                <FontAwesomeIcon icon={faEllipsisH} />
              </SmallIcon>
              <CarInfo>{car.gearType}</CarInfo>
            </CarDetail>
            <CarDetail>
              <SmallIcon>
                <FontAwesomeIcon icon={faFillDrip} />
              </SmallIcon>
              <CarInfo>{car.gas}</CarInfo>
            </CarDetail>
          </CarDetailsContainer>
          <RentButton text='Rent Now' />
        </CarContainer>
      ))}
    </>
  );
};

export default Car;

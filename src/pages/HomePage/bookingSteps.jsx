import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faCarSide,
  faMapMarkedAlt,
} from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  ${tw`
        w-full
        flex
        flex-col
        items-center
        pt-3
        pb-3
        lg:pt-6
        lg:pb-6
        mt-40
    `}
`;
const Title = styled.h2`
  ${tw`
        text-3xl
        lg:text-4xl
        text-black
        font-extrabold
    `}
`;
const StepsContainer = styled.div`
  ${tw`
        flex
        justify-evenly
        flex-wrap
        mt-7
        lg:mt-16
    `}
`;
const StepContainer = styled.div`
  ${tw`
        flex
        flex-col
        md:w-96
        items-center
        transition-colors
        hover:text-yellow-500
        m-3
    `}
`;
const Step = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
        flex
        rounded-lg
        items-center
        justify-center
        p-6
    `}
`;
const StepTitle = styled.h4`
  ${tw`
        text-black
        text-lg
        font-semibold
        mt-4
    `}
`;
const StepDesc = styled.p`
  ${tw`
        w-10/12
        text-xs
        md:text-sm
        text-center
        text-gray-600
    `}
`;
const StepIcon = styled.span`
  ${tw`
        text-yellow-500
        text-3xl
    `}
`;

const BookingSteps = () => {
  return (
    <Container>
      <Title>How It Works</Title>
      <StepsContainer>
        {' '}
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Choose Location</StepTitle>
          <StepDesc>Find the nearest iCar point and book your car</StepDesc>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCalendar} />
            </StepIcon>
          </Step>
          <StepTitle>Pick-Up Date</StepTitle>
          <StepDesc>Pick up the best date to rent a car for you.</StepDesc>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCarSide} />
            </StepIcon>
          </Step>
          <StepTitle>Book Your Car</StepTitle>
          <StepDesc>Book Your nice car with ease in one single click</StepDesc>
        </StepContainer>
      </StepsContainer>
    </Container>
  );
};

export default BookingSteps;

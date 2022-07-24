import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
// components
import BookCard from '../../components/bookCard';
import { Navbar } from '../../components/navbar';
import { AboutUs } from './aboutUs';
import BookingSteps from './bookingSteps';
import TopCars from './topCars';
import { TopSection } from './topSection';

const PageContainer = styled.div`
  ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;

export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <BookCard />
      <BookingSteps />
      <AboutUs />
      <TopCars />
    </PageContainer>
  );
}

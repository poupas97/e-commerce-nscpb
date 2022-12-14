import React from 'react'
import Box from '~/primitive/Box'
import Text from '~/primitive/Text'
import Grid, { GridItem } from '~/primitive/Grid'
import { styled } from '~/theme'

const Root = styled(Box, {
  position: 'relative',
  backgroundColor: 'green',
  paddingVertical: '$10',
  paddingHorizontal: '5%',

  '@sm': {
    paddingHorizontal: '10%',
  },
  '@md': {
    paddingHorizontal: '15%',
  },
  '@lg': {
    paddingHorizontal: '20%',
  },
})

const CopyrightBox = styled(Box, {
  display: 'flex',
  alignItems: 'center',
  paddingTop: '$10',
  marginTop: '$10',
  borderTop: '1px solid rgba(255, 255, 255, 0.2)'
})

const ImageContainer = styled('div', {
  position: 'absolute',
  bottom: 0,
  right: 0,
  background: 'green',
  height: '100%',
})

const Image = styled('img', {
  height: '98%',
  opacity: 1,
  filter: 'grayscale(100%) contrast(1.2)',
  width: '100%',
  mixBlendMode: 'soft-light',
  objectFit: 'cover'
})

const Footer = () => {
  return (
    <Root>
      <ImageContainer>
        <Image src='images/monastery.jpeg' />
      </ImageContainer>
      <Grid columns={3} gapX={20}>
        <GridItem>
          <Text>Contrary to popular belief, Lorem Ipsum is not simply random text.</Text>
          <Text>It has roots in a piece of classical Latin literature from 45 BC</Text>
        </GridItem>
        <GridItem>
          <Text>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus</Text>
          <Text>The Extremes of Good and Evil</Text>
        </GridItem>
        <GridItem>
          <Text>The standard chunk of Lorem Ipsum used since the 1500</Text>
          <Text>There are many variations of passages of Lorem Ipsum available</Text>
        </GridItem>
      </Grid>
      <CopyrightBox >
        <Text>
          Copyright © 20222020 All rights reserved | This template is made with by
        </Text>
      </CopyrightBox>
    </Root>
  )
}

export default Footer
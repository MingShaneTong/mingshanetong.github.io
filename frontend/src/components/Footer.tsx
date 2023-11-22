'use client'

import {
  Box,
  chakra,
  Container,
  HStack,
  Image,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import IconMapper from '@/app/helpers/IconMapper'
import { Footer } from '@/models/Footer'
import { apiUrl } from '@/config/api'

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function SmallCentered({ data }: { data: Footer }) {
  let logo = data.attributes.logo.data;
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'8xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        <HStack>
          <Image 
            src={apiUrl + logo.attributes.url} 
            alt={logo.attributes.alternativeText} 
            width={10}
            height={10} />
          <Text
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            {data.attributes.sitename}
          </Text>
        </HStack>

        <Stack direction={'row'} spacing={6}>
          {data.attributes.links.map((link, index) => 
            <Box key={index} as="a" href={link.href}>
              {link.label}
            </Box>
          )}
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'8xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>{data.attributes.footerText}</Text>
          <Stack direction={'row'} spacing={6}>
            {data.attributes.socials.map((social, index) => 
              <SocialButton key={index} label={social.label} href={social.href}>
                {IconMapper(social.icon)}
              </SocialButton>
            )}
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
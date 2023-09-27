import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ChakraProvider, Flex, Text } from '@chakra-ui/react'
import TsLogo, { InstaLogo } from '@/components/icons/logo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ChakraProvider>
      <Flex>
        <TsLogo/>
        <Text> Hello </Text>
      </Flex>
    </ChakraProvider>
  )
}

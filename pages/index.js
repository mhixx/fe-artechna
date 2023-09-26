import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ChakraProvider, Flex, Text } from '@chakra-ui/react'
import TsLogo from '@/components/icons/ts_logo'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ChakraProvider>
      <Flex>
        <TsLogo />
      </Flex>
    </ChakraProvider>
  )
}

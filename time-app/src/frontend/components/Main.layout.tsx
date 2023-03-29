import { Flex } from "@chakra-ui/react";
// import { Header } from './Header.component

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Flex bg={"greyscale.100"} flexDir={"column"} h="100vh">
      {/* <Header /> */}
      <Flex marginTop="64px">{children}</Flex>
    </Flex>
  );
}

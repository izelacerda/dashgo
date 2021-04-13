import { Flex, Input, Icon } from "@chakra-ui/react";
import { useRef } from "react";
import { RiSearchLine } from "react-icons/ri";

// Controle Components
// UnControled Components usamos useRef

// Imperativa (ex. colocar foco no input)  vs Declarativa  (autofocus no elemento)


export function SearchBox() {
  // const [search, setSearch] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null)
  //debounce => para fazer busca apos 1 segundo sem digitar

  return (
    <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
    >
      <Input 
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: 'gray.300' }}
        ref={searchInputRef}
        // value={search}
        // onChange={event => setSearch(event.target.value)}
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
    
  )
}
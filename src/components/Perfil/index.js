import { Avatar, Button, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Perfil = (props) => {
    return (
        <Menu>
            <MenuButton as={Button} bg={"green.500"} rightIcon={<ChevronDownIcon color={"white"}/>}>
                <Avatar
                    size={"sm"}
                    cursor="pointer"
                    name="Alexsander Wilen"
                    src='https://avatars.githubusercontent.com/u/997449?v=4'
                    showBorder
                    transition='all 0.2s'
                    _hover={{ bg: 'gray.400' }}
                    _expanded={{ bg: 'blue.400' }}
                    _focus={{ boxShadow: 'outline' }}
                />
            </MenuButton>
            <MenuList>
                <MenuItem>Perfil</MenuItem>
                <MenuDivider />
                <MenuItem>Logout</MenuItem>
            </MenuList>
        </Menu>
    );
}

export default Perfil;
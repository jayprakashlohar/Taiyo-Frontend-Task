import React, { useState } from "react";
import {
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addContact } from "../../state/actions/contactActions";
import { MdAddBox } from "react-icons/md";

const ContactForm: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newContact = {
      id: Date.now(),
      name,
      email,
      phone,
    };

    dispatch(addContact(newContact));
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <>
      <Button
        leftIcon={<MdAddBox />}
        colorScheme="teal"
        variant="solid"
        onClick={onOpen}
      >
        Create contact
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Add New Contact</ModalHeader>
          <hr style={{ marginTop: "0px" }} />
          <ModalCloseButton />

          <ModalBody>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel>Phone</FormLabel>
            <Input
              type="number"
              placeholder="Enter your phone "
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              color="#ffff"
              w="100%"
              onClick={handleSubmit}
            >
              Sava contact
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ContactForm;

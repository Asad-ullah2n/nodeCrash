// import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
// import {
//   Box,
//   Button,
//   Container,
//   Heading,
//   HStack,
//   IconButton,
//   Image,
//   Input,
//   Modal,
//   ModalBody,
//   ModalCloseButton,
//   ModalContent,
//   ModalFooter,
//   ModalHeader,
//   ModalOverlay,
//   Text,
//   useColorModeValue,
//   useDisclosure,
//   useToast,
//   VStack,
// } from "@chakra-ui/react";
// import React, { useState } from "react";
// import { useProductStore } from "../store/product";

// const ProductCard = ({ products }) => {
//   const toast = useToast();
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const textColor = useColorModeValue("gray.600", "gray.200");
//   const bg = useColorModeValue("white", "gray.800");
//   const { deleteProduct, updatesProduct } = useProductStore();
//   const [updatedProduct, setUpdatedProduct] = useState(products);

//   const deletedProducts = async (productid) => {

//     const { success, message } = await deleteProduct(productid);
//     if (success) toast({ title: message, status: "success", duration: 3000 });
//     else toast({ title: message, status: "error", duration: 3000 });
//   };
//   const handleUpdateProduct = async (pid, updatedProduct) => {
//     const { success, message } = await updatesProduct(pid, updatedProduct)
    
//     onClose();
//     if (!success) {
//         toast({
//             title: "Error",
//             description: message,
//             status: "error",
//             duration: 3000,
//             isClosable: true,
//         });
//     } else {
//         toast({
//             title: "Success",
//             description: "Product updated successfully",
//             status: "success",
//             duration: 3000,
//             isClosable: true,
//         });
//     }
//   };
//   return (
//     <Box
//       shadow={"lg"}
//       rounded={"lg"}
//       overflow={"hidden"}
//       transition="all 0.3s"
//       _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
//       bg={bg}
//     >
//       <Image
//         src={products.image}
//         alt={products.name}
//         h={48}
//         w={"full"}
//         objectFit={"cover"}
//       />
//       <Box p={4}>
//         <Heading as={"h3"} size={"md"} mb={2}>
//           {products.name}
//         </Heading>
//         <Text fontWeight={"bold"} fontSize={"xl"} color={textColor} mb={4}>
//           ${products.price}
//         </Text>
//         <HStack spacing={2}>
//           <IconButton icon={<EditIcon />} colorScheme="blue" onClick={onOpen} />
//           <IconButton
//             icon={<DeleteIcon />}
//             colorScheme="red"
//             onClick={() => deletedProducts(products?._id)}
//           />
//         </HStack>
//       </Box>
//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Update Product</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <VStack spacing={4}>
//               <Input
//               name='name'
//                 placeholder="Product Name"
//                 value={updatedProduct.name}
//                 onChange={(e) =>
//                   setUpdatedProduct({ ...updatedProduct, name: e.target.value })
//                 }
//               />
//               <Input
//               name='price'
// 								type='number'
//                 placeholder="Product Price"
//                 value={updatedProduct.price}
//                 onChange={(e) =>
//                   setUpdatedProduct({
//                     ...updatedProduct,
//                     price: e.target.value,
//                   })
//                 }
//               />
//               <Input
//                 placeholder="Product Image URL"
//                 name='image'
//                 value={updatedProduct.image}
//                 onChange={(e) =>
//                   setUpdatedProduct({
//                     ...updatedProduct,
//                     image: e.target.value,
//                   })
//                 }
//               />
//             </VStack>
//           </ModalBody>

//           <ModalFooter>
//             <Button colorScheme="blue" mr={3}     onClick={() => handleUpdateProduct(products?._id, updatedProduct)}>
//               Update
//             </Button>
//             <Button
//               variant="ghost"
//               onClick={onClose}
//             >
//               Cancel
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </Box>
//   );
// };

// export default ProductCard;
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Heading,
	HStack,
	IconButton,
	Image,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useColorModeValue,
	useDisclosure,
	useToast,
	VStack,
} from "@chakra-ui/react";
import { useProductStore } from "../store/product";
import { useState } from "react";

const ProductCard = ({ product }) => {
	const [updatedProduct, setUpdatedProduct] = useState(product);

	const textColor = useColorModeValue("gray.600", "gray.200");
	const bg = useColorModeValue("white", "gray.600");

	const { deleteProduct, updatesProduct } = useProductStore();
	const toast = useToast();
	const { isOpen, onOpen, onClose } = useDisclosure();

    const handleOpen = () => {
        setUpdatedProduct(product); // Synchronize local state with the current product
        onOpen();
      };
      

	const handleDeleteProduct = async (pid) => {
		const { success, message } = await deleteProduct(pid);
		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		} else {
			toast({
				title: "Success",
				description: message,
				status: "success",
				duration: 3000,
				isClosable: true,
			});
		}
	};

	const handleUpdateProduct = async (pid, updatedProduct) => {
		const { success, message } = await updatesProduct(pid, updatedProduct);
		onClose();
		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		} else {
			toast({
				title: "Success",
				description: "Product updated successfully",
				status: "success",
				duration: 3000,
				isClosable: true,
			});
		}
	};

	return (
		<Box
			shadow='lg'
			rounded='lg'
			overflow='hidden'
			transition='all 0.3s'
			_hover={{ transform: "translateY(-5px)", shadow: "xl" }}
			bg={bg}
		>
			<Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' />

			<Box p={4}>
				<Heading as='h3' size='md' mb={2}>
					{product.name}
				</Heading>

				<Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
					${product.price}
				</Text>

				<HStack spacing={2}>
					<IconButton icon={<EditIcon />} onClick={onOpen} colorScheme='blue' />
					<IconButton
						icon={<DeleteIcon />}
						onClick={() => handleDeleteProduct(product._id)}
						colorScheme='red'
					/>
				</HStack>
			</Box>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />

				<ModalContent>
					<ModalHeader>Update Product</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<VStack spacing={4}>
							<Input
								placeholder='Product Name'
								name='name'
								value={updatedProduct.name}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
							/>
							<Input
								placeholder='Price'
								name='price'
								type='number'
								value={updatedProduct.price}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
							/>
							<Input
								placeholder='Image URL'
								name='image'
								value={updatedProduct.image}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
							/>
						</VStack>
					</ModalBody>

					<ModalFooter>
						<Button
							colorScheme='blue'
							mr={3}
							onClick={() => handleUpdateProduct(product._id, updatedProduct)}
						>
							Update
						</Button>
						<Button variant='ghost' onClick={onClose}>
							Cancel
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	);
};
export default ProductCard;
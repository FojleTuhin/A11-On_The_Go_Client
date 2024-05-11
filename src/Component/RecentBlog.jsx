import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import { FaHeart } from "react-icons/fa";

const RecentBlog = () => {
    return (
        <div className='mt-24 '>
            <Card width='300px' >
                <CardBody >
                    <Image
                        src='https://i.ibb.co/3rHG3b5/pexels-fabianwiktor-994605.jpg'
                        alt='Beach'
                        borderRadius='15px'
                        padding='10px'
                    />
                    <Stack mt='6' spacing='3' padding='10px'
                    >
                        <Heading size='md' fontWeight='bold'>BEACHES</Heading>
                        <Text fontWeight='600' mt='6'>Fulidhoo Island Guide: Shark & Stingray Beach In Maldives</Text>
                        <Text mt='6'>
                            Fulidhoo is a small, budget-friendly local island we visited recently in the Maldives, along with Dhigurah island, which we loved for its beaches and sandbar.
                        </Text>

                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter padding='10px'>
                    <ButtonGroup justifyContent='space-between'>

                        <Button variant='ghost' color='#3EA570' fontWeight='500'>
                            Wishlist
                        </Button>
                        <Button variant='ghost' color='#3EA570' fontWeight='500'>
                            Read more..
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    );
};

export default RecentBlog;
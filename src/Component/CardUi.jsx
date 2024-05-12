import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
const CardUi = ({ item }) => {
    return (
        <div>
            <Card width='300px' backgroundColor='white' borderRadius='10px' padding='15px'>
                <CardBody >
                    <Image
                        src={item.image}

                        borderRadius='10px'

                    />
                    <Stack mt='6' spacing='3' padding='5px'
                    >
                        <Heading size='md' fontWeight='bold'>{item.category}</Heading>
                        <Text fontWeight='600' mt='6'>{item.title}</Text>
                        <Text mt='6'>
                            {item.shortDescription}
                        </Text>

                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter padding='5px'>
                    <ButtonGroup justifyContent='space-between'>

                        <Link>
                            <Button variant='ghost' color='#3EA570' fontWeight='500'>
                                Wishlist
                            </Button>
                        </Link>
                        <Link to={`/viewDetails/${item._id}`}>
                            <Button variant='ghost' color='#3EA570' fontWeight='500'>
                                Read more..
                            </Button>
                        </Link>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    );
};

export default CardUi;
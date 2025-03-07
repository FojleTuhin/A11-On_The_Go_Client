import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, useConst } from '@chakra-ui/react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Firebase/FirebaseProvider';
import Swal from 'sweetalert2';


const CardUi = ({ item }) => {

    const { user } = useContext(AuthContext)

    const addToWishList = (item) => {

        if (!user) {
            Swal.fire("Please login first!");
        }



        const { _id, category, title, image, longDescription, shortDescription } = item;
        const newWish = {
            _id,
            category,
            title,
            image,
            longDescription,
            shortDescription,
            wishedEmail: user.email,
        }


        fetch('https://on-the-go-server.vercel.app/wishlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newWish)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire("Saved in wishlist!");
            })
    }


    return (
        <div>
            <Card width='300px' height='411px' backgroundColor='white' borderRadius='10px' padding='15px'>
                <CardBody >
                    <Image
                        src={item.image}

                        borderRadius='10px'
                        height='185px'


                    />
                    <Stack mt='6' spacing='3' padding='5px'
                    >
                        <Heading size='md' fontWeight='bold'>{item.category}</Heading>
                        <Text fontWeight='600' mt='6'>{item.title}</Text>
                        <Text mt='6'>
                            {item.shortDescription.slice(0, 65)}
                        </Text>

                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter padding='5px'>
                    <ButtonGroup justifyContent='space-between'
                    >


                        <Button onClick={() => addToWishList(item)} variant='ghost'  borderRadius='20px' backgroundColor='pink' padding='6px 10px' fontWeight='500'>
                            Wishlist
                        </Button>

                        <Link to={`/viewDetails/${item._id}`}>
                            <Button variant='ghost'  borderRadius='20px' backgroundColor='pink' padding='6px 10px' fontWeight='500'>
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
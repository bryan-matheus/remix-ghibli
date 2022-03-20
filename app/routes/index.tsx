import { Box, Text } from "@mantine/core";
import { LoaderFunction, useLoaderData } from "remix";

export const loader: LoaderFunction = async () => {
    const response = await fetch("https://ghibliapi.herokuapp.com/films");

    return response.json();
};


export default function Index() {
    const data = useLoaderData();

    return (
        <Box>
            <Text>Hello World!</Text>
        </Box>
    );
}

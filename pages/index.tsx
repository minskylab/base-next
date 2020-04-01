import { NextPage } from "next";
import { styled } from "linaria/react";
import { motion } from "framer-motion";

const Center = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {
    return (
        <Center>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h1>Hello world! - user agent: {userAgent}</h1>
            </motion.div>
        </Center>
    );
};

Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
    return { userAgent };
};

export default Home;

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
            <div>
                <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                    Hello world! - user agent: {userAgent}
                </motion.h1>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                    Template by Minsky
                </motion.p>
            </div>
        </Center>
    );
};

Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
    return { userAgent };
};

export default Home;

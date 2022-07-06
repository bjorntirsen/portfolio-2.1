import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Background from "../components/Layout/Background";
import OuterTile from "../components/Layout/OuterTile";
import Wrapper from "../components/Layout/Wrapper";
import classes from "./LandingPage.module.css";

const LandingPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Developing the Developer - Landing Page</title>
            </Head>
            <Wrapper>
                <OuterTile forPage="Landing">
                    <Background forPage="Landing" />
                    <main className={`${classes.container}`}>
                        <h1 className={classes.heading}>
                            Developing the Developer
                        </h1>
                        <h2 className={classes.subheading}>
                            the Björn Tirsén Portfolio
                        </h2>
                        <Image
                            src="https://res.cloudinary.com/bjorntirsen/image/upload/v1657033506/portfolio-3/profilephoto_w1024_gdlpmt.jpg"
                            alt="Björn Tirséns face"
                            width="450px"
                            height="450px"
                            style={{borderRadius: "50%"}}
                        />
                        <p className={classes.paragraph}>
                            Witness my journey: from finding my passion for
                            software development to graduating as a Junior
                            Fullstack Web Developer in May 2022.
                        </p>
                        <div className="d-flex justify-content-center">
                            <Link
                                className="btn btn-lg btn-primary fw-bold"
                                href="/projects"
                                role="button"
                            >
                                Enter
                            </Link>
                        </div>
                    </main>
                </OuterTile>
            </Wrapper>
        </>
    );
};

export default LandingPage;

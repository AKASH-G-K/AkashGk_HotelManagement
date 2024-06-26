import { faCode, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import ListGroup  from "react-bootstrap/ListGroup";
import { getImageSources } from "../services/about";
import ImageSource from "../models/imageSource";


const About = ( ) => {
    const [ imageUrls, setImageUrls ] = useState<ImageSource[]>([]);

    useEffect(
        () => {
            const fetchImageSources = async () => {
               try{
                const data = await getImageSources();
                setImageUrls(data);
               }catch( error ){
               alert( error);
               }
            };
            fetchImageSources();
        },[ ]
    );
    return (<>
        <main>
            <section>
                <header className="my-5">
                    <h2>
                        <FontAwesomeIcon icon={faCode} className="me-2" />Tech Stack
                    </h2>
                    <hr />
                </header>
                <p>
                    The frontend app (this one) was scaffolded using <a href="https://create-react-app.dev/docs/getting-started">Create React App</a>, and built with <a href="https://reactjs.org">React</a>,<a href="https://reactrouter.com/web/guides/quick-start">React Router</a>, and <a href="https://react-bootstrap.github.io/">React Bootstrap</a> (which inturn uses <a href="https://getbootstrap.com/">Bootstrap</a>). <a href="https://www.typescriptlang.org/docs/handbook/intro.html">Typescript</a> is the language of choice. The backend is built using <a href="https://github.com//typicoe/json-server">json-server</a>. The icons used have been courtesy <a href="https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react">Font Awesome</a>.

                </p>
            </section>
            <section  className="my-5">
                <header>
                    <h2>
                        <FontAwesomeIcon icon={faLink} className="me-2"/>Attributions
                    </h2>
                    <hr />
                </header>
                <p>
                    The author would like to thank <a href="https://pixlr.com/x/" target="_blank" rel="noreferrer">Pixlr</a>for providing an awesome free photo-editing tool online. The author also thanks the people who shared the images (for commercial and royality-free usage) which are used in this site.
                </p>
                <ListGroup>
                    {
                        imageUrls.map(
                            (imageUrl, idx ) => (
                                <ListGroup.Item key={imageUrl}><a href={imageUrl}>{imageUrl}</a></ListGroup.Item>
                            )
                        )
                    }
                </ListGroup>
            </section>
        </main>
        </>
    )
};

export default About;
import '../scss/_About.scss'
import { Element } from 'react-scroll';

const AboutArticle = ({title, text}) => {
    return (
        <article className="about-article">
            <h2 className="about-article-title">{title}</h2>
            <p className="about-article-text">{text}</p>
        </article>
    );
};

const About = () => {
    return (
        <Element name="about">
            <div className="App-about">
                <h1 className="about-title"><strong>concret</strong>ne <span>informacje</span></h1>

                <div className="about-box">
                    <AboutArticle title={"Wysoka jakość"}
                                  text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam architecto corporis ea eligendi, est et expedita ipsum minus nobis optio pariatur quia quod quos tempora temporibus vero voluptatibus voluptatum!"}/>
                    <AboutArticle title={"Doświadczenie"}
                                  text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam architecto corporis ea eligendi, est et expedita ipsum minus nobis optio pariatur quia quod quos tempora temporibus vero voluptatibus voluptatum!"}/>
                    <AboutArticle title={"Pasja"}
                                  text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam architecto corporis ea eligendi, est et expedita ipsum minus nobis optio pariatur quia quod quos tempora temporibus vero voluptatibus voluptatum!"}/>
                </div>
            </div>
        </Element>
    );
};

export default About;


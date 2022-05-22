import '../scss/_About.scss'

const AboutArticle = (props) => {
    return (
        <div className="about-article">
            <h2 className="about-title">{props.title}</h2>
            <p className="about-text">{props.text}</p>
        </div>
    );
};

const About = () => {
    return (
        <div className="App-about">
            <AboutArticle title={"Wysoka jakość"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam architecto corporis ea eligendi, est et expedita ipsum minus nobis optio pariatur quia quod quos tempora temporibus vero voluptatibus voluptatum!"}/>
            <AboutArticle title={"Doświadczenie"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam architecto corporis ea eligendi, est et expedita ipsum minus nobis optio pariatur quia quod quos tempora temporibus vero voluptatibus voluptatum!"}/>
            <AboutArticle title={"Pasja"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam architecto corporis ea eligendi, est et expedita ipsum minus nobis optio pariatur quia quod quos tempora temporibus vero voluptatibus voluptatum!"}/>
        </div>
    );
};

export default About;


import '../scss/_Material.scss'
import { Element } from 'react-scroll';

const Material = () => {
    return (
        <Element name="materials">
        <Marble/>
        </Element>
    );
};

const Marble = () => {
    return (
        <div className="App-product container">
            <article className="product-article">
                <div className="product-box">
                    <p className="product-text">
                        <strong>Marmur </strong>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi hic inventore molestiae? Ad
                        commodi delectus dignissimos dolor illum molestiae nostrum odio porro, quaerat sint, unde vitae
                        voluptas voluptate!
                    </p>
                </div>
                <img src={require('../assets/images/marble.jpg')} alt="marble"/>
            </article>
            <div className="product-nav">
                <span className="product-nav-prev">prev</span>
                <span className="product-nav-next">next</span>
            </div>
        </div>
    )
}
export const Concrete = () => {
    return (
        <div className="App-product container">
            <article className="product-article">
                <div className="product-box">
                    <p className="product-text">
                        <strong>Beton </strong>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi hic inventore molestiae? Ad
                        commodi delectus dignissimos dolor illum molestiae nostrum odio porro, quaerat sint, unde vitae
                        voluptas voluptate!
                    </p>
                </div>
                <img src={require('../assets/images/concrete.jpg')} alt="concrete"/>
            </article>
            <div className="product-nav">
                <span className="product-nav-prev">prev</span>
                <span className="product-nav-next">next</span>
            </div>
        </div>
    )
}
export const Wood = () => {
    return (
        <div className="App-product container">
            <article className="product-article">
                <div className="product-box">
                    <p className="product-text">
                        <strong>Drewno </strong>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi hic inventore molestiae? Ad
                        commodi delectus dignissimos dolor illum molestiae nostrum odio porro, quaerat sint, unde vitae
                        voluptas voluptate!
                    </p>
                </div>
                <img src={require('../assets/images/wood.jpg')} alt="wood"/>
            </article>
            <div className="product-nav">
                <span className="product-nav-prev">prev</span>
                <span className="product-nav-next">next</span>
            </div>
        </div>
    )
}

export default Material;
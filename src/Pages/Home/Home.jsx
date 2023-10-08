
import Banner from '../Header/banner';

import CardInfo from '../Card/CardInfo';
import Body from '../../Router/Body/Body';
import WhyChooseUs from '../../Router/Body/WhyChooseUs';
import Event from '../../Router/Body/Event';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CardInfo></CardInfo>
            <Body></Body>
            <WhyChooseUs></WhyChooseUs>
            <Event></Event>
            
        </div>
    );
};

export default Home;
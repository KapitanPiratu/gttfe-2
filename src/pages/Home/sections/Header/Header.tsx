import classes from './Header.module.scss';
import Section from '../../../../components/layout/Section/Section';
import logo from '../../../../assets/logo.svg';
import Heading from '../../../../components/typography/Heading';
import { headingTypes } from '../../../../types/types';
import { GAMETYPES } from '../../../../types/types';
import Paragraph from '../../../../components/typography/Paragraph';
// import CountDown from '../../../../components/other/CountDown/CountDown';
import GameLogo from '../../../../components/other/GameLogo/GameLogo';
import { useHistory } from "react-router-dom";
import CTA from '../../../../components/layout/CTA/CTA';
import { withRouter } from 'react-router';
import discordLogo from '../../../../assets/discord-logo.svg';

import MSMTLogo from '../../../../assets/msmt_logo.svg';
import JMKLogo from '../../../../assets/jmk_logo.svg'
import JRDMLogo from '../../../../assets/JRDM_logo.svg';
import HelkorLogo from '../../../../assets/helkor_logo.png';
import FakahedaLogo from '../../../../assets/fakaheda_logo.png';

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = props => {
    const history = useHistory();
    function gamepage(gameName:string){
        history.push("/gamepage?gamename=" + gameName);
    }
    return <Section className={classes.Header}>
            <div className={classes.Header__topRight}>
                {/* <CountDown className={classes.Header__countDown}></CountDown> */}
                <img className={classes.Header__logo} src={logo} alt="GT Tournament Logo"></img>
                <div className={classes.Header__sponsorLogos}>
                    <div className={classes.Header__sponsorLogos__column}>
                        <img src={JRDMLogo}></img>
                        <img src={MSMTLogo}></img>
                    </div>
                    <div className={classes.Header__sponsorLogos__column}>
                        <img src={JMKLogo}></img>
                        <img src={FakahedaLogo}></img>
                        <img src={HelkorLogo}></img>
                    </div>
                </div>
            </div>
            <div className={classes.Header__content}>
                <Heading className={classes.Header__heading} type={headingTypes.main}>
                    Turnaj v počítačových hrách
                    <br></br>
                    Gymnázia Tišnov
                </Heading>
                <Heading className={classes.Header__subheading} type={headingTypes.h2}>
                    17.11 - 26.11
                </Heading>
                <Paragraph className={classes.Header__paragraph}>
                    Středoškolský turnaj v počítačových hrách.
                </Paragraph>
                <CTA onClick={() => {
                    window.location.href="https://discord.gg/WXtGFxrAdR"
                }} className={classes.Header__cta}>
                    Spoj se s námi na discordu!
                    <img className={classes.Header__cta__logo} src={discordLogo} alt="Discord logo"></img>
                </CTA> 
            </div>
            <div className={classes.Header__gameLogos}>
                <Heading className={classes.Header__gamepages} type={headingTypes.h2}>Stránky her:</Heading>
                <div className={classes.Header__gameLogosHolder}>
                    <GameLogo className={classes.Header__gameLogos__logo} game={GAMETYPES.MINECRAFT} onClick={()=>{gamepage(GAMETYPES.MINECRAFT)}}></GameLogo>
                    <GameLogo className={classes.Header__gameLogos__logo} game={GAMETYPES.COUNTER_STRIKE} onClick={()=>{gamepage(GAMETYPES.COUNTER_STRIKE)}}></GameLogo>
                    <GameLogo className={classes.Header__gameLogos__logo} game={GAMETYPES.ROCKET_LEAGUE} onClick={()=>{gamepage(GAMETYPES.ROCKET_LEAGUE)}}></GameLogo>
                    <GameLogo className={classes.Header__gameLogos__logo} game={GAMETYPES.LOL} onClick={()=>{gamepage(GAMETYPES.LOL)}}></GameLogo>
                    <GameLogo className={classes.Header__gameLogos__logo} game={GAMETYPES.VALORANT} onClick={()=>{gamepage(GAMETYPES.VALORANT)}}></GameLogo>
                    <GameLogo className={classes.Header__gameLogos__logo} game={GAMETYPES.R6} onClick={()=>{gamepage(GAMETYPES.R6)}}></GameLogo>
                </div>
            </div>  
    </Section>
};

export default withRouter(Header);
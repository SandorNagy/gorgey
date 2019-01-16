import React, { Component } from 'react';
import Topics from './Topics';

class Home extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.homeRef = React.createRef();
        this.scrollToMyRef = this.scrollToMyRef.bind(this);
        this.handleScrollDirection = this.handleScrollDirection.bind(this);
        this.changeScrollDirection = this.changeScrollDirection.bind(this);
        this.listenToScroll = this.listenToScroll.bind(this);
        this.move = this.move.bind(this);
        this.state = {
            scrollDirection: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll);
        this.move(this.props.scrollLinkClicked);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll);
    }

    scrollToMyRef(ref) {   // run this method to execute scrolling. 
        window.scrollTo({
            top: ref.current.offsetTop - 50,
            behavior: "smooth"   // Optional, adds animation
        });
    }

    move(direct) {
        if (direct) {
            this.scrollToMyRef(this.myRef);
            this.changeScrollDirection(true);
        }
        else {
            this.scrollToMyRef(this.homeRef);
            this.changeScrollDirection(false);
        }
    }

    handleScrollDirection() {
        const currentDirection = !this.state.scrollDirection;
        if (currentDirection) {
            this.scrollToMyRef(this.myRef);
        }
        else {
            this.scrollToMyRef(this.homeRef);
        }
    }

    changeScrollDirection(direct) {
        this.setState({
            scrollDirection: direct
        });
    }

    listenToScroll() {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight

        const scrolled = winScroll / height;

        const home = winScroll / this.myRef.current.offsetHeight;

        this.setState({
            scrollDirection: home > scrolled
        });

    }

    render() {
        return (
            <React.Fragment>
                <section className='section-home' ref={this.homeRef}>
                    <div className='container text-center'>
                        <img src={require('./images/gorgey.png')} alt="Görgey Artúr" />
                        <h1 className="heading">Welcome to my portfolio</h1>
                        <div className="subheading">This is some text inside of a div block.</div>
                    </div>
                    <div id="mybutton" onClick={this.handleScrollDirection}>
                        <span className={'scroll-button' + (this.state.scrollDirection ? ' up' : ' down')}></span>
                    </div>
                </section>
                <section className='section-white-left'>
                    <div className='container'>
                        <div className='row'>
                            <div class='offset-md-1 col-md-5'>
                                <h2 className="section-heading">Section Heading</h2>
                                <div className="section-subheading">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla.</div>
                            </div>
                            <div className='col-md-5 text-center'>
                                <img className='section-image' src={require('./images/bridge.jpeg')} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section-grey-right'>
                    <div className='container'>
                        <div className='row'>
                            <div className='offset-md-1 col-md-5 text-center'>
                                <img className='section-image' src={require('./images/bridge.jpeg')} alt="" />
                            </div>
                            <div className='col-md-5'>
                                <h2 className="section-heading">Section Heading</h2>
                                <div className="section-subheading">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla.</div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-center" ref={this.myRef}>
                    <div className="container">
                        <div className="section-title-group">
                            <h2 className="centered section-heading">Lightbox Section</h2>
                            <div className="center section-subheading">This is some text inside of a div block.</div>
                        </div>
                        <Topics />
                    </div>
                </section>
                <section className="section-footer">
                    <div className="container">
                        <div className='row'>
                            <div className='col-md-6'>
                                © 2019 Minden jog fenntartva! Görgey Arthúr Akadémia
                            </div>
                            <div className='col-md-6'>
                                <img className='svg-icon' src={require('./images/twitter.svg')} width='20' alt="Twitter" />
                                <img className='svg-icon' src={require('./images/linkedin.svg')} width='20' alt="Linkedin" />
                                <img className='svg-icon' src={require('./images/mail.svg')} width='20' alt="Mail" />
                                <img className='svg-icon' src={require('./images/facebook.svg')} width='20' alt="Facebook" />
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Home
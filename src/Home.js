import React, { Component } from 'react';
import Topics from './Topics';

class Home extends Component {
    constructor(props) {
        super(props);
        this.tasksRef = React.createRef();
        this.forusRef = React.createRef();
        this.referencesRef = React.createRef();
        this.homeRef = React.createRef();
        this.scrollToMyRef = this.scrollToMyRef.bind(this);
        this.handleScrollDirection = this.handleScrollDirection.bind(this);
        this.changeScrollDirection = this.changeScrollDirection.bind(this);
        this.listenToScroll = this.listenToScroll.bind(this);
        this.move = this.move.bind(this);
        this.state = {
            scrollDirection: false,
            loaded: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll);
        this.move(this.props.scrollLinkClicked);
        this.setState({
            loaded: true
        });
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
        switch (direct) {
            case 'home':
                this.scrollToMyRef(this.homeRef);
                this.changeScrollDirection(false);
                break;
            case 'forus':
                this.scrollToMyRef(this.forusRef);
                this.changeScrollDirection(true);
                break;
            case 'references':
                this.scrollToMyRef(this.referencesRef);
                this.changeScrollDirection(true);
                break;
            case 'tasks':
                this.scrollToMyRef(this.tasksRef);
                this.changeScrollDirection(true);
                break;
            default:
                this.scrollToMyRef(this.homeRef);
                this.changeScrollDirection(false);
                break;
        }
    }

    handleScrollDirection() {
        const currentDirection = !this.state.scrollDirection;
        if (currentDirection) {
            this.scrollToMyRef(this.tasksRef);
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

        const home = winScroll / this.tasksRef.current.offsetHeight;

        this.setState({
            scrollDirection: home > scrolled
        });
    }

    setHomeLoadingClass(loaded) {
        return loaded ? ' home-loaded' : ' home-not-loaded';
    }

    render() {
        return (
            <React.Fragment>
                <section className='section-home' ref={this.homeRef}>
                    <div className={'container text-center' + this.setHomeLoadingClass(this.state.loaded)}>
                        <img src={require('./images/gorgey.png')} alt="Görgey Artúr" />
                        <h1 className="heading">Üdvözöllek a Görgey Artúr Akadémián!</h1>
                        <div className="subheading">This is some text inside of a div block.</div>
                    </div>
                    <div id="mybutton" onClick={this.handleScrollDirection}>
                        <span className={'scroll-button' + (this.state.scrollDirection ? ' up' : ' down')}></span>
                    </div>
                </section>
                <section className='section-white-left' ref={this.forusRef}>
                    <div className='container'>
                        <div className='row'>
                            <div class='offset-md-1 col-md-5'>
                                <h2 className="section-heading">Kik is vagyunk?</h2>
                                <div className="section-subheading">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla.</div>
                            </div>
                            <div className='col-md-5 text-center'>
                                <img className='section-image' src={require('./images/bridge.jpeg')} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section-grey-right' ref={this.referencesRef}>
                    <div className='container'>
                        <div className='row'>
                            <div className='offset-md-1 col-md-5 text-center'>
                                <img className='section-image' src={require('./images/bridge.jpeg')} alt="" />
                            </div>
                            <div className='col-md-5'>
                                <h2 className="section-heading">Referenciák</h2>
                                <div className="section-subheading">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla.</div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-center" ref={this.tasksRef}>
                    <div className="container">
                        <div className="section-title-group">
                            <h2 className="centered section-heading">Gyakorlófeladatok a középszintű történelem érettségire</h2>
                            <div className="center section-subheading">This is some text inside of a div block.</div>
                        </div>
                        <Topics />
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Home
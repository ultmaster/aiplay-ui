import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import './Introduction.scss';

class Introduction extends React.Component {

  render() {
    return (
      <div>

        <div className="pusher">
          <div className="ui inverted vertical masthead center aligned segment">

            <div className="ui text container">
              <h1 className="ui inverted header">
                AI Playground
              </h1>
              <h2>It is more than coding.</h2>
              <Button primary className="huge">Get Started <Icon name="right arrow" /></Button>
            </div>

          </div>

          <div className="ui vertical stripe segment">
            <div className="ui middle aligned stackable grid container">
              <div className="row">
                <div className="eight wide column">
                  <h3 className="ui header">We Help Companies and Companions</h3>
                  <p>We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs...through pure data analytics.</p>
                  <h3 className="ui header">We Make Bananas That Can Dance</h3>
                  <p>Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.</p>
                </div>
                <div className="six wide right floated column">
                  <img src="assets/images/wireframe/white-image.png" className="ui large bordered rounded image" />
                </div>
              </div>
              <div className="row">
                <div className="center aligned column">
                  <a className="ui huge button">Check Them Out</a>
                </div>
              </div>
            </div>
          </div>


          <div className="ui vertical stripe quote segment">
            <div className="ui equal width stackable internally celled grid">
              <div className="center aligned row">
                <div className="column">
                  <h3>"What a Company"</h3>
                  <p>That is what they all say about us</p>
                </div>
                <div className="column">
                  <h3>"I shouldn't have gone with their competitor."</h3>
                  <p>
                    <img src="assets/images/avatar/nan.jpg" className="ui avatar image" /> <b>Nan</b> Chief Fun Officer Acme Toys
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="ui vertical stripe segment">
            <div className="ui text container">
              <h3 className="ui header">Breaking The Grid, Grabs Your Attention</h3>
              <p>Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention.</p>
              <a className="ui large button">Read More</a>
              <h4 className="ui horizontal header divider">
                <a href="#">Case Studies</a>
              </h4>
              <h3 className="ui header">Did We Tell You About Our Bananas?</h3>
              <p>Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but its really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance.</p>
              <a className="ui large button">I'm Still Quite Interested</a>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Introduction;
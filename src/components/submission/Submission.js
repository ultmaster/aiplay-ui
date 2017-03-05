import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Dropdown, Image, Icon, Label, Segment, TextArea, Form } from 'semantic-ui-react';


const mockDetail = `
<pre>

</pre>
`;


class Submission extends React.Component {

  constructor(props) {
    super(props);
    this.state = {id: '24753177'}
  }

  render() {
    // return (
    //   <Card style={{marginBottom: 15}}>
    //     <CardHeader
    //       title={"Submission #" + this.state.id}
    //       subtitle="Submitted at 18:37 Dec. 26, 2016"
    //       avatar={<ImageEdit/>}
    //       showExpandableButton={true}
    //       actAsExpander={true}
    //     />
    //     <CardText expandable={true}>
    //       <div dangerouslySetInnerHTML={{__html: mockDetail}}></div>
    //     </CardText>
    //     <CardActions expandable={true}>
    //       <FlatButton secondary={true} label="View Running Details"/>
    //     </CardActions>
    //   </Card>
    // );
    return (
      <Segment raised>
        <Label color="blue" ribbon={true}>{"Submission #" + this.state.id}</Label>
        <br/><br/>
        <p>Author: TooDifficult; submitted at 18:37 Dec. 26, 2016</p>
        <div dangerouslySetInnerHTML={{__html: mockDetail}}></div>
      </Segment>
    );
  }
}

export default Submission;
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Dropdown, Image, Icon, Label, Segment, TextArea, Form } from 'semantic-ui-react';


class Submit extends React.Component {

  constructor(props) {
    super(props);
    // const problem = props.hasOwnProperty('problem') ? props.problem : '';
    // this.state = {problem: problem, lang: "cpp", file: "", code: ""};
  }

  // handleFileChange = (e) => this.setState({file: e.target.value});
  // handleLangChange = (event, index, value) => this.setState({lang: value});
  // handleCodeChange = (event) => this.setState({code: event.target.value});
  // handleProblemChange = (event) => this.setState({problem: event.target.value});

  // openFileDialog = () => {
  //   const fileUploadDom = ReactDOM.findDOMNode(this.refs.inputUploadFile);
  //   fileUploadDom.click();
  // };
  //
  // submit = () => {
  //   console.log(this.state);
  //   // SEND REQUEST
  // };

  render() {
    // return (
    //   <Card style={{marginBottom: 15}}>
    //     <CardHeader
    //       title="Submit your code"
    //       subtitle="Paste it or upload a file"
    //       avatar={<ImageEdit/>}
    //     />
    //     <div style={{ paddingLeft: 20, paddingRight: 20}}>
    //       <TextField
    //         floatingLabelText="Problem ID"
    //         onChange={this.handleProblemChange}
    //         value={this.state.problem}
    //       />
    //       <br/>
    //       <SelectField
    //         floatingLabelText="Select your language"
    //         value={this.state.lang}
    //         onChange={this.handleLangChange}
    //       >
    //         <MenuItem value={"cpp"} primaryText="GNU G++11 4.8.4" />
    //         <MenuItem value={"java"} primaryText="Java 1.7.0_121" />
    //         <MenuItem value={"python"} primaryText="Python 3.4.3" />
    //       </SelectField>
    //       <br/>
    //       <TextField
    //         style={{ width: '100%' }}
    //         floatingLabelText="Paste your code here"
    //         onChange={this.handleCodeChange}
    //         value={this.state.code}
    //         multiLine={true}
    //         rows={2}
    //         rowsMax={15}
    //       />
    //       <br/><br/>
    //       <div style={{overflow: 'hidden' }}>
    //         <div style={{ display: "inline-block" }}>Or upload a file: </div>
    //       <RaisedButton
    //         style={{marginLeft: 10, marginRight: 10}}
    //         secondary={true}
    //         label="File"
    //         onClick={this.openFileDialog}/>
    //       <input
    //         ref="inputUploadFile"
    //         type="file"
    //         style={{"display" : "none"}}
    //         onChange={this.handleFileChange}/>
    //         {this.state.file}</div>
    //     </div>
    //     <CardActions style={{padding: 16}}>
    //       <FlatButton secondary={true} label="Submit Now" onTouchTap={this.submit} />
    //     </CardActions>
    //   </Card>
    // );
    const langSelections = [
      { key: 'cpp', value: 'cpp', text: 'GNU G++11 4.8.4' },
      { key: 'java', value: 'java', text: 'Java 1.7.0_121' },
      { key: 'python', value: 'python', text: 'Python 3.4.3' }
    ];
    return (
      <Segment raised>
        <Label color='red' ribbon={true}>Submit your code</Label>
        <br/><br/>
        <Form>
          <Dropdown placeholder='Select your language' selection={true} options={langSelections} />
          <br/><br/>
          <TextArea placeholder='Enter your code' />
        </Form>
        <br/>
        <Button content="Okay, send it" icon="send" labelPosition="right"/>
      </Segment>
    );
  }
}

export default Submit;
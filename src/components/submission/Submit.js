import React from 'react';
import { Form, Select, Input } from 'antd';


class Submit extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {

    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    const langSelections = [
      { value: 'cpp', text: 'GNU G++11 4.8.4' },
      { value: 'java', text: 'Java 1.7.0_121' },
      { value: 'python', text: 'Python 3.4.3' }
    ];
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item
          {...formItemLayout}
          label="Language"
          hasFeedback
        >
          {getFieldDecorator('language', {
            rules: [],
          })(
            <Select placeholder="Please select a language">
              {langSelections.map(({value, text}) =>
                <Option key={value} value={value}>{text}</Option>
              )}
            </Select>
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="Code"
        >
          {getFieldDecorator('code', {})(
            <Input type="textarea" rows={4}/>
          )}
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(Submit);
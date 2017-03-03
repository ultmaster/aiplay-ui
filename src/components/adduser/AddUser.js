// TODO: This is supposed to be an add-user dropdown.
// but now it is just a dropdown....


import React from 'react';
import { Button, Dropdown, Grid, Header } from 'semantic-ui-react'

// const getOptions = () => _.times(3, () => {
//   const name = faker.name.findName()
//   return { key: name, text: name, value: _.snakeCase(name) }
// })

class AddUser extends React.Component {

  componentWillMount() {
    this.setState({
      isFetching: false,
      multiple: true,
      search: true,
      searchQuery: null,
      value: [],
      options: [
        {
          "key": "Maida Wehner",
          "text": "Maida Wehner",
          "value": "maida_wehner"
        },
        {
          "key": "Harmon Dickens",
          "text": "Harmon Dickens",
          "value": "harmon_dickens"
        },
        {
          "key": "Karine Hammes",
          "text": "Karine Hammes",
          "value": "karine_hammes"
        }
      ]
    })
  }

  handleChange = (e, { value }) => this.setState({ value });
  handleSearchChange = (e, value) => this.setState({ searchQuery: value });

  // fetchOptions = () => {
  //   this.setState({ isFetching: true });
  //
  //   setTimeout(() => {
  //     this.setState({ isFetching: false, options: getOptions() });
  //     this.selectRandom();
  //   }, 500);
  // };

  // toggleSearch = (e) => this.setState({ search: e.target.checked })
  //
  // toggleMultiple = (e) => {
  //   const { value } = this.state
  //   const multiple = e.target.checked
  //   // convert the value to/from an array
  //   const newValue = multiple ? _.compact([value]) : _.head(value) || ''
  //   this.setState({ multiple, value: newValue })
  // }


  render() {
    const { multiple, options, isFetching, search, value } = this.state;

    return (
      <Dropdown
        fluid
        selection={true}
        multiple={multiple}
        search={search}
        options={options}
        value={value}
        placeholder='Add Users'
        onChange={this.handleChange}
        onSearchChange={this.handleSearchChange}
        disabled={isFetching}
        loading={isFetching}
      />
    )
  }
}

export default AddUser;

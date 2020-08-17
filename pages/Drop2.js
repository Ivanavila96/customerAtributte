import React, {Fragment, useCallback, useState} from "react";
import {Card, TextStyle,Checkbox, Button, Select, Page, Stack,Form, TextField, Heading, ChoiceList,} from "@shopify/polaris";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';



export class Drop_2 extends React.Component{

  constructor(){
    super();
    this.state = {
        selectedValue:''
       }
    this.handleChange = this.handleChange.bind(this);
  }

renderSelectedForm(param) {
switch(param) {
  case 'form_name1':
    return  <Form name="form_name1" id="form_name1" >  
              <TextStyle variation="strong">Deafault value:</TextStyle>       
                <input style={{width:'100%', height:'35px'}}
                  />
                <p>The default value for this attribute when 
                    it is shown to your customers</p>
                <br/>

                <TextStyle variation="strong">Placeholder:</TextStyle>
                <input style={{width:'100%', height:'35px'}}
                  />
                <p>The placeholder specifies a short hint 
                    that describes the expected value of 
                    this field</p>
                <br/>

                <TextStyle variation="strong">Values Required:</TextStyle>
                <input type="checkbox" name="required" value="Yes"/>
                <p>Tick if this attribute is required to be 
                    filled by your customers</p>
                <br/>

                {/*<TextStyle variation="strong">Input Validation:</TextStyle>
                <p>Input Validation:</p>
                <select style={{width:'100%', height:'35px'}}  >
                  <option value="" selected="selected"></option>
                  <option value="None">None</option>
                  <option value="Decimal Number">Decimal Number </option>
                  <option value="Integer Number">Integer Number</option>
                  <option value="Email">Email</option>
                  <option value="URL">URL</option>
                  <option value="Letters">Letters</option>
                 </select>
                <p>You need to chose default date again to 
                  save with new formatd</p>*/}
                <br/>
            </Form>;

  case 'form_name2':
    return  <Form name="form_name3" id="form_name3" >
              
                <TextStyle variation="strong">Default value:</TextStyle>
                <input style={{width:'100%', height:'35px'}}
                  id="date"
                  type="date"/>
                <p>Attributes are sorted in ascending 
                  order (eg: Attribute with sorting order 
                  1 will be displayed on top of Attribute 2)</p>
                <br/>

                <TextStyle variation="strong">Placeholder:</TextStyle>
                <input style={{width:'100%', height:'35px'}}
                 />
                <p>The placeholder specifies a short hint 
                    that describes the expected value of 
                    this field</p>
                <br/>

                <TextStyle variation="strong">Values Required:</TextStyle>
                <input type="checkbox" name="required" value="Yes"/>
                  <p>Tick if this attribute is required to be 
                    filled by your customers</p>
              <br/>

            </Form>;

  case 'form_name3':
    return  <Form name="form_name5" id="form_name5" >

                <TextStyle variation="strong">Values Required:</TextStyle>
                <input type="checkbox" name="required" value="Yes"/>
                <p>Tick if this attribute is required to be 
                  filled by your customers</p>
                <br/>

                <TextStyle variation="strong">Placeholder:</TextStyle>
                <input style={{width:'100%', height:'35px'}}
                  />
                <p>The placeholder specifies a short hint 
                  that describes the expected value of 
                  this field</p>
            </Form>;

  case 'form_name4':
    return  <Form name="form_name6" id="form_name6" >

                <TextStyle variation="strong">Default value:</TextStyle>
                <input type="checkbox" name="required" value="Yes"/>
                <p>The default value for this attribute when 
                  it is shown to your customers</p>
            </Form>;

case 'form_name5':
  return  <Form name="form_name7" id="form_name7" >

              <TextStyle variation="strong">Default Value:</TextStyle>
              <input style={{width:'100%', height:'35px'}}
                />
              <p>The default value for this attribute when 
                it is shown to your customers</p>
              <br/>
          </Form>;


  default:
    return null;
}
}

handleChange(event) { this.setState({selectedValue: event.target.value}); }

render() {
return (
  <div>
    <div>
            <form >
              <select value={this.state.selectedValue} style={{width:'100%', height:'35px'}} onChange={this.handleChange}>
                  <option value="" selected="selected"></option>
                  <option value="form_name1">Text Field</option>
                  <option value="form_name2">Date</option>
                  <option value="form_name3">Dropdown</option>
                  <option value="form_name4">Yes/No</option>
                  <option value="form_name5">Static Text</option>
              </select>
           </form>
           <br/>
    {this.renderSelectedForm(this.state.selectedValue)}
  </div>
  </div>
);
} 
}

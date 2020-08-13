import React, {Fragment, useCallback, useState} from "react";
import {Card, Form,Checkbox, TextStyle,Button, Select, Page, Stack, TextField, Heading, ChoiceList,} from "@shopify/polaris";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './AttributeCreation';
import {Drop_2} from './Drop2';
import { useForm } from 'react-hook-form'






 export class Drop_1 extends React.Component {


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
    return  <form  name="form_name1" id="form_name1" >
                <br/>
                <Heading>Attribute Properties</Heading>
                <hr/>

                <TextStyle variation="strong">Label*:</TextStyle>    
                <input style={{width:'100%', height:'35px'}}
      
                  placeholder="Your Company"/>
                <p>Attribute label</p>
                <br/>

                <TextStyle variation="strong">Code:</TextStyle>
                <input style={{width:'100%', height:'35px'}}
                  
                    placeholder="your-company"/>
                <p>For internal use. Must be unique with 
                    no spaces and length  &lt;= 30. Let 
                    it empty for auto generation</p>
                <br/>

                <TextStyle variation="strong">Sorting Order:</TextStyle>
                <input style={{width:'100%', height:'35px'}}
                
                  type="number"/>
                <p>Attributes are sorted in ascending 
                    order (eg: Attribute with sorting order 
                    1 will be displayed on top of Attribute 2)</p>
                <br/>
            
                <TextStyle variation="strong">Type*:</TextStyle>
                <Dropdown placeholder="Text Field" disabled />
                <br/>

                <TextStyle variation="strong">Default Value:</TextStyle>
                <input style={{width:'100%', height:'35px'}}
                  
                  />
                <p>The default value for this attribute when 
                    it is shown to your customers</p>
                <br/>

                <TextStyle variation="strong">Placeholder</TextStyle>
                <input style={{width:'100%', height:'35px'}}
                 
                 />
                <p>The placeholder specifies a short hint 
                    that describes the expected value of 
                    this field</p>
                <br/>

                <TextStyle variation="strong">Values Required</TextStyle>
                <input type="checkbox" name="required" value="Yes"/>
                    <p>Tick if this attribute is required to be 
                        filled by your customers</p>
                    <br/>

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
                    
            </form>;

  case 'form_name2':
            return    <Form name="form_name2" id="form_name2" >
            <br/>
            <Heading>Attribute Properties</Heading>
            <hr/>

            <TextStyle variation="strong">Label*:</TextStyle>
            <input style={{width:'100%', height:'35px'}}
              placeholder="How did you find us?"/>
            <p>Attribute label</p>
            <br/>

            <TextStyle variation="strong">Code:</TextStyle>
            <input style={{width:'100%', height:'35px'}}
              placeholder="how-did-you-find-us"/>
            <p>For internal use. Must be unique with 
              no spaces and length  &lt;= 30. Let 
              it empty for auto generation</p>
            <br/>
            
            <TextStyle variation="strong">Sorting Order:</TextStyle>
            <input style={{width:'100%', height:'35px'}}
              type="number"/>
            <p>Attributes are sorted in ascending 
                order (eg: Attribute with sorting order 
                1 will be displayed on top of Attribute 2)</p>
            <br/>

            <TextStyle variation="strong">Type*:</TextStyle>
                <Dropdown placeholder="Multiple Select" disabled />    
            <br/>
            
            <TextStyle variation="strong">Values Required:</TextStyle>
            <input type="checkbox" name="required" value="Yes"/>
            <p>Tick if this attribute is required to be 
                filled by your customers</p>
        </Form>;
          
  case 'form_name3':
    return  <Form name="form_name3" id="form_name3" >
                <br/>
                <Heading>Attribute Properties</Heading>
                <hr/>

                <TextStyle variation="strong">Label*:</TextStyle>
                <input style={{width:'100%', height:'35px'}}
                  placeholder="You register as"/>
                <p>Attribute label</p>
                <br/>
            
                <TextStyle variation="strong">Code:</TextStyle>
                <input style={{width:'100%', height:'35px'}}
                  placeholder="register-as"
                  disabled/>
                <p>For internal use. Must be unique with 
                  no spaces and length  &lt;= 30. Let 
                  it empty for auto generation</p>
                <br/>
                    
                <TextStyle variation="strong">Sorting Order:</TextStyle>
                <input style={{width:'100%', height:'35px'}}
                  type="number"/>
                <p>Attributes are sorted in ascending 
                  order (eg: Attribute with sorting order 
                  1 will be displayed on top of Attribute 2)</p>
                <br/>
            
                <TextStyle variation="strong">Type*:</TextStyle>
                    <Dropdown placeholder="Dropdown" disabled /> 
                    <p>Attribute options is managed in tab "Manage Options" on the left.</p>
                <br/>

                <TextStyle variation="strong">Values Required:</TextStyle>
                <input type="checkbox" name="required" value="Yes"/>
                <p>Tick if this attribute is required to be 
                    filled by your customers</p>
                <br/>

                <TextStyle variation="strong">Placeholder</TextStyle>      
                <input style={{width:'100%', height:'35px'}}
                  />
                <p>The placeholder specifies a short hint 
                    that describes the expected value of 
                    this field</p>
            </Form>;

case 'form_name4':
  return    <Form name="form_name4" id="form_name4" >
                <br/>
                <Heading>Attribute Properties</Heading>
                <hr/>

                <TextStyle variation="strong">Label*:</TextStyle>
                <input style={{width:'100%', height:'35px'}}
                  placeholder="Dear visitor!"/>
                <p>Attribute label</p>
                <br/>
            
                <TextStyle variation="strong">Code:</TextStyle>
                <input style={{width:'100%', height:'35px'}}
                  placeholder="dear-visitor"/>
                <p>For internal use. Must be unique with 
                    no spaces and length  &lt;= 30. Let 
                    it empty for auto generation</p>
                <br/>
                    
                <TextStyle variation="strong">Sorting Order:</TextStyle>
                <input style={{width:'100%', height:'35px'}}
                  type="number"/>
                <p>Attributes are sorted in ascending 
                    order (eg: Attribute with sorting order 
                    1 will be displayed on top of Attribute 2)</p>
                <br/>
            
                <TextStyle variation="strong">Type*:</TextStyle>            
                     <Dropdown placeholder="Static Text" disabled />   
                <br/>
                
                <TextStyle variation="strong">Default Value:</TextStyle>
                <input style={{width:'100%', height:'45px'}}
                  placeholder="<strong>Please</strong>, 
                  don&#039;t hesitate to answer 
                  the questions below. We want 
                  to know little more about you 
                  to improve our store and make you 
                  feel at home :)"/>
                <p>The default value for this attribute when 
                    it is shown to your customers</p>
            </Form>;
              
case 'form_name5':
  return    <Form name="form_name5" id="form_name5" >
                <br/>
                <Heading>Attribute Properties</Heading>
                <hr/>

                <TextStyle variation="strong">Label*:</TextStyle>
                <input style={{width:'100%', height:'35px'}}
                  placeholder="Date of birth"/>
                <p>Attribute label</p>
                <br/>
            
                <TextStyle variation="strong">Code:</TextStyle>
                <input style={{width:'100%', height:'35px'}}
                  placeholder="date-of-birth"/>
                <p>For internal use. Must be unique with 
                  no spaces and length  &lt;= 30. Let 
                  it empty for auto generation</p>
                <br/>
                    
                <TextStyle variation="strong">Sorting Order:</TextStyle>
                <input style={{width:'100%', height:'35px'}}
                  type="number"/>
                <p>Attributes are sorted in ascending 
                    order (eg: Attribute with sorting order 
                    1 will be displayed on top of Attribute 2)</p>
                <br/>
            
                <TextStyle variation="strong">Type*:</TextStyle>
                       <Dropdown placeholder="Date" disabled />
                <br/>
            
                <TextStyle variation="strong">Default Value:</TextStyle>
                <input style={{width:'100%', height:'35px'}}
                  id="date"
                  type="date"
                  />
                <p>The default value for this attribute when it 
                    is shown to your customers</p>
                <br/>

                <TextStyle variation="strong">Placeholder</TextStyle>
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

case 'form_name6':
  return    <Form name="form_name6" id="form_name6" >
                <br/>
                <Heading>Attribute Properties</Heading>
                <hr/>

                <TextStyle variation="strong">Label*:</TextStyle>
                <input style={{width:'100%', height:'35px'}}
                placeholder="Country"/>
                <p>Attribute label</p>
                <br/>
            
                <TextStyle variation="strong">Code:</TextStyle>
                <input style={{width:'100%', height:'35px'}}
                placeholder="country"/>
                <p>For internal use. Must be unique with 
                    no spaces and length  &lt;= 30. Let 
                    it empty for auto generation</p>
                <br/>
                
                <TextStyle variation="strong">Sorting Order:</TextStyle>
                <input style={{width:'100%', height:'35px'}}
                type="number"/>
                <p>Attributes are sorted in ascending 
                    order (eg: Attribute with sorting order 
                    1 will be displayed on top of Attribute 2)</p>
                <br/>
            
                <TextStyle variation="strong">Type*:</TextStyle>
                    <Dropdown placeholder="Dropdown" disabled />
                    <p>Attribute options is managed in tab "Manage Options" on the left.</p>
                <br/>
                
                <TextStyle variation="strong">Values Required:</TextStyle>
                <input type="checkbox" name="required" value="Yes"/>
                <p>Tick if this attribute is required to be 
                    filled by your customers</p>
                <br/>

                <TextStyle variation="strong">Placeholder</TextStyle>
                <input style={{width:'100%', height:'35px'}}
                />
                <p>The placeholder specifies a short hint 
                    that describes the expected value of 
                    this field</p>
            </Form>;

case 'form_name7':
  return    <Form name="form_name7" id="form_name7" >
                <br/>
                <Heading>Attribute Properties</Heading>
                <hr/>

                <TextStyle variation="strong">Label*:</TextStyle>      
                <input style={{width:'100%', height:'35px'}}
                  placeholder="Accept Marketing Email"/>
                <p>Attribute label</p>
                <br/>
            
                <TextStyle variation="strong">Code:</TextStyle>
                <input style={{width:'100%', height:'35px'}}
                  placeholder="accept-marketing-email-1"/>
                <p>For internal use. Must be unique with 
                    no spaces and length  &lt;= 30. Let 
                    it empty for auto generation</p>
                <br/>
                
                <TextStyle variation="strong">Sorting Order:</TextStyle>
                <input style={{width:'100%', height:'35px'}}
                  type="number"/>
                <p>Attributes are sorted in ascending 
                    order (eg: Attribute with sorting order 
                    1 will be displayed on top of Attribute 2)</p>
                <br/>
            
                <TextStyle variation="strong">Type*:</TextStyle>
                    <Dropdown placeholder="Yes/No" disabled /> 
                <br/>
                
                <TextStyle variation="strong">Default Value:</TextStyle>
                <input type="checkbox" name="required" value="Yes"/>
                  <p>The default value for this 
                    attribute when it is shown to your customers</p>
            </Form>;

case 'form_name8':
  return    <Form name="form_name8" id="form_name8" >
                <br/>
                <Heading>Attribute Properties</Heading>
                <hr/>

                <TextStyle variation="strong">Label*:</TextStyle>
                <input style={{width:'100%', height:'35px'}}
                  placeholder="Interests"/>
                <p>Attribute label</p>
                <br/>
            
                <TextStyle variation="strong">Code:</TextStyle>
                <input style={{width:'100%', height:'35px'}}
                  placeholder="interests"/>
                <p>For internal use. Must be unique with 
                    no spaces and length  &lt;= 30. Let 
                    it empty for auto generation</p>
                <br/>
                
                <TextStyle variation="strong">Sorting Order:</TextStyle>
                <input style={{width:'100%', height:'35px'}}
                  type="number"/>
                <p>Attributes are sorted in ascending 
                    order (eg: Attribute with sorting order 
                    1 will be displayed on top of Attribute 2)</p>
                <br/>
            
                <TextStyle variation="strong">Type*:</TextStyle>
                    <Dropdown placeholder="Multiple Select" disabled />
                    <p>Attribute options is managed in tab "Manage Options" on the left.</p>    
                <br/>
                
                <TextStyle variation="strong">Values Required:</TextStyle>
                <input type="checkbox" name="required" value="Yes"/>
                    <p>Tick if this attribute is required to be 
                        filled by your customers</p>
            </Form>;      

  default:
    return <Form onChange={fields => this.onchange(fields)}>
    <hr/>
        <br/>
        <Heading>Attribute Properties</Heading>    
        <br/>
    <hr/>
    <br/>
        
        <TextStyle variation="strong">Label*:</TextStyle>
        <TextField 
          name="label"
          placeholder="Attribute Label"
          value={this.state.label}
          onChange={e=> this.change(e)}/>
        <p>Attribute label</p>
        <br/>

        <TextStyle variation="strong">Code:</TextStyle>
        <TextField 
        />
        <p>For internal use. Must be unique with 
           no spaces and length &lt;= 30. Let 
           it empty for auto generation</p>
        <br/>

        <TextStyle variation="strong">Sorting Order:</TextStyle>
        <TextField 
          type="number"/>
        <br/>
        <br/>

        <TextStyle variation="strong">Type*:</TextStyle>
            <Drop_2/>
        <br/>
            </Form>;
}
}


handleChange(event) { this.setState({selectedValue: event.target.value}); }

render() {
  
return (
  <>
  <div>
    <div >
            <form >
              <select style={{width:'100%', height:'35px'}} value={this.state.selectedValue} onChange={this.handleChange}>
                  <option value="" selected="selected"></option>
                  <option value="form_name1">Your company</option>
                  <option value="form_name2">How did you find us?</option>
                  <option value="form_name3">You register as</option>
                  <option value="form_name4">Dear Visitor!</option>
                  <option value="form_name5">Date of birth</option>
                  <option value="form_name6">Country</option>
                  <option value="form_name7">Accept Maketing Email</option>
                  <option value="form_name8">Interests</option>
              </select>
           </form>
           <p>If you choose a template, the following 
  attribute fields will be filled automatically. 
  Or you can leave this box blank and create your unique 
  field  by filling in these boxes.</p>
<br/>
  
    {this.renderSelectedForm(this.state.selectedValue)}
    
  </div>
  </div>
  

  </>
);
}
}
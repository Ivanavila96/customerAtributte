import React, {Fragment, useCallback, useState, useRef} from "react";
import 'react-dropdown/style.css';
import {Card, Form, Tabs, Checkbox, ChoiceList, Button, Heading,EmptyState, AppProvider,Layout,Page, Stack, ActionList,  Avatar, ContextualSaveBar, FormLayout,Frame, Loading,Modal, Navigation, SkeletonBodyText, SkeletonDisplayText, SkeletonPage, TextContainer, TextField, Toast, TopBar, Link} from "@shopify/polaris";
import { Redirect } from '@shopify/app-bridge/actions';
import {ArrowLeftMinor, NoteMajorMonotone, HomeMajorMonotone, OrdersMajorTwotone, MobileHamburgerMajorMonotone, ListMajorMonotone, BankMajorMonotone,TroubleshootMajorMonotone,SettingsMajorMonotone} from '@shopify/polaris-icons';
import Dropdown from 'react-dropdown';
import { useForm } from 'react-hook-form'


const AttCompany = (props) =>{

  const{register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) =>{
    data.id = null
    props.addAtributo(data)
    e.target.reset();
  
  }

  

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelectedTab(selectedTabIndex),
    [],
  );
  
  const tabs = [
    {
      id: 'FormCompany',
      content: 'Properties',
      accessibilityLabel: 'All customers',
      panelID: 'all-customers-content',
    },
  ];


  const options = [
    {label: 'None', value: 'None'},
    {label: 'Decimal Number', value: 'Decimal Number'},
    {label: 'Integer Number', value: 'Integer Number'},
    {label: 'Email', value: 'Email'},
    {label: 'URL', value: 'URL'},
    {label: 'Letters', value: 'Letters'},
    {label: 'Letters (a-z, A-Z) or Numbers (0-9) ', value: 'Letters (a-z, A-Z) or Numbers (0-9) '},
    {label: 'Custom', value: 'Custom'},
  ];

  const [selected, setSelected] = useState(['hidden']);
  const handleChange = useCallback((value) => setSelected(value), []);
  
  const [textFieldValue, setTextFieldValue] = useState('');
  const handleTextFieldChange = useCallback(
    (value) => setTextFieldValue(value),
    [],
  );

  const [value, setValue] = useState('');
  const handleChangePh = useCallback((newValue) => setValue(newValue), []);

  const [valueDV, setValueDV] = useState('');
  const handleChangeDV = useCallback((newValueDV) => setValueDV(newValueDV), []);

  
  const handleChangeNo = useCallback((newValueNo) => setValueNo(newValueNo), []);
  const [valueNo, setValueNo] = useState('1');

  
  const [checked, setChecked] = useState(false);
  const handleChangeSingle = useCallback((newChecked) => setChecked(newChecked), []);

 {/*navbar */}


return( 

<>  
   
  <Page>
    <Card>
      <Tabs tabs={tabs} selected={selectedTab} onSelect={handleTabChange}>
    <Card.Section >
  
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card sectioned title="Attribute Properties">
        <hr/>

        <input style={{width:'100%', height:'35px'}}
          type="text"
            label="Label*:"
            name="label"
            ref ={register({required: {value:true, message: 'Field required'}})}
            placeholder="Your Company"/>
          <p>Attribute label</p>
          <br/>
   
          <input style={{width:'100%', height:'35px'}}
            label="Code:"
            placeholder="your-company"
            ref ={register({required: {value:true, message: 'Field required'}})}
            name="code"
            disabled/>
          <p>For internal use. Must be unique with 
            no spaces and length  &lt;= 30. Let 
            it empty for auto generation</p>
          <br/>

          <input style={{width:'100%', height:'35px'}}
          label="Sorting Order:"
          type="number"
          ref ={register({required: {value:true, message: 'Field required'}})}
           />
        <p>Attributes are sorted in ascending 
          order (eg: Attribute with sorting order 
          1 will be displayed on top of Attribute 2)</p>
        <br/>
  
          <p>Type*:</p>
            <Dropdown placeholder="Text Field" disabled />
          <br/>
   
          <input style={{width:'100%', height:'35px'}}
          label="Default value:"
          ref ={register({required: {value:true, message: 'Field required'}})}
            />
        <p>The default value for this attribute when 
            it is shown to your customers</p>
        <br/>

        <input style={{width:'100%', height:'35px'}}
          label="Placeholder:"
          ref ={register({required: {value:true, message: 'Field required'}})}
          />
        <p>The placeholder specifies a short hint 
            that describes the expected value of 
            this field</p>
        <br/>

        <Checkbox
          label="Values Required"
          checked={checked}
          ref ={register({required: {value:true, message: 'Field required'}})}
            />
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
           
          <br/>
         
            <br/>
              <Heading>Attribute Configuration</Heading>    
            <br/>
            <hr/>
  
       
          <ChoiceList
              allowMultiple
              choices={[
                {
                  label: 'Show on Cart page:',
                  value: 'shipping',
                  helpText:
                    'Tick if you want to use this attribute on cart page.',
                },
                {
                  label: 'Show on Register page:',
                  value: 'confirmation',
                  helpText:
                    'Tick if you want to use this attribute on register page.',
                },
              ]}
          selected={selected}
          onChange={handleChange}/>

          <button  primary type="submit">Add atribute</button>
          </Card>
      </form>
        </Card.Section>
      </Tabs>
    </Card>
    <br/>
  </Page>  
</>
)
            }
            export default AttCompany

import React, {Fragment, useCallback, useState, useRef} from "react";
import 'react-dropdown/style.css';
import {Card,DatePicker, Tabs, Checkbox, Form, ChoiceList, Button, Heading,EmptyState, AppProvider,Layout,Page, Stack, ActionList,  Avatar, ContextualSaveBar, FormLayout,Frame, Loading,Modal, Navigation, SkeletonBodyText, SkeletonDisplayText, SkeletonPage, TextContainer, TextField, Toast, TopBar, Link} from "@shopify/polaris";
import { Redirect } from '@shopify/app-bridge/actions';
import {ArrowLeftMinor, NoteMajorMonotone, HomeMajorMonotone, OrdersMajorTwotone, MobileHamburgerMajorMonotone, ListMajorMonotone, BankMajorMonotone,TroubleshootMajorMonotone,SettingsMajorMonotone} from '@shopify/polaris-icons';
import Dropdown from 'react-dropdown';


const AttDateBirth = (props) => {


  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelectedTab(selectedTabIndex),
    [],
  );
  
  const tabs = [
    {
      id: 'FormDateB',
      content: 'Properties',
      accessibilityLabel: 'All customers',
      panelID: 'all-customers-content',
    },
   
  ];

  const [valueDate, setValueDate] = useState('');
  const handleChangeDate = useCallback((newValueDate) => setValueDate(newValueDate), []);

  const [selected, setSelected] = useState(['hidden']);
  const handleChange = useCallback((value) => setSelected(value), []);
 
  const [textFieldValue, setTextFieldValue] = useState('');
  const handleTextFieldChange = useCallback(
    (value) => setTextFieldValue(value),
    [],
  );

  const [value, setValue] = useState('');
  const handleChangePh = useCallback((newValue) => setValue(newValue), []);

  const [valueFormat, setValueFormat] = useState('');
  const handleChangeFornmat = useCallback((newValueFormat) => setValueFormat(newValueFormat), []);
  
  const handleChangeNo = useCallback((newValueNo) => setValueNo(newValueNo), []);
  const [valueNo, setValueNo] = useState('1');

  const [checked, setChecked] = useState(false);
  const handleChangeSingle = useCallback((newChecked) => setChecked(newChecked), []);
  
   {/*navbar */}

return(
<>
  <Card sectioned title=" Attribute Date of birth">
    <Stack distribution="leading">
      <Link url='/Index' >
        Home
      </Link>
           
      <Link url='/AttributesTemplates' >
        Attributes Templates
      </Link>
        <p>Attribute</p>
    </Stack>        
  </Card>
        
<Page>             
  <Card>
    <Tabs tabs={tabs} selected={selectedTab} onSelect={handleTabChange}>
      <Card.Section >
        <Form>
          <Card sectioned title="Attribute Properties">
            <hr/>

            <TextField
              label="Label*:"
              value={textFieldValue}
              onChange={handleTextFieldChange}
              placeholder="Date of birth"/>
            <p>Attribute label</p>
            <br/>
        
            <TextField
              label="Code:"
              placeholder="date-of-birth"
              disabled/>
            <p>For internal use. Must be unique with 
              no spaces and length  &lt;= 30. Let 
              it empty for auto generation</p>
            <br/>
            
            <TextField
              label="Sorting Order:"
              type="number"
              value={valueNo}
              onChange={handleChangeNo}/>
            <p>Attributes are sorted in ascending 
              order (eg: Attribute with sorting order 
              1 will be displayed on top of Attribute 2)</p>
            <br/>
  
                <p>Type*:</p>
                  <Dropdown placeholder="Date" disabled />
                <br/>
   
            <TextField
              id="date"
              label="Default value:"
              type="date"
              defaultValue="DD-MM-YYYY"
              value={valueDate}
              onChange={handleChangeDate}/>
            <p>The default value for this attribute when it is shown to your customers</p>
            <br/>

            <TextField
              label="Placeholder:"
              value={value}
              onChange={handleChangePh}/>
            <p>The placeholder specifies a short hint 
                that describes the expected value of 
                this field</p>
            <br/>

            <Checkbox
                label="Values Required"
                checked={checked}
                onChange={handleChangeSingle}/>
            <p>Tick if this attribute is required to be 
                filled by your customers</p>
            <br/>

            
            <TextField
                label="Format Options:"
                value={valueFormat}
                onChange={handleChangeFornmat}/>
            <p>You need to chose default date again to 
                save with new format</p>
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
          </Card>
        </Form>  
      </Card.Section>
    </Tabs>
  </Card>
  <br/>
</Page>  
</>
  
)
}

export default AttDateBirth

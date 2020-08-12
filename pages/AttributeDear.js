import React, {Fragment, useCallback, useState, useRef} from "react";
import 'react-dropdown/style.css';
import {Card, Checkbox,Form, Tabs, ChoiceList, Button, AppProvider,Heading,EmptyState, Layout,Page, Stack, ActionList,  Avatar, ContextualSaveBar, FormLayout,Frame, Loading,Modal, Navigation, SkeletonBodyText, SkeletonDisplayText, SkeletonPage, TextContainer, TextField, Toast, TopBar, Link} from "@shopify/polaris";
import { Redirect } from '@shopify/app-bridge/actions';
import {ArrowLeftMinor, NoteMajorMonotone, HomeMajorMonotone, OrdersMajorTwotone, MobileHamburgerMajorMonotone, ListMajorMonotone, BankMajorMonotone,TroubleshootMajorMonotone,SettingsMajorMonotone} from '@shopify/polaris-icons';
import Dropdown from 'react-dropdown';


const AttDear = (props) => {

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelectedTab(selectedTabIndex),
    [],
  );
  
  const tabs = [
    {
      id: 'FormDear',
      content: 'Properties',
      accessibilityLabel: 'All customers',
      panelID: 'all-customers-content',
    },  
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

  
  const handleChangeNo = useCallback((newValueNo) => setValueNo(newValueNo), []);
  const [valueNo, setValueNo] = useState('1');

    {/*navbar */}


return(  

<>
  <Card sectioned title=" Attribute Dear visitor!">
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
              placeholder="Dear visitor!"/>
            <p>Attribute label</p>
            <br/>
        
            <TextField
              label="Code:"
              placeholder="dear-visitor"
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
                <Dropdown placeholder="Static Text" disabled />
              <br/>
      
            <TextField
              label="Default Value::"
              value={value}
              onChange={handleChangePh}
              placeholder="<strong>Please</strong>, 
              don&#039;t hesitate to answer 
              the questions below. We want 
              to know little more about you 
              to improve our store and make you 
              feel at home :)"/>
            <p>The default value for this attribute when 
                it is shown to your customers</p>
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

export default AttDear

import 'react-dropdown/style.css';
import React, {useCallback, useState, useRef} from "react";
import {Card, DataTable ,Link,Layout,Page, Stack, AppProvider,ActionList,  ContextualSaveBar, FormLayout,Frame, Loading,Modal, Navigation, SkeletonBodyText, SkeletonDisplayText, SkeletonPage, TextContainer, TextField, Toast, TopBar, Heading} from "@shopify/polaris";
import {NoteMajorMonotone, HomeMajorMonotone, MobileHamburgerMajorMonotone, BankMajorMonotone,TroubleshootMajorMonotone,SettingsMajorMonotone} from '@shopify/polaris-icons';


export default function Customers() {
 
  const [valueDateS, setValueDateS] = useState('');
  const handleChangeDateS = useCallback((newValueDateS) => setValueDateS(newValueDateS), []);

  const [valueDateE, setValueDateE] = useState('');
  const handleChangeDateE = useCallback((newValueDateE) => setValueDateE(newValueDateE), []);

  const [valueMail, setValueMail] = useState('');
  const handleChangeMail = useCallback((newValueMail) => setValueMail(newValueMail),[],);

  const [valueCN, setValueCN] = useState('');
  const handleChangeCN = useCallback((newValueCN) => setValueCN(newValueCN), []);

  const [valueCompany, setValueCompany] = useState('');
  const handleChangeCompany = useCallback((newValueCompany) => setValueCompany(newValueCompany), []);


const rows = [
  ['', '', '', NoteMajorMonotone, ],
];

  {/*navbar */}

return(
<>
  <Card sectioned title="Customers">
    <Stack distribution="leading">
      <Link url='/Index' >
        Home
      </Link>           
        <p>Customers</p>
    </Stack>        
  </Card>

<Page>
  <Card sectioned>
    <FormLayout>
      <FormLayout.Group >
                
                <TextField 
                  label="Created Date" 
                  type="date" 
                  id="dateCustomersInicial"
                  defaultValue="DD-MM-YYYY"
                  value={valueDateS}
                  onChange={handleChangeDateS}/>

                <TextField 
                  label="To"
                  type="date" 
                  id="dateCustomersFinal"
                  defaultValue="DD-MM-YYYY"
                  value={valueDateE}
                  onChange={handleChangeDateE}/>

                <TextField 
                  label="Email" 
                  value={valueMail}
                  type="email"
                  onChange={handleChangeMail}/>

                <TextField 
                  label="Customer Name" 
                  value={valueCN}
                  onChange={handleChangeCN}/>

                <TextField label="Company" 
                   value={valueCompany}
                   onChange={handleChangeCompany}/>
      </FormLayout.Group>
    </FormLayout>  
  </Card>
      
  <Card>
        <DataTable
          columnContentTypes={[
            'text',
            'text',
            'date',
            'numeric',
            'numeric',
            'text',
            'text',
          ]}
          headings={[
            'Name',
            'Email',
            'Date',
            'Orders Count',
            'Total Spent',
            'Action',
            'Company',
          ]}
          rows={rows}/>
  </Card>
</Page>
</>
)
}


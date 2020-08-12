import 'react-dropdown/style.css';
import React, {useCallback, useState, useRef} from "react";
import {Card, DataTable ,Link,Layout,Page, AppProvider,Stack, ActionList, ContextualSaveBar, FormLayout,Frame, Loading,Modal, Navigation, SkeletonBodyText, SkeletonDisplayText, SkeletonPage, TextContainer, TextField, Toast, TopBar, Heading} from "@shopify/polaris";
import {NoteMajorMonotone, HomeMajorMonotone, MobileHamburgerMajorMonotone, BankMajorMonotone,TroubleshootMajorMonotone,SettingsMajorMonotone} from '@shopify/polaris-icons';

export default function Orders(){

const rows = [
  ['', '', '', NoteMajorMonotone, ],
];

const [valueCompany, setValueCompany] = useState('');
const handleChangeCompany = useCallback((newValueCompany) => setValueCompany(newValueCompany), []);

const [valueDateS, setValueDateS] = useState('');
  const handleChangeDateS = useCallback((newValueDateS) => setValueDateS(newValueDateS), []);

  const [valueDateE, setValueDateE] = useState('');
  const handleChangeDateE = useCallback((newValueDateE) => setValueDateE(newValueDateE), []);

  {/*navbar */}

return(
<>      
  <Card sectioned title="Orders">
    <Stack distribution="leading">
      <Link url='/Index' >
        Home
      </Link>
        <p>Orders</p>
    </Stack>
  </Card>

<Page>
  <Card sectioned>
    <FormLayout>
      <FormLayout.Group>
                
              <TextField 
                label="Created Date" 
                type="date" 
                id="dateOrderssInicial"
                defaultValue="DD-MM-YYYY"
                value={valueDateS}
                onChange={handleChangeDateS}/>

              <TextField 
                label="To"
                 type="date" 
                 id="dateOrdersFinal"
                 defaultValue="DD-MM-YYYY"
                 value={valueDateE}
                 onChange={handleChangeDateE}/>

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
            'text',
            'numeric',
            'text',
            'text',
          ]}
          headings={[
            'Order',
            'Date',
            'Customer',
            'Total',
            'Action',
            'Company',
          ]}
          rows={rows}/>
  </Card>
</Page>
</>

)
}
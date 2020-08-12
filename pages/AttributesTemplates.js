import 'react-dropdown/style.css';
import React, {useCallback, useState, useRef} from "react";
import {Card, DataTable ,Link,Layout,Page, Stack, ActionList,  AppProvider,ContextualSaveBar, FormLayout,Frame, Loading,Modal, Navigation, SkeletonBodyText, SkeletonDisplayText, SkeletonPage, TextContainer, TextField, Toast, TopBar, Heading} from "@shopify/polaris";
import {NoteMajorMonotone, HomeMajorMonotone, MobileHamburgerMajorMonotone, BankMajorMonotone,TroubleshootMajorMonotone,SettingsMajorMonotone} from '@shopify/polaris-icons';


function AttTemplates(){



const rows = [
  ['accept-marketing-email-1', 'Accept Marketing Email', 'Yes/No', <Link url='/AttributeMarketingEmail'>View</Link> ],
  ['country', 'Country', 'Dropdown',<Link url='/AttributeCountry'>View</Link> ],
  ['date-of-birth', 'Date of birth', 'Date',<Link url='/AttributeDateofBirth'>View</Link> ],
  ['how-find', 'How did you find us?', 'Multiple Select',<Link url='/AttributeHow'>View</Link> ],
  ['interests', 'interests', 'Multiple Select',<Link url='/AttributeInterests'>View</Link> ],
  ['register-as', 'You register as', 'Dropdown',<Link url='/AttributeRegister'>View</Link> ],
  ['static-text', 'Dear visitor!', 'Static Text',<Link url='/AttributeDear'>View</Link> ],
  ['your-company', 'Your company', 'Text Field',<Link url='/AttributeCompany'>View</Link> ],

];

  {/*navbar */}

return(
<>
  <Card sectioned title="Attribute Templates">
    <Stack distribution="leading">
      <Link url='/Index'>
        Home
      </Link>           
        <p>Attribute Templates</p>
    </Stack>
  </Card>

<Page>
  <Card sectioned>
    <Heading>You can choose your attributes from these templates or create your own in attribute tab.</Heading>  
  </Card>
    <Card>
      <DataTable
        columnContentTypes={[
          'text',
          'text',
          'text',
          'icon',
        ]}
        headings={[
          'Code',
          'Label',
          'Type',
          'Action',
        ]}
          rows={rows}/>
    </Card>
  </Page>
  <br/>
  <br/>
</>

)
      }

export default AttTemplates
  
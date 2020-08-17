import React, {Fragment, useCallback, useState, useRef} from "react";
import {Card, Button,  Link,EmptyState, Layout,Page, Stack, Frame,AppProvider,ActionList,  Avatar, ContextualSaveBar, FormLayout, Loading,Modal, Navigation, SkeletonBodyText, SkeletonDisplayText, SkeletonPage, TextContainer, TextField, Toast, TopBar, Icon} from "@shopify/polaris";
import { Redirect } from '@shopify/app-bridge/actions';
import { TitleBar } from '@shopify/app-bridge-react';
import {CustomersMajorMonotone, CheckoutMajorMonotone, NoteMajorMonotone, HomeMajorMonotone, OrdersMajorTwotone, MobileHamburgerMajorMonotone, ListMajorMonotone, BankMajorMonotone,TroubleshootMajorMonotone,SettingsMajorMonotone} from '@shopify/polaris-icons';
import actualPageMarkup from './navbar.js';
import store from 'store-js';



function Index (){

return(
<>   
    {/* Encabezado de página*/}
    <Card sectioned title="Dashboard">
      <p> Home</p>
    </Card>

    {/*Cuerpo de página*/}
    <Page>
    <TitleBar
      title="Customer"
    />
      <Card>
            <Card.Section title="Quickstart">
            <br/>
              <Stack distribution="equalSpacing">
                <p>Create an attribute</p>     
                  <Link url='/componenteslist'>
                    <Button primary >Start Task</Button>
                  </Link>
              </Stack>
            </Card.Section>
        </Card>

        <Card>
          <Card.Section title="Application Stats">
            <Stack distribution="equalSpacing">  
              <Card.Section> 
                <Link url='/Customers'>
                  <Button  size="large">  
                    <Stack distribution="equalSpacing">
                      <Icon source={CustomersMajorMonotone} />
                      <p>Total Customers</p>
                      <p>0</p>
                    </Stack>
                  </Button>
                </Link>
              </Card.Section>
      
          <Card.Section> 
            <Link url='/Orders'>
              <Button  size="large">
                <Stack distribution="equalSpacing">
                  <Icon source={CheckoutMajorMonotone} />
                    <p>Total Orders</p>
                    <p>0</p>
                </Stack>
              </Button>
            </Link>
          </Card.Section>
    
          <Card.Section> 
            <Link url='/componenteslist'>
              <Button size="large">
                <Stack distribution="equalSpacing">
                  <Icon source={ListMajorMonotone} />
                    <p>Total Attributes</p>
                    <p>0</p>
                </Stack>
              </Button>
            </Link>
          </Card.Section>
            </Stack>
        </Card.Section>
      </Card>
    </Page>
<br/>
</>
)
}
 export default Index 


 
 
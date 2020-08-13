import 'react-dropdown/style.css';
import Dropdown from 'react-dropdown';
import React, {Fragment, Component, useCallback, useState, useRef} from "react";
import {Card,Heading, Button, DataTable ,Link,EmptyState, AppProvider,Layout,Page, Stack, ActionList,  Avatar, ContextualSaveBar, FormLayout,Frame, Loading,Modal, Navigation, SkeletonBodyText, SkeletonDisplayText, SkeletonPage, TextContainer, TextField, Toast, TopBar} from "@shopify/polaris";
import { Redirect } from '@shopify/app-bridge/actions';
import {ArrowLeftMinor, AddMajorMonotone, NoteMajorMonotone, HomeMajorMonotone, OrdersMajorTwotone, MobileHamburgerMajorMonotone, ListMajorMonotone, BankMajorMonotone,TroubleshootMajorMonotone,SettingsMajorMonotone} from '@shopify/polaris-icons';
import AttributeTable from './TablaComponentes';
import AttCompany from './AttributeCompany';
import {form} from './AttributeCreation';
import {v4 as uuidv4} from 'uuid';

function Lista  (){
  
  const AtributosData = [
    { id: uuidv4(), code: 'company', label: 'company', Type: 'Text Field', sortingorder: 1, status:'on', cartpage:'Yes', registerpage:'Yes', accountpage:'No', ordergrid:'Yes', customergrid:'Yes'},
    { id: uuidv4(), code: 'company', label: 'company', Type: 'Text Field', sortingorder: 2, status:'on', cartpage:'Yes', registerpage:'Yes', accountpage:'No', ordergrid:'Yes', customergrid:'Yes'},
    { id: uuidv4(), code: 'company', label: 'company', Type: 'Text Field', sortingorder: 3, status:'on', cartpage:'Yes', registerpage:'Yes', accountpage:'No', ordergrid:'Yes', customergrid:'Yes'},
    { id: uuidv4(), code: 'company', label: 'company', Type: 'Text Field', sortingorder: 4, status:'on', cartpage:'Yes', registerpage:'Yes', accountpage:'No', ordergrid:'Yes', customergrid:'Yes'},
    { id: uuidv4(), code: 'company', label: 'company', Type: 'Text Field', sortingorder: 4, status:'on', cartpage:'Yes', registerpage:'Yes', accountpage:'No', ordergrid:'Yes', customergrid:'Yes'},
    { id: uuidv4(), code: 'company', label: 'company', Type: 'Text Field', sortingorder: 2, status:'on', cartpage:'Yes', registerpage:'Yes', accountpage:'No', ordergrid:'Yes', customergrid:'Yes'},
  ]

  const [Atributos, setAtributos] = useState(AtributosData)

  const addAtributo = (Atributo) => {
    Atributo.id = uuidv4()
    setAtributos([...Atributos, Atributo])
  }

  const deleteAtributo = (id) => {
    setAtributos(Atributos.filter((Atributo) => Atributo.id !== id))
  }

  return (
<>
    <Card sectioned title="Attributes">
       
    <Stack distribution="leading">
      <Link url='/Index' >
        Home
      </Link>         
        <p>Attributes</p>
    </Stack>             
    
  </Card>

    <Card sectioned>
      <Stack distribution="center">
      <AttributeTable deleteAtributo={deleteAtributo} Atributos={Atributos}/>
      </Stack>
     <form addAtributo={addAtributo}/>
    </Card>
    </>
  )
}

export default Lista

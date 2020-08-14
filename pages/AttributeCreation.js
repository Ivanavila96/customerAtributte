import React, {Fragment, useCallback, useState, useRef, Component} from "react";
import {Drop_1} from './Drop1';
import {Drop_2} from './Drop2';
import 'react-dropdown/style.css';
import {Card,Form, ChoiceList, TextStyle,Button, Heading,EmptyState, AppProvider,Layout,Page, Stack, ActionList, Avatar, ContextualSaveBar, FormLayout,Frame, Loading,Modal, Navigation, SkeletonBodyText, SkeletonDisplayText, SkeletonPage, TextContainer, TextField, Toast, TopBar, Link} from "@shopify/polaris";
import { Redirect } from '@shopify/app-bridge/actions';
import {ArrowLeftMinor, NoteMajorMonotone, HomeMajorMonotone, OrdersMajorTwotone, MobileHamburgerMajorMonotone, ListMajorMonotone, BankMajorMonotone,TroubleshootMajorMonotone,SettingsMajorMonotone} from '@shopify/polaris-icons';
import {mostrar} from './Drop1';
import { useForm } from 'react-hook-form'
import {v4 as uuidv4} from 'uuid';


const AttributeCreation = (props) => {

  
  const {register, errors, handleSubmit} = useForm();

  const onSubmit = (data, e) => {
      data.id = null
      console.log(data)
      props.addAtributo(data)
      e.target.reset();
  }


return(
<>
  <Card sectioned title=" Create attribute">
    <Stack distribution="leading">
      <Link url='/Index' >
        Home
      </Link>
           
      <Link url='/componenteslist' >
        Attributes
      </Link>
        <p>Attribute</p>
    </Stack>      
  </Card>
        
<Page>
  

  <form onSubmit={handleSubmit(onSubmit)}>
    <Card sectioned>     
      
        <hr/>
        <br/>
        <Heading>Attribute Properties</Heading>    
        <br/>
    <hr/>
    <br/>
        
        <TextStyle variation="strong">Label*:</TextStyle>
        <input style={{width:'100%', height:'35px'}}
          type="text"
          name="label"
          placeholder="Attribute Label"
          ref={register({required: {value: true, message: 'Valor requerido'}})}/>
        <p>Attribute label</p>
        <br/>

        <TextStyle variation="strong">Code:</TextStyle>
        <input style={{width:'100%', height:'35px'}}
        type="text"
        name="code"
        placeholder="Attribute Label"
        ref={register({required: {value: true, message: 'Valor requerido'}})}/>
        <p>For internal use. Must be unique with 
           no spaces and length &lt;= 30. Let 
           it empty for auto generation</p>
        <br/>

        <TextStyle variation="strong">Sorting Order:</TextStyle>
        <input style={{width:'100%', height:'35px'}}
        name="sortingorder"
        type="number"
        placeholder="Attribute Label"
        ref={register({required: {value: true, message: 'Valor requerido'}})}/>
          
        <br/>
        <br/>

        <TextStyle variation="strong">Type*:</TextStyle>
            <Drop_2/>
        <br/>
      <br/>
      <Heading>Attribute Configuration</Heading>    
      <br/>
      <hr/>
                <br/>
               <TextStyle variation="strong">Show on Cart Page:</TextStyle>
                <input type="checkbox" name="required" value="Yes" />
                <p>Tick if this attribute is required to be 
                    filled by your customers</p>
                <br/>


                <TextStyle variation="strong">Show on Register Page:</TextStyle>
                <input type="checkbox" name="required" value="Yes" />
                <p>Tick if this attribute is required to be 
                    filled by your customers</p>
                <br/>
                
       
              
<br/>
<br/>
<Stack distribution="trailing">
<button type="submit" >Add new Atribute</button>
</Stack>
      </Card>
      <br/>
    </form>
  </Page>
</>
  
 );
}

export default AttributeCreation


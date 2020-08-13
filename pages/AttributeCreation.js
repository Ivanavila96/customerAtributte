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


export default class AttCreation extends React.Component  {
  
  state = {
    id:"",
    code:"",
    label:"",
    Type:"",
    sortingorder:"",
    status:"",
    cartpage:"",
    registerpage:"",
    accountpage:"",
    ordergrid:"",
    customergrid:""
  };
  
  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: ""
    });

    this.props.onChange({
      id:"",
      code:"",
      label:"",
      Type:"",
      sortingorder:"",
      status:"",
      cartpage:"",
      registerpage:"",
      accountpage:"",
      ordergrid:"",
      customergrid:""
    });
  };
render(){

 
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
  <form id="inicial">
    <Card sectioned>     
      <TextStyle variation="strong">Use Template:</TextStyle>
        <Drop_1/>
   
      <br/>
      <Heading>Attribute Configuration</Heading>    
      <br/>
      <hr/>
                <br/>
               <TextStyle variation="strong">Show on Cart Page:</TextStyle>
                <input type="checkbox" name="required" value="Yes"/>
                <p>Tick if this attribute is required to be 
                    filled by your customers</p>
                <br/>


                <TextStyle variation="strong">Show on Register Page:</TextStyle>
                <input type="checkbox" name="required" value="Yes"/>
                <p>Tick if this attribute is required to be 
                    filled by your customers</p>
                <br/>
                
       
              
<br/>
<br/>
<Stack distribution="trailing">
<button onClick={e => this.onSubmit(e)}>Add new Atribute</button>
</Stack>
      </Card>
      <br/>
    </form>
  </Page>
</>
  
 );
}
}


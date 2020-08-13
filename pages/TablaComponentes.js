import 'react-dropdown/style.css';
import Dropdown from 'react-dropdown';
import React, {Fragment, Component, useCallback, useState, useRef} from "react";
import {Card,Heading, Button, DataTable ,Link,EmptyState, AppProvider,Layout,Page, Stack, ActionList,  Avatar, ContextualSaveBar, FormLayout,Frame, Loading,Modal, Navigation, SkeletonBodyText, SkeletonDisplayText, SkeletonPage, TextContainer, TextField, Toast, TopBar} from "@shopify/polaris";
import { Redirect } from '@shopify/app-bridge/actions';
import {ArrowLeftMinor, AddMajorMonotone, NoteMajorMonotone, HomeMajorMonotone, OrdersMajorTwotone, MobileHamburgerMajorMonotone, ListMajorMonotone, BankMajorMonotone,TroubleshootMajorMonotone,SettingsMajorMonotone} from '@shopify/polaris-icons';

const AttributeTable = (props) => {
    return(
    <table border="1" cellSpacing="8" cellPadding="10" align="center">
                <thead>
                    <tr>
                    <th>Code</th>
                    <th>Label</th>
                    <th>Type</th>
                    <th>Sorting<br/>Order</th>
                    <th>Status</th>
                    
                      <th>Cart<br/>page</th>
                      <th>Register<br/>page</th>
                      
                   
                    <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                      {props.Atributos.length > 0 ? (props.Atributos.map((Atributo) => (
                        <tr key={Atributo.id}>
                      <td>{Atributo.code}</td>
                      <td>{Atributo.label}</td>
                      <td>{Atributo.Type}</td>
                      <td>{Atributo.sortingorder}</td>
                      <td>{Atributo.status}</td>
                      <td>{Atributo.cartpage}</td>
                      <td>{Atributo.registerpage}</td>
                    
                      <td>
                    <button className="button muted-button">Edit</button>
                    <button  onClick={() => props.deleteAtributo(Atributo.id)} className="button muted-button" className="button muted-button">Delete</button>
                    </td>
                        </tr>
                      ))
                      ):(
                        <tr>
                          <td colSpan={8}>No Atributos Found</td>
                        </tr>
                      )}
                      
                </tbody>
            </table>
    )
}
  export default AttributeTable
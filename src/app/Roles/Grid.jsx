"use client"
import React from 'react';
import { FaEdit, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { Button, Space } from 'antd';
import { privateAPI } from '../../config/constants';

const Table = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && 'display: none'}
  }
`;

const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? 'center' : 'start')};
  width: ${(props) => (props.width ? props.width : 'auto')};
  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && 'display: none'}
  }
`;

const ExpandableTableRow = ({ children, expandComponent, ...otherProps }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <>
      <tr {...otherProps}>
        <Td padding="checkbox">
          <Button onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? <FaAngleUp /> : <FaAngleDown />}</Button>
        </Td>
        {children}
      </tr>
      {isExpanded && (
        <tr>
          {/* <Td padding="checkbox" /> */}
          {expandComponent}
        </tr>
      )}
    </>
  );
};

const Grid = ({ users, setOnEdit, menu, subMenu, rolesMenus, setMenu, setSubMenu, setRolesMenus, handleFetch }) => {

  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handeMenuAccessDelete = async (roleId, menuId) => {
    await privateAPI
      .patch('/menu/rolemenuaccess', { roleId, menuId })
      .then(({ data }) => {
        toast.success(data);
        setMenu([]);
        setSubMenu([]);
        setRolesMenus([]);
        handleFetch();
      })
      .catch(({ data }) => toast.error(data));
  };

  const handeMenuAccessAdd = async (roleId, menuId) => {
    await privateAPI
      .post('/menu/rolemenuaccess', { roleId, menuId })
      .then(({ data }) => {
        toast.success(data);
        setMenu([]);
        setSubMenu([]);
        setRolesMenus([]);
        handleFetch();
      })
      .catch(({ data }) => toast.error(data));
  };

  const handeSubMenuAccessDelete = async (roleId, menuId, subMenuId) => {
    await privateAPI
      .post('http://192.168.0.105:8800/menu/sub-menu-delete-access', { roleId, menuId, subMenuId })
      .then(({ data }) => {
        toast.success(data);
        setMenu([]);
        setSubMenu([]);
        setRolesMenus([]);
        handleFetch();
      })
      .catch(({ data }) => toast.error(data));
  };

  const handeSubMenuAccessAdd = async (roleId, menuId, subMenuId) => {
    await privateAPI
      .post('/submenu/rolesubmenuaccess', { roleId, menuId, subMenuId })
      .then(({ data }) => {
        toast.success(data);
        setMenu([]);
        setSubMenu([]);
        setRolesMenus([]);
        handleFetch();
      })
      .catch(({ data }) => toast.error(data));
  };
console.log("aalalla",`${menu?.length} && ${subMenu.length} && ${rolesMenus?.menu?.length} &&  ${rolesMenus?.submenu?.length}`)
  return (
    <Table>
      <Space direction="vertical" style={{ width: '100%' }}>
      {users.map(item => (
            <ExpandableTableRow
              key={item.name}
              expandComponent={<>
            { 
         menu?.length && subMenu.length && rolesMenus?.menu?.length &&  rolesMenus?.submenu?.length &&   menu?.map((menuItem)=>(
              <div>
             <div style={{display:"flex",alignItems:"center"}} ><span>{menuItem?.menu_name}</span>{rolesMenus?.menu.filter((rolesMenuItem)=>rolesMenuItem.role_id == item.id)?.findIndex((rolemenuItem)=>rolemenuItem.menu_id === menuItem.menu_id ) === -1 ?<Button onClick={()=>{handeMenuAccessAdd(item.id,menuItem.menu_id)}}  size="small" >Add</Button> : <Button onClick={()=>{handeMenuAccessDelete(item.id,menuItem.menu_id)}} color="error"  size="small" >Delete</Button>}</div>
               <div sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
              {

subMenu?.filter((subMenuItem)=>subMenuItem.menu_id===menuItem.menu_id).map((subMenuItem)=>(
  <div>
 <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} ><span>{subMenuItem?.submenu_name}</span>{rolesMenus?.submenu.filter((rolesSubMenuItem)=>rolesSubMenuItem.role_id == item.id)?.findIndex((roleSubMenuItem)=>roleSubMenuItem.submenu_id === subMenuItem.submenu_id ) === -1 ?<Button onClick={()=>{handeSubMenuAccessAdd(item.id,menuItem.menu_id,subMenuItem.submenu_id)}}   size="small">Add</Button> : <Button onClick={()=>{handeSubMenuAccessDelete(item.id,menuItem.menu_id,subMenuItem.submenu_id)}} color="error"  size="small" >Delete</Button>}</div>
              </div>
              ))
              }
              </div>
            </div>
            ) 
            )} 
              </>}
            >
           <Td width="30%">{item.name}</Td>
           {item.name != 'admin' && 
           <><Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </Td></>}
            </ExpandableTableRow>
          ))}
      </Space>
    </Table>
  );
};

export default Grid;
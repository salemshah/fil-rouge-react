import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import {FaUserPlus} from "react-icons/fa";
import {ImUserTie} from "react-icons/im";
import {GiElectric} from "react-icons/gi";
import {Menu, Switch, Row, Col} from 'antd';
import {HomeOutlined, AppstoreOutlined} from '@ant-design/icons';

import {Button, Navbar, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap';

/*const {SubMenu} = Menu;

const Navebar = () => {
    //
    const [state, setState] = useState({
        theme: 'dark'
    });

    // active click menu items
    const [current, setCurrent] = useState("Category")

    // change theme
    const changeTheme = value => {
        setState({
            theme: value ? 'dark' : 'light',
        });
    };

    // select active item by clicking
    const handleActiveClickItem = e => {
        //console.log('click ', e.key);
        setCurrent(e.key);
    };

    return (
        <>

            <Menu theme={state.theme} onClick={handleActiveClickItem} selectedKeys={[current]}
                  mode="horizontal">

                        <SubMenu key="Category" title="Cagetory" icon={<AppstoreOutlined/>}>
                            <SubMenu key="Digital" title="Digital" icon={<GiElectric/>}>
                                <Menu.Item key="Laptop" icon={<GiElectric/>}>Laptop</Menu.Item>
                                <Menu.Item key="Mobile">Mobile</Menu.Item>
                            </SubMenu>

                            <Menu.ItemGroup title="Group Items">
                                <Menu.Item key="setting:3">Option 3</Menu.Item>
                                <Menu.Item key="setting:4">Option 4</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                        <Menu.Item key="home" icon={<HomeOutlined/>}>
                            <Link to="/">
                                Home
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="register" icon={<FaUserPlus/>}>
                            <Link to="/register">
                                Register
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="login" icon={<ImUserTie/>}>
                            <Link to="/login">
                                Login
                            </Link>
                        </Menu.Item>
                        {/!*------- switch the theme ----*!/}
                        <Switch
                            checked={state.theme === 'dark'}
                            onChange={changeTheme}
                            checkedChildren="Dark"
                            unCheckedChildren="Light"
                        />


            </Menu>
        </>
    );
}


export default Navebar;*/


/*-------- navbar--------*/


import {FaListAlt} from "react-icons/fa"
import {FaLaptop} from "react-icons/fa"
import {number} from "prop-types";


const data = [
    {id: 1, title: "Electronique"},
    {id: 2, title: "Electronique"},
    {id: 3, title: "Electronique"},
    {id: 4, title: "Electronique"}
];

const Navebar = () => {
    const [showSublist, setShowSublist] = useState("");
    const [showActive, setShowActive] = useState("");
    const [categoryLists, setCategoryLists] = useState(data)
    const [activeId, setActiveId] = useState(null);

    useEffect(() => {

        const data = categoryLists.map((categoryList) => (
            {...categoryList, status: false}
        ));
        setCategoryLists(data);

    }, [categoryLists.status])

    const onMouseHover = (id) => {
        if(id){
            const data = categoryLists.map(categoryList => {
                if (categoryList.id === id) {
                    setActiveId(categoryList.id);

                    return {...categoryList, status: true}
                } else {
                    return {
                        ...categoryList,
                        status: false
                    }
                }
            })
            setCategoryLists(data)
        }

        console.log(data);

        setShowSublist("show-sublist")
        setShowActive("active-item")
    }
    const onMouseOut = () => {
        setShowSublist("");
        setShowActive("");
    }

    /*console.log(activeId);*/
    return (
        <div>
            <Navbar bg="light" expand="lg" className="py-1">
                <div className="container">
                    <div className="category">
                        {/*-------- category menu --------*/}
                        <Navbar.Brand href="#home">
                            <div className="category-content">
                                <FaListAlt class="category-icon"/>
                                <span> Category</span>
                            </div>
                        </Navbar.Brand>
                        {/*---------------- category list ---------------*/}
                        <div id="sublist-container">

                            <div className="category-list bg-light border">

                                {
                                    categoryLists.map(item =>
                                        <NavDropdown.Item
                                            key={item.id}
                                            onMouseOver={() => onMouseHover(item.id)}
                                            /*onMouseOut={onMouseOut}*/
                                            className="custom-category-item pl-0 py-2 border-bottom overflow-three-dots"
                                            href="#">
                                                <span className="px-3">
                                                    <FaLaptop/>
                                                </span>
                                            <strong className={item.status === true ? "active-item" : ""}>
                                                {item.title}
                                            </strong>
                                        </NavDropdown.Item>
                                    )
                                }
                            </div>
                            {/*-------- category sublist ------*/}
                            <div className={`sublist bg-light shadow d-none d-md-flex ${showSublist}`} id="sublist"
                                 /*onMouseOver={onMouseHover}*/ /*onMouseOut={onMouseOut}*/>
                                <div className="row border-right w-100">
                                    <div className="col-6">
                                        <div className="title">
                                            <h5 className="font-color">Laptops & Computers</h5>
                                        </div>
                                        <div className="elements">
                                            <ul className="ml-4">
                                                <li>Desktop Computers</li>
                                                <li>Monitors</li>
                                                <li>Laptops</li>
                                                <li>iPad & Tablets</li>
                                                <li>Hard Drives & Storage</li>
                                                <li>Printers & Supplies</li>
                                                <li>Computer</li>
                                                <li>Accessories</li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="title">
                                            <h5 className="font-color">Laptops & Computers</h5>
                                        </div>
                                        <div className="elements">
                                            <ul className="ml-4">
                                                <li>Desktop Computers</li>
                                                <li>Monitors</li>
                                                <li>Laptops</li>
                                                <li>iPad & Tablets</li>
                                                <li>Hard Drives & Storage</li>
                                                <li>Printers & Supplies</li>
                                                <li>Computer</li>
                                                <li>Accessories</li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="title">
                                            <h5 className="font-color">Laptops & Computers</h5>
                                        </div>
                                        <div className="elements">
                                            <ul className="ml-4">
                                                <li>Desktop Computers</li>
                                                <li>Monitors</li>
                                                <li>Laptops</li>
                                                <li>iPad & Tablets</li>
                                                <li>Hard Drives & Storage</li>
                                                <li>Printers & Supplies</li>
                                                <li>Computer</li>
                                                <li>Accessories</li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="sublist-main-img ">

                                </div>
                            </div>
                        </div>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        {/**/}
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
};

export default Navebar;

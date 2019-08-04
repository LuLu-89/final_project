import React from 'react';
import { Dropdown, FormControl } from 'react-bootstrap';
import {
    Route,
    Link,
    BrowserRouter
} from 'react-router-dom';
import July from './months/july';
import June from './months/june';
import May from './months/may';
import April from './months/april';
import March from './months/march';
import February from './months/february';

import TestTable from './months/july';


class CustomToggle extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();

        this.props.onClick(e);
    }

    render() {
        return (
            <a href="" onClick={this.handleClick}>
                {this.props.children}
            </a>
        );
    }
}

class CustomMenu extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = { value: '' };
    }

    handleChange(e) {
        this.setState({ value: e.target.value.toLowerCase().trim() });
    }

    handleDropdownChange(e) {
        this.setState({ selectValue: e.target.value });
    }

    render() {
        const {
            children,
            style,
            className,
            'aria-labelledby': labeledBy,
        } = this.props;

        const { value } = this.state;

        return (
            <div style={style} className={className} aria-labelledby={labeledBy}>
                <FormControl
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder="Type to filter..."
                    onChange={this.handleChange}
                    value={value}
                />
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        child =>
                            !value || child.props.children.toLowerCase().startsWith(value),
                    )}
                </ul>
            </div>
        );
    }
}
class MyDropdown extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Dropdown className="test">
                    < Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" onChange={this.handleDropdownChange}>
                        Month
            </Dropdown.Toggle>

                    <Dropdown.Menu as={CustomMenu}>
                        <Dropdown.Item eventKey="1" as='div'>
                            <Link to='/months/july'>
                                July
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2" as='div'>
                            <Link to='/months/june'>
                                June
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3" as='div'>
                            <Link to='/months/may'>
                                May
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="4" as='div'>
                            <Link to='/months/april'>
                                April
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="5" as='div'>
                            <Link to='/months/march'>
                                March
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="6" as='div'>
                            <Link to='/months/february'>
                                February
                            </Link>
                        </Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>

                {/* <TestTable /> */}


                <Route path='/months/july' component={July}></Route>
                <Route path='/months/june' component={June}></Route>
                <Route path='/months/may' component={May}></Route>
                <Route path='/months/april' component={April}></Route>
                <Route path='/months/march' component={March}></Route>
                <Route path='/months/february' component={February}></Route>

            </BrowserRouter>
        )
    }


}

export default MyDropdown;
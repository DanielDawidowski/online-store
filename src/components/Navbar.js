import React from 'react';
import {Box, Text, Heading, Image, Button} from 'gestalt';
import { getToken, clearToken, clearCart } from '../utils';
import { NavLink, withRouter } from 'react-router-dom';

class Navbar extends React.Component {
    handleSignout = () => {
        // clear token
        clearToken()
        // clear cart
        clearCart()
        // redirect home
        this.props.history.push('/')
    }
    
    render() {
        return getToken() !== null ? <AuthNav handleSignout={this.handleSignout} /> : <UnAuthNav/>
    }
}


const AuthNav = ({ handleSignout }) => (
    <Box
        display="flex"
        alignItems="center"
        justifyContent="around"
        height={70}
        color="midnight"
        padding={1}
        shape="roundedBottom"
    >
       {/* Checkout Link  */}
       <NavLink activeClassName="active" to="/checkout">
        <Text size="xl" color="white">Checkout</Text>
       </NavLink>

       {/* title and logo */}
        <NavLink activeClassName="active" exact to="/">
            <Box display="flex" alignItems="center">
            <Box margin={2} height={50} width={50}>
            <Image
                alt="BrewHahah Logo" 
                naturalHeight={1}
                naturalWidth={1}
                src="./icons/logo.svg"
            />
            </Box>
            <Heading size ="xs" color="orange">
                BrewHaha
            </Heading>
            </Box>
        </NavLink>


        {/* Signout Button  */}
        <Button
            onClick={handleSignout}
            color="transparent"
            text="Sign Out"
            inline
            size="md"
        />    

    </Box>


)

const UnAuthNav = () => (
    <Box
        display="flex"
        alignItems="center"
        justifyContent="around"
        height={70}
        color="midnight"
        padding={1}
        shape="roundedBottom"
    >
       {/* Sign In Link  */}
       <NavLink activeClassName="active" to="/signin">
        <Text size="xl" color="white">Sign In</Text>
       </NavLink>

       {/* title and logo */}
        <NavLink activeClassName="active" exact to="/">
            <Box display="flex" alignItems="center">
            <Box margin={2} height={50} width={50}>
            <Image
                alt="BrewHahah Logo" 
                naturalHeight={1}
                naturalWidth={1}
                src="./icons/logo.svg"
            />
            </Box>
            <Heading size ="xs" color="orange">
                BrewHaha
            </Heading>
            </Box>
        </NavLink>


        {/* Sign Up Link  */}
        <NavLink activeClassName="active" to="/signup">
        <Text size="xl" color="white">Sign Up</Text>
       </NavLink>

    </Box>

)

export default withRouter(Navbar);
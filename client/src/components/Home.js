import React from 'react'


const Home = () => {
    return (
        <Container maxWidth="sm">
            {currentUser.loggedIn && <p>Join the party, {currentUser.username}</p>}
            <Button variant="contained" onClick={handleLogout} className={classes.button}>
                Logout
            </Button>
        </Container>
    )
}
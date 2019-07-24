import * as React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

function Login(){
    const [userEmail, setUserEmail] = React.useState('');
    const [userPassword, setUserPassword] = React.useState('');
    const [loading, setLoading] = React.useState('');

    return (
        <Form
            onSubmit={e => {
                e.preventDefault();
                // Auth Handler
            }}
        >
            <Header>Sign In</Header>
            <br />
            <FormGroup>
                <Input 
                    type="email"
                    name="email"
                    value={userEmail}
                    placeholder="alexDeDev@gmail.com"
                    onChange={e => setUserEmail(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Input 
                    type="password"
                    name="password"
                    value={userPassword}
                    onChange={e => setUserPassword(e.target.value)}
                />
            </FormGroup>
            <Button type="submit" disabled={loading} block={true}>
            {loading ? "Loading..." : "Sign In"}
            </Button>
        </Form>
    );
}

export default Login;
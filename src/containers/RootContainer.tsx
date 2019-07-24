import * as React from 'react';

/* Presentation */
import { Wrapper } from '../components/Styles';

import Login from "./Login";

const [state, setState] = useState(initialState);

function RootContainer(){
    return (
        <Wrapper>
            <Login />
        </Wrapper>
    )
}

export default RootContainer;
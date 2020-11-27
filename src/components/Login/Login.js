import React, {useState} from 'react';

const Login = () =>{
    const [user, setUser] = useState({
        id: "",
        pw: ""
    })

    const { id, pw } = user;

    const onChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        alert('hello!');
    }

    return(
        <div>
            <form id="login" onSubmit={onSubmit}>
                <input 
                    name="id" 
                    value={id}
                    onChange={onChange} 
                    placeholder="아이디" />
                <input 
                    name="pw" 
                    value={pw} 
                    onChange={onChange} 
                    placeholder="비밀번호" />
                <button>로그인</button>
            </form>
            <div id="loginSub">
                <a id="find">아이디/비밀번호 찾기</a>
                <a id="find">회원가입</a>
            </div>
        </div>
    );
}

export default Login;
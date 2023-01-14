import React, {FC} from 'react';
import s from './Login.module.css'
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {authFromLogin} from '../../redux/auth-reducer';
import {StateType} from '../../redux/redux-store';
import {Redirect} from 'react-router-dom';
import {LoginFormType} from '../../API/API';
import {Input} from '../common/FormControls/FormControls';
import {minLength, required} from '../../utils/validators/validators';



const LoginForm:FC<InjectedFormProps<LoginFormType>> = (props) => {
    console.log('FORM RERENDERED')


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  placeholder={'email'} name={'email'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field  placeholder={'Password'} name={'password'} component={Input} type={'password'}  validate={[required]}/>
            </div>
            <div>
                <Field  name={'rememberMe'} component={'input'} type={'checkbox'}/>Remember me
            </div>
            <div></div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm<LoginFormType>({
    form: 'login'
})(LoginForm)


const Login = (props:MapDispatchType & MapStateToProps)=> {

    const onSubmit = (formData: LoginFormType) => {
        console.log(formData)
        props.authFromLogin(formData)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile/26933'}/>
    }

    return (
        <div className={s.wrapper}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};


const mapStateToProps = (state:StateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}
type MapStateToProps = ReturnType<typeof mapStateToProps>

const action = {
    authFromLogin
}
type MapDispatchType = typeof action

export default connect(mapStateToProps, action)(Login);



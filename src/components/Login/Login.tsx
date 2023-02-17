import React, {FC} from 'react';
import s from './Login.module.css'
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {authFromLoginTC} from './auth-reducer';
import {StateType} from '../../bll/redux-store';
import {Redirect} from 'react-router-dom';
import {LoginFormType} from '../../api/API';
import {Input} from '../common/FormControls/FormControls';
import {required} from '../../utils/validators/validators';
import formStyles from '../common/FormControls/FormControls.module.css'



const LoginForm:FC<InjectedFormProps<LoginFormType>> = (props) => {
    console.log('FORM RERENDERED')


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  placeholder={'email'} name={'email'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field  placeholder={'password'} name={'password'} component={Input} type={'password'}  validate={[required]}/>
            </div>
            <div>
                <Field  name={'rememberMe'} component={'input'} type={'checkbox'}/>Remember me
            </div>

            {props.error && <div className={formStyles.formSummaryError}>
                {props.error}
            </div>}
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
        props.authFromLogin(formData)
    }

    if (props.isAuth) {
        return <Redirect to={`/profile/${props.userId}`}/>
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
        isAuth: state.auth.isAuth,
        userId: state.auth.id
    }
}
type MapStateToProps = ReturnType<typeof mapStateToProps>

const action = {
    authFromLogin: authFromLoginTC
}
type MapDispatchType = typeof action

export default connect(mapStateToProps, action)(Login);



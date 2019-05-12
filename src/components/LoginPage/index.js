import React, { Component } from 'react';
import style from './style.css';
import loginAsync from '../../common/utils/loginAsync';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false,
            loading: false,
            error: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps) {
        if ((prevProps.loginToken === 'none' ) &&
            (this.props.loginToken === 'success' || this.props.loginToken === 'invalid')) {
            this.setState({
                loading: false
            },()=>{
                if(this.props.loginToken === 'invalid'){
                    this.setState({
                        error: 'Login Failed!'
                    });
                }
            });
        }
        if (prevProps.loginToken === 'invalid' && this.props.loginToken === 'success'){
            this.setState({
                loading: false,
                error: ''
            });
        }
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;

        // stop here if form is invalid
        if (!(username && password)) {
            return;
        }

        this.setState({ loading: true });
        this.props.loginAsync(username, password);
    }

    render() {
        const { username, password, submitted, loading, error } = this.state;
        const { isLoggedIn } = this.props;
        if(isLoggedIn){
            return <Redirect to="/home" />
        }
        return (
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card card-signin my-5">
                    <div className="card-body">
                        <h5 className="card-title text-center">Login</h5>
                        <div className={style.signInInfo}>
                            Username: hruday@gmail.com<br />
                            Password: hruday123
                        </div>
                        <form name="form" onSubmit={this.handleSubmit}>
                            <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                                {submitted && !username &&
                                    <div className={style.errorBlock}>Username is required !</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                                {submitted && !password &&
                                    <div className={style.errorBlock}>Password is required !</div>
                                }
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary" disabled={loading}>Login</button>
                                {loading &&
                                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" alt="loader" />
                                }
                            </div>
                            {error &&
                                <div className={'alert alert-danger'}>{error}</div>
                            }
                            {isLoggedIn &&
                                <div className={style.loginSuccess}>User Loggedin !</div>
                            }
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapActionCreators = {
    loginAsync
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn,
    loginToken: state.loginToken
})

export default connect(mapStateToProps, mapActionCreators)(LoginPage); 